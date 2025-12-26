"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

interface MagneticProps {
  children: React.ReactNode
  strength?: number
}

export function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current!.getBoundingClientRect()
      
      const center = { x: left + width / 2, y: top + height / 2 }
      const distance = { x: clientX - center.x, y: clientY - center.y }

      gsap.to(containerRef.current, {
        x: distance.x * strength,
        y: distance.y * strength,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(containerRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)",
      })
    }

    containerRef.current?.addEventListener("mousemove", handleMouseMove)
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove)
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="inline-block transition-transform">
      {children}
    </div>
  )
}
