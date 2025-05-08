'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Cloud({ verticalOffset = 0 }: { verticalOffset?: number }) {
  const cloudRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ left: -200, top: 0 });
  const [opacity, setOpacity] = useState(1);

  const resetPosition = () => {
    setPosition({
      left: Math.random() * (-400 - -100) + -100,
      top: verticalOffset + Math.random() * 20 - 10,
    });
  };

  useEffect(() => {
    resetPosition();
  }, []);

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPosition((prev) => {
        const newLeft = prev.left + 2;
        if (newLeft > window.innerWidth - (window.innerWidth/10)) {
          setOpacity(0); // start fade-out
          // wait for opacity transition to finish
          setTimeout(() => {
            
            setOpacity(1); // fade back in
          }, 2000); // match transition duration

          setTimeout(() => {
            resetPosition();
          },600)
          return prev;
        }
        return { ...prev, left: newLeft };
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div
      ref={cloudRef}
      style={{
        position: "absolute",
        transform: `translate(${position.left}px, ${position.top}px)`,
        opacity: opacity,
        transition: "transform 0.3s linear, opacity 0.5s ease",
      }}
    >
      <Image
        src="/images/cloud.png"
        width={100}
        height={100}
        alt="Cloud"
      />
    </div>
  );
}