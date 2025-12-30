"use client";

import { useEffect, useState } from "react";

export function useTypewriter(
  text: string,
  speed: number = 50,
  shouldStart: boolean = false
) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // Reset derived state when inputs change
  if (!shouldStart && (displayText !== "" || index !== 0)) {
    setDisplayText("");
    setIndex(0);
  }

  useEffect(() => {
    if (!shouldStart) return;
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [shouldStart, index, text, speed]);

  return displayText;
}
