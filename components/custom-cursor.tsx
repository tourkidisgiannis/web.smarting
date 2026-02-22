"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [cursorText, setCursorText] = useState("");

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;

    if (!cursor || !follower) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      setIsHidden(false);
      
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, .cursor-pointer");
      const customLabel = (target.closest("[data-cursor-text]") as HTMLElement)?.dataset.cursorText;

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none",
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
        scale: customLabel ? 3 : (isInteractive ? 2.5 : 1),
      });

      if (customLabel) {
        setCursorText(customLabel);
        gsap.to(label, { opacity: 1, duration: 0.2 });
      } else {
        gsap.to(label, { opacity: 0, duration: 0.2 });
      }
    };

    const onMouseDown = () => {
      gsap.to(follower, {
        scale: 0.8,
        duration: 0.2,
      });
    };

    const onMouseUp = () => {
      gsap.to(follower, {
        scale: isPointer ? 2.5 : 1,
        duration: 0.2,
      });
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-pointer")) {
        setIsPointer(true);
      }
    };

    const onMouseLeave = () => {
      setIsPointer(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
    };
  }, [isPointer]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-500 ${isHidden ? 'opacity-0' : 'opacity-100 hidden md:block'}`}>
      <div
        ref={cursorRef}
        className="fixed w-1.5 h-1.5 bg-white rounded-full mix-blend-difference z-50"
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-white/40 rounded-full mix-blend-difference flex items-center justify-center overflow-hidden bg-white/5"
      >
        <span 
          ref={labelRef}
          className="text-[4px] font-bold tracking-widest text-white uppercase opacity-0"
        >
          {cursorText}
        </span>
      </div>
    </div>
  );
}
