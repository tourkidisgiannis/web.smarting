"use client"

import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed: number = 50, shouldStart: boolean = false) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    if (!shouldStart) {
      setDisplayText("")
      return
    }

    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => {
      clearInterval(timer)
    }
  }, [text, speed, shouldStart])

  return displayText
}
