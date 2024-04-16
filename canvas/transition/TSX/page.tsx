'use client';
import { useState, useEffect } from 'react';
import { useCanvas } from '@/app/components/hooks/useCanvas'
import GithubLink from '@/app/components/githublink'
import FlexRowBox from '@/app/components/layout/flexrowbox';
import Button from '@/app/components/button';
const Ball = require('./ball');

export default function Page () {
    const width = 700,
          height = 350;
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
        ball.targetX = ( count * 50 ) % width
        setBall(ball)
        ball.transition(ctxRef.current, performance.now())
    },[count])

    return(
        <div>
            <FlexRowBox>  
                <Button onClick={handler}> Click </Button>
                <canvas ref = {canvasRef} width={width} height={height}></canvas>
            </FlexRowBox>
            <GithubLink tsxURL="https://github.com/d-w-b/sketch/tree/main/transition_ball/TSX" jsURL= "https://github.com/d-w-b/sketch/tree/main/transition_ball/TSX">TSX</GithubLink>
        </div>
    )
}
