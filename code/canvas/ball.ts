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

    constructor( cx : number, cy : number, r : number) {
        this.cx = cx
        this.startX = cx
        this.targetX = cx
        this.cy = cy
        this.startY = cy
        this.targetY = cy
        this.r = r
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
        // fps 기본값 60, 변환이 적용되는 환경에 따라서 설정해주세요.
        // const FPS = 60
        // const steps = ( this.duration / 1000 ) * FPS
        const progress = Math.min( 1, elapsedTime / this.duration )

        if (progress < 1){
            //this.cx += (this.targetX - this.startX) / steps
            this.cx = this.startX + (this.targetX - this.startX) * ( progress < 0 ? 0 : progress )
            //this.cy += (this.targetY - this.startY) / steps
            this.cy = this.startY + (this.targetY - this.startY) * ( progress < 0 ? 0 : progress )
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