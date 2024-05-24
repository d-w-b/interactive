'use client';

import { useEffect, useRef } from 'react'

export const useCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

    useEffect(() => {
        if ( canvasRef.current ){
            ctxRef.current = canvasRef.current.getContext('2d');
        }

        const getOffsetXY = (e : MouseEvent) => {
            const canvas = canvasRef.current
            if(!canvas) return
            
            const rect = canvas.getBoundingClientRect()
            const x = e.clientX - rect.left,
                  y = e.clientY - rect.top
                
            return { x, y }
        }
    }, [])

    return { canvasRef , ctxRef }
}