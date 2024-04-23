'use client'
import { useState, useEffect } from 'react';
import { useCanvas } from '@/app/components/hooks/useCanvas'
import * as d3 from 'd3'

export function Transition() {
    useEffect(()=>{
        let dataset = [{ x:0, y:100 }]
        const ball = d3.select('svg')
                        .append('circle')
                        .data(dataset)
                        .attr('r', 25)
                        .attr('cx', d=>{ return d.x })
                        .attr('cy', d=>{ return d.y })
                        .attr('fill','#bbd1ff')

        ball.on('click', (e,d) => { 
            d.x += 50
            ball.transition().duration(500).attr('cx', `${d.x % 200}`) 
        })
    },[])
    return (
        <>
            <p>Click the ball!</p>
            <svg viewBox='-20 -20 200 200' width={200} height={100} />
        </>
    );
}


export function CanvasTransition() {
    const Ball = require('./ball');
    const width = 300,
          height = 270;
    const { canvasRef , ctxRef } = useCanvas();
    const [ count, setCount ] = useState(1)
    const [ ball, setBall ] = useState(new Ball(50,50,10)) // Ball(cx, cy, radius)

    const handler = ( e : any ) => {
        if (!ball.isTransitioning){
            ball.isTransitioning = true;
            setCount(count+1)
        }
    }

    useEffect(() => {
        ball.draw(ctxRef.current)
    }, [])

    useEffect(() => {
        ball.targetY = ( count * 100 ) % height
        setBall(ball)
        ball.transition(ctxRef.current, performance.now())
    },[count])

    return(
        <div>
            <button style={{padding:'12px', boxShadow:'0 0 4px #888', margin:'0 1rem', borderRadius:'8px'}} onClick={handler}> Click </button>
            <canvas ref = {canvasRef} width={width} height={height}></canvas>
        </div>
    )
}