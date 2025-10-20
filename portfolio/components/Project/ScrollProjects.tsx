"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionContainer } from "../Layout/SectionContainer";
import { TechTag } from "./TechTag";

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
    title: "Face Detection Benchmark",
    subtitle: "Performance Analysis for Real-World Computer Vision",
    description:
      "Rigorously benchmarked three state-of-the-art detection models (RetinaFace, Haar Cascade, YOLO) against the challenging WIDER FACE dataset. Identified clear operational envelopes for each model, producing quantifiable performance reports to inform production-ready model selection based on speed, accuracy, and robustness trade-offs.",
    techStack: ["Python", "OpenCV", "YOLO", "NumPy", "Google Colab"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "PCA Implementation",
    subtitle: "Computational Data Science & Visualization",
    description:
      "Built Principal Component Analysis algorithm from first principles using NumPy for eigenvalue computation. Applied dimensionality reduction to MNIST dataset, visualizing the mean image and principal components to identify primary axes of variation including stroke thickness and slant.",
    techStack: ["Python", "NumPy", "Matplotlib", "Scikit-learn"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Interactive 3D Snow Globe",
    subtitle: "Real-Time Physics Simulation",
    description:
      "Browser-based 3D application with GPU-accelerated particle physics modeling thousands of snowflakes in real-time. Implemented realistic collision detection and photorealistic glass rendering using environment mapping, reflection, and refraction effects.",
    techStack: ["Three.js", "WebGL", "JavaScript"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Corporate Bankruptcy Prediction",
    subtitle: "High-Rigor ML for Risk Assessment",
    description:
      "Developed robust classification pipeline predicting corporate financial distress using Taiwanese corporate dataset (1999-2009). Evaluated eight diverse ML algorithms, identified SVM as optimal model, and applied advanced oversampling techniques (SMOTE/ADASYN) to address severe class imbalance.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SMOTE"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Viral Hunter",
    subtitle: "AI-Powered Content Engine for TikTok",
    description:
      "Automated system transforming top Reddit stories into engaging TikTok videos using AI-powered curation and dynamic word-level subtitles. Engineered LLM-driven content analysis for narrative strength and viral potential, with automated multi-part story splitting and follower growth optimization.",
    techStack: ["Python", "OpenAI", "Whisper", "FFmpeg", "Reddit API"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Cloud-Native Game Server",
    subtitle: "Infrastructure & DevOps on OCI",
    description:
      "End-to-end deployment of resource-intensive modded Minecraft server on Oracle Cloud Infrastructure. Architected containerized deployment using Docker Compose, configured multi-layered network security with VCN Security Lists and UFW firewall, and debugged critical server crashes through systematic log analysis.",
    techStack: ["Docker", "OCI", "Linux", "Docker Compose", "Networking"],
    gradient: "from-slate-500 to-zinc-600",
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
            <SectionContainer>
              <div className="relative z-10 text-center">
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
                  className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
                >
                  {activeProject.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap justify-center"
                  style={{ gap: '12px' }}
                >
                  {activeProject.techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                    >
                      <TechTag>{tech}</TechTag>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </SectionContainer>
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
