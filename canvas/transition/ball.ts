class Ball {
    cx : number;
    cy : number;
    targetX : number;
    targetY : number;
    startTime? : number;
    startX : number;
    startY : number;
    duration : number;
    isTransitioning : boolean;
    r : number;
    color : string;

    constructor( cx : number, cy : number, r : number) {
        this.cx = cx
        this.startX = cx
        this.targetX = cx
        this.cy = cy
        this.startY = cy
        this.targetY = cy
        this.r = r
        this.color = "gold"
        this.duration = 500
        this.isTransitioning = false
    }

    draw(ctx : CanvasRenderingContext2D) {
        if(ctx){
            ctx.beginPath()
            ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2, true)
            ctx.fill()
            ctx.stroke()
        }
    }

    transition(ctx : CanvasRenderingContext2D, timestamp : number){
        if(!this.isTransitioning) return
        if(!this.startTime){
            this.startTime = timestamp
            this.startX = this.cx
            this.startY = this.cy
        }

        const elapsedTime = timestamp - this.startTime;
        const steps = ( this.duration / 1000 ) * 63     // fps : 63
        const progress = Math.min( 1, elapsedTime / this.duration )

        if (progress < 1){
            this.cx += (this.targetX - this.startX) / steps
            this.cy += (this.targetY - this.startY) / steps
            requestAnimationFrame((timestamp) => this.transition(ctx, timestamp));
        }else{
            this.cx = this.targetX
            this.cy = this.targetY
            this.isTransitioning = false;
            this.startTime = undefined;
        }

        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
        this.draw(ctx)
    }
}

module.exports = Ball