"use client";

import { useEffect, useRef, useState } from "react";

interface WordConfig {
  text: string;
  highlight?: boolean;
}

interface AnimatedTypographyProps {
  words: WordConfig[];
  className?: string;
}

export function AnimatedTypography({
  words,
  className = "",
}: AnimatedTypographyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -100px 0px", // Start animation slightly before element is fully in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className={`${className}`}>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${word.highlight ? "text-sage" : "text-text-primary"}`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {word.text}
            {index < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </h2>
    </div>
  );
}
