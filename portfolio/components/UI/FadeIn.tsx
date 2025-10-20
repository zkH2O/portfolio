"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  distance?: number;
  scale?: boolean;
}

const getDirectionOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
  }
};

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
  distance = 40,
  scale = false,
}: FadeInProps) {
  const offset = getDirectionOffset(direction, distance);

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offset,
        ...(scale && { scale: 0.95 }),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale && { scale: 1 }),
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // Custom ease for smoother motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
