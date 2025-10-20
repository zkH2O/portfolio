"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      {/* Animated vertical timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border-gray overflow-hidden hidden md:block">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-sage origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          style={{ height: "100%" }}
        />
      </div>

      {/* Timeline content with spacing */}
      <div className="space-y-8 md:pl-12">{children}</div>
    </div>
  );
}

interface TimelineItemProps {
  children: ReactNode;
  delay?: number;
}

export function TimelineItem({ children, delay = 0 }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline node (dot) */}
      <motion.div
        className="absolute -left-12 top-8 w-3 h-3 rounded-full bg-sage border-4 border-off-white hidden md:block"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.4,
          delay: delay + 0.3,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.5 }}
      />

      {/* Connecting line from node to card */}
      <motion.div
        className="absolute -left-12 top-8 w-8 h-0.5 bg-sage hidden md:block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.4,
          delay: delay + 0.4,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "left" }}
      />

      {/* Card content */}
      {children}
    </div>
  );
}
