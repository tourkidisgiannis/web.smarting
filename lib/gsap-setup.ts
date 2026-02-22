"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);
  
  // Set default ease
  gsap.defaults({
    ease: "power2.out",
    duration: 0.8,
  });

  // Optional: Global ScrollTrigger configuration
  ScrollTrigger.config({
    limitCallbacks: true,
  });
}

export { gsap, ScrollTrigger, ScrollToPlugin, useGSAP };
