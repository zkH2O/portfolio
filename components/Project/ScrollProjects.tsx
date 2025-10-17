"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  image?: string;
  gradient: string;
}

const featuredProjects: Project[] = [
  {
    title: "CortexGrade",
    subtitle: "AI-Native SaaS Platform",
    description:
      "Lead developer architecting an AI-native SaaS platform for automated assignment grading. Built scalable architecture using Python/FastAPI and React, leveraging Celery and Redis for asynchronous distributed task processing.",
    techStack: ["Python", "FastAPI", "React", "Celery", "Redis", "PostgreSQL"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Viral Hunter",
    subtitle: "AI Content Engine",
    description:
      "Automated system that transforms top Reddit stories into engaging TikTok videos using AI-powered curation and dynamic word-level subtitles. Built AI-powered content curation using LLM to analyze narrative strength and viral potential.",
    techStack: ["Python", "OpenAI", "Whisper", "FFmpeg", "Reddit API"],
    gradient: "from-pink-500 to-orange-500",
  },
  {
    title: "Face Detection Benchmark",
    subtitle: "Performance Analysis",
    description:
      "Rigorous comparative analysis of facial detection models (RetinaFace, Haar Cascade, YOLO) on WIDER FACE dataset. Evaluated three state-of-the-art detection models against challenging unconstrained benchmark.",
    techStack: ["Python", "OpenCV", "YOLO", "NumPy", "Google Colab"],
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "3D Snow Globe",
    subtitle: "Interactive WebGL Experience",
    description:
      "Browser-based 3D physics simulation with photorealistic rendering using WebGL and GPU acceleration. Architected deterministic particle system modeling thousands of snowflakes in real-time.",
    techStack: ["Three.js", "WebGL", "JavaScript"],
    gradient: "from-cyan-500 to-blue-600",
  },
];

export function ScrollProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the entire container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${featuredProjects.length * 100}%`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Calculate which project should be active based on scroll progress
          const progress = self.progress;
          const newIndex = Math.min(
            Math.floor(progress * featuredProjects.length),
            featuredProjects.length - 1
          );
          setActiveIndex(newIndex);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeProject = featuredProjects[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-white overflow-hidden"
    >
      {/* Section Title */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
          Featured Projects
        </h2>
      </div>

      {/* Project Content with AnimatePresence */}
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.4, 0.25, 1],
            }}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            {/* Gradient Background */}
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${activeProject.gradient}`}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-7xl md:text-8xl font-bold text-gray-900 mb-4"
              >
                {activeProject.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl md:text-3xl text-gray-600 mb-8 font-light"
              >
                {activeProject.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto"
              >
                {activeProject.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                {activeProject.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 border border-gray-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {featuredProjects.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              scale: index === activeIndex ? 1.5 : 1,
              opacity: index === activeIndex ? 1 : 0.4,
            }}
            transition={{ duration: 0.3 }}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-gray-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
