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

  // Calculate orbit position - symmetrical arrangement
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const radius = isMobile ? 180 : 240;

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
        stiffness: 80,
        damping: 20,
        delay: index * 0.15,
      }}
    >
      <motion.div
        className="relative cursor-pointer select-none"
        onHoverStart={() => onHover(true)}
        onHoverEnd={() => onHover(false)}
        onTap={() => onHover(!isHovered)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Circular Container with Floating Animation */}
        <motion.div
          className="relative z-10 rounded-full flex items-center justify-center"
          style={{
            padding: '24px 32px',
            border: '1px solid #E5E5E5',
            borderColor: isHovered ? '#6B8E7F' : '#E5E5E5',
          }}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
            borderColor: isHovered ? '#6B8E7F' : '#E5E5E5',
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              ...(isHovered && { duration: 0 })
            },
            borderColor: {
              duration: 0.3
            }
          }}
        >
          <motion.p
            className="text-[16px] font-medium text-text-primary whitespace-nowrap"
            style={{ fontFamily: 'Inter, sans-serif' }}
            animate={{
              color: isHovered ? "#6B8E7F" : "#222222",
              rotate: index % 2 === 0 ? -360 : 360,
            }}
            transition={{
              color: { duration: 0.2 },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                ...(isHovered && { duration: 0 })
              }
            }}
          >
            {category.title}
          </motion.p>
        </motion.div>

        {/* Connecting Line to Center - very subtle */}
        <svg
          className="absolute top-1/2 left-1/2 pointer-events-none -z-10"
          style={{
            width: Math.abs(x) + 80,
            height: Math.abs(y) + 80,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <line
            x1="50%"
            y1="50%"
            x2={x > 0 ? "0%" : "100%"}
            y2={y > 0 ? "0%" : "100%"}
            stroke="#EBEBEB"
            strokeWidth="1.5"
            opacity={isHovered ? "0.5" : "0.2"}
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
              transition={{ duration: 0.2 }}
            >
              {category.skills.map((skill, skillIndex) => {
                const skillAngle = (skillIndex / category.skills.length) * 2 * Math.PI - Math.PI / 2;
                const skillRadius = isMobile ? 120 : 160;
                const skillX = Math.cos(skillAngle) * skillRadius;
                const skillY = Math.sin(skillAngle) * skillRadius;

                return (
                  <motion.div
                    key={skillIndex}
                    className="absolute"
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.8 }}
                    animate={{
                      x: skillX,
                      y: skillY,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ x: 0, y: 0, opacity: 0, scale: 0.8 }}
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                      delay: skillIndex * 0.04,
                    }}
                  >
                    {/* Connection line from category to skill - subtle */}
                    <svg
                      className="absolute pointer-events-none"
                      style={{
                        width: Math.abs(skillX) + 40,
                        height: Math.abs(skillY) + 40,
                        left: skillX > 0 ? -Math.abs(skillX) : 0,
                        top: skillY > 0 ? -Math.abs(skillY) : 0,
                      }}
                    >
                      <line
                        x1={skillX > 0 ? "100%" : "0%"}
                        y1={skillY > 0 ? "100%" : "0%"}
                        x2={skillX > 0 ? "0%" : "100%"}
                        y2={skillY > 0 ? "0%" : "100%"}
                        stroke="#EBEBEB"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                    </svg>

                    {/* Skill Pill - Premium Design */}
                    <motion.div
                      className="bg-tag-bg rounded-lg px-4 py-2 whitespace-nowrap shadow-sm"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        minWidth: 'fit-content'
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#E0E0E0",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="text-[16px] font-normal text-text-primary">
                        {skill}
                      </span>
                    </motion.div>
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
    <div className="relative w-full min-h-[700px] md:min-h-[600px] flex items-center justify-center py-20">
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

      {/* Center "Hover" text - positioned at exact center point */}
      <motion.div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p
          className="text-text-secondary text-2xl font-light whitespace-nowrap"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
        </p>
      </motion.div>
    </div>
  );
}
