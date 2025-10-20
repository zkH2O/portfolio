"use client";

import { useEffect, useState } from "react";

export function AuroraCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          background:
            "radial-gradient(circle, rgba(107, 142, 127, 0.08) 0%, rgba(107, 142, 127, 0.04) 25%, rgba(107, 142, 127, 0.02) 50%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
