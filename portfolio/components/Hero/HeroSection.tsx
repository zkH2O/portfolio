"use client";

import { motion } from "framer-motion";
import { SocialLink } from "@/components/UI/SocialLink";
import { GeometricBackground } from "@/components/UI/GeometricBackground";
import { FiChevronDown } from "react-icons/fi";

export function HeroSection() {
  // Cinematic animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.4, 0.25, 1] as any, // Apple-style easing
      },
    },
  };

  const chevronVariants = {
    animate: {
      y: [0, 10, 0],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <section className="relative h-screen w-full bg-gray-50 overflow-hidden">
      {/* Subtle 3D Background */}
      <GeometricBackground />

      {/* Main Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 tracking-tight"
          variants={itemVariants}
        >
          Zigao Zeng
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8 font-light"
          variants={itemVariants}
        >
          Machine Learning Engineer & Developer
        </motion.h2>

        {/* Pitch */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          variants={itemVariants}
        >
          UC Davis Computer Science & Statistics student building intelligent,
          scalable systems. Lead developer at CortexGrade, building AI-native
          SaaS platforms.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 justify-center mb-20"
          variants={itemVariants}
        >
          <SocialLink
            platform="github"
            href="https://github.com/yourusername"
          />
          <SocialLink
            platform="linkedin"
            href="https://www.linkedin.com/in/zeng-zi/"
          />
          <SocialLink platform="email" href="mailto:zizeng39@gmail.com" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          variants={chevronVariants}
          animate="animate"
        >
          <FiChevronDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </motion.div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-100/50 pointer-events-none" />
    </section>
  );
}
