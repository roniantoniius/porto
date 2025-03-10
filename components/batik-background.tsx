"use client"

import { useEffect, useRef } from "react"

const BatikBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 5 // Make canvas taller to cover the entire page
      drawBatikPattern()
    }

    window.addEventListener("resize", updateCanvasSize)
    updateCanvasSize()

    function drawBatikPattern() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background color
      ctx.fillStyle = "#2A1A0A" // Dark brown background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw batik patterns
      drawWavePatterns()
      drawParangPatterns()
      drawKawungPatterns()
      drawOversizedMotifs()
    }

    function drawWavePatterns() {
      const colors = ["#D4A76A", "#D4AF37", "#8B5A2B"]

      for (let y = 0; y < canvas.height; y += 100) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.globalAlpha = 0.1

        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 20) {
          const amplitude = 10 + Math.random() * 5
          const period = 100 + Math.random() * 50

          if (x === 0) {
            ctx.moveTo(x, y + Math.sin(x / period) * amplitude)
          } else {
            ctx.lineTo(x, y + Math.sin(x / period) * amplitude)
          }
        }
        ctx.stroke()
      }
    }

    function drawParangPatterns() {
      const size = 60
      const colors = ["#D4A76A", "#D4AF37"]

      for (let y = 0; y < canvas.height; y += size * 2) {
        for (let x = 0; x < canvas.width; x += size * 2) {
          const color = colors[Math.floor(Math.random() * colors.length)]
          ctx.strokeStyle = color
          ctx.lineWidth = 1
          ctx.globalAlpha = 0.05

          // Draw diagonal lines
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x + size, y + size)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(x + size, y)
          ctx.lineTo(x, y + size)
          ctx.stroke()
        }
      }
    }

    function drawKawungPatterns() {
      const size = 80
      const colors = ["#D4A76A", "#D4AF37"]

      for (let y = 0; y < canvas.height; y += size) {
        for (let x = 0; x < canvas.width; x += size) {
          const color = colors[Math.floor(Math.random() * colors.length)]
          ctx.strokeStyle = color
          ctx.lineWidth = 1
          ctx.globalAlpha = 0.05

          // Draw circles
          ctx.beginPath()
          ctx.ellipse(x + size / 2, y + size / 2, size / 3, size / 3, 0, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
    }

    function drawOversizedMotifs() {
      const colors = ["#D4A76A", "#D4AF37", "#8B5A2B"]

      // Draw large motifs at random positions
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = 200 + Math.random() * 300
        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.globalAlpha = 0.03

        // Draw spiral or swirl
        ctx.beginPath()
        for (let j = 0; j < 20; j++) {
          const angle = 0.5 * j
          const radius = 10 + (size / 20) * j
          const sx = x + Math.cos(angle) * radius
          const sy = y + Math.sin(angle) * radius

          if (j === 0) {
            ctx.moveTo(sx, sy)
          } else {
            ctx.lineTo(sx, sy)
          }
        }
        ctx.stroke()

        // Draw wave pattern around the spiral
        ctx.beginPath()
        for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
          const waveAmplitude = 20 + Math.sin(angle * 5) * 10
          const radius = size / 2 + waveAmplitude
          const sx = x + Math.cos(angle) * radius
          const sy = y + Math.sin(angle) * radius

          if (angle === 0) {
            ctx.moveTo(sx, sy)
          } else {
            ctx.lineTo(sx, sy)
          }
        }
        ctx.closePath()
        ctx.stroke()
      }
    }

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}

export default BatikBackground

