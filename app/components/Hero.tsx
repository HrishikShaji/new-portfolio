"use client"

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Hero() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (boxRef.current) {
      gsap.to(boxRef.current, {
        scale: 2,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center bg-gray-100">
      <div ref={boxRef} className="w-32 h-32 bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
        Scroll Me
      </div>
    </div>
  )
}
