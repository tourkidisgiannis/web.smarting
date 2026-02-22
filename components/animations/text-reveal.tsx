"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap-setup";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  type?: "words" | "chars";
  delay?: number;
  trigger?: "onLoad" | "onScroll";
  stagger?: number;
  duration?: number;
  y?: number;
  rotateX?: number;
  opacity?: number;
  ease?: string;
}

export function TextReveal({
  children,
  className,
  type = "words",
  delay = 0,
  trigger = "onScroll",
  stagger = 0.05,
  duration = 1,
  y = 30,
  rotateX = 20,
  opacity = 0,
  ease = "power4.out",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(".reveal-item");
      if (!items) return;

      const animation = {
        y,
        rotateX,
        opacity,
        duration,
        stagger,
        ease,
        delay,
      };

      if (trigger === "onScroll") {
        gsap.from(items, {
          ...animation,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.from(items, {
          ...animation,
        });
      }
    },
    { scope: containerRef },
  );

  const words = children.split(" ");

  return (
    <div ref={containerRef} className="perspective-[1000px] overflow-visible">
      {type === "words"
        ? words.map((word, i) => (
            <span
              key={i}
              className={cn(
                "reveal-item inline-block whitespace-nowrap align-bottom py-2",
                className,
              )}
              style={{ display: "inline-block" }}
            >
              {word}&nbsp;
            </span>
          ))
        : words.map((word, i) => (
            <span
              key={i}
              className="inline-block whitespace-nowrap align-bottom"
            >
              {word.split("").map((char, j) => (
                <span
                  key={j}
                  className="reveal-item inline-block py-2"
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              &nbsp;
            </span>
          ))}
    </div>
  );
}
