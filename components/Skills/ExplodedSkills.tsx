"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface ExplodedSkillsProps {
  categories: SkillCategory[];
}

// Central Neural Network Icon Component
function NeuralNetworkIcon() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Connections */}
      <g opacity="0.3" stroke="#4A5568" strokeWidth="1">
        <line x1="60" y1="30" x2="60" y2="60" />
        <line x1="60" y1="60" x2="30" y2="90" />
        <line x1="60" y1="60" x2="90" y2="90" />
        <line x1="60" y1="60" x2="60" y2="90" />
      </g>

      {/* Nodes */}
      <circle cx="60" cy="30" r="8" fill="#8B9D83" className="animate-pulse" />
      <circle cx="60" cy="60" r="12" fill="#6B7F63" />
      <circle cx="30" cy="90" r="8" fill="#8B9D83" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="60" cy="90" r="8" fill="#8B9D83" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <circle cx="90" cy="90" r="8" fill="#8B9D83" className="animate-pulse" style={{ animationDelay: '0.9s' }} />

      {/* Central glow */}
      <circle cx="60" cy="60" r="12" fill="#6B7F63" opacity="0.5" className="animate-ping" />
    </svg>
  );
}

// Skill Category Node Component
interface CategoryNodeProps {
  category: SkillCategory;
  index: number;
  total: number;
  isHovered: boolean;
  onHover: (hover: boolean) => void;
}

function CategoryNode({ category, index, total, isHovered, onHover }: CategoryNodeProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate orbit position
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const radius = isMobile ? 150 : 200;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute"
      style={{
        left: "50%",
        top: "50%",
      }}
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: x,
        y: y,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
    >
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => onHover(true)}
        onHoverEnd={() => onHover(false)}
        onTap={() => onHover(!isHovered)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Category Circle */}
        <div className="w-24 h-24 md:w-20 md:h-20 rounded-full bg-sage flex items-center justify-center shadow-lg border-2 border-sage-dark relative z-10">
          <span className="text-white font-semibold text-center text-sm px-2">
            {category.title}
          </span>
        </div>

        {/* Connecting Line to Center */}
        <svg
          className="absolute top-1/2 left-1/2 pointer-events-none -z-10"
          style={{
            width: Math.abs(x) + 60,
            height: Math.abs(y) + 60,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <line
            x1="50%"
            y1="50%"
            x2={x > 0 ? "0%" : "100%"}
            y2={y > 0 ? "0%" : "100%"}
            stroke="#CBD5E0"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.3"
          />
        </svg>

        {/* Expanded Skills */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {category.skills.map((skill, skillIndex) => {
                const skillAngle = (skillIndex / category.skills.length) * 2 * Math.PI - Math.PI / 2;
                const skillRadius = 100;
                const skillX = Math.cos(skillAngle) * skillRadius;
                const skillY = Math.sin(skillAngle) * skillRadius;

                return (
                  <motion.div
                    key={skillIndex}
                    className="absolute"
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{
                      x: skillX,
                      y: skillY,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: skillIndex * 0.05,
                    }}
                  >
                    {/* Connection line from category to skill */}
                    <svg
                      className="absolute pointer-events-none"
                      style={{
                        width: Math.abs(skillX) + 20,
                        height: Math.abs(skillY) + 20,
                        left: skillX > 0 ? -Math.abs(skillX) : 0,
                        top: skillY > 0 ? -Math.abs(skillY) : 0,
                      }}
                    >
                      <line
                        x1={skillX > 0 ? "100%" : "0%"}
                        y1={skillY > 0 ? "100%" : "0%"}
                        x2={skillX > 0 ? "0%" : "100%"}
                        y2={skillY > 0 ? "0%" : "100%"}
                        stroke="#8B9D83"
                        strokeWidth="1.5"
                        opacity="0.4"
                      />
                    </svg>

                    {/* Skill bubble */}
                    <div className="bg-white border-2 border-sage rounded-full px-4 py-2 shadow-md whitespace-nowrap">
                      <span className="text-text-primary text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// Main Exploded Skills Component
export function ExplodedSkills({ categories }: ExplodedSkillsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[500px] flex items-center justify-center py-16">
      {/* Central Neural Network */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <NeuralNetworkIcon />
        </motion.div>
      </div>

      {/* Orbiting Category Nodes */}
      {categories.map((category, index) => (
        <CategoryNode
          key={index}
          category={category}
          index={index}
          total={categories.length}
          isHovered={hoveredIndex === index}
          onHover={(hover) => setHoveredIndex(hover ? index : null)}
        />
      ))}

      {/* Instruction text */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-text-secondary text-sm">
          Hover or tap a category to explore skills
        </p>
      </motion.div>
    </div>
  );
}
