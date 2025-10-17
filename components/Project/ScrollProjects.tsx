"use client";

import { useEffect, useRef } from "react";
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
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      });

      // Animate each project
      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        const title = project.querySelector(".project-title");
        const subtitle = project.querySelector(".project-subtitle");
        const description = project.querySelector(".project-description");
        const techStack = project.querySelector(".project-tech");
        const background = project.querySelector(".project-background");

        // Calculate scroll progress ranges for this project
        const startProgress = index / featuredProjects.length;
        const fadeInEnd = (index + 0.4) / featuredProjects.length;
        const fadeOutStart = (index + 0.6) / featuredProjects.length;
        const endProgress = (index + 1) / featuredProjects.length;

        // Timeline for fade in
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${featuredProjects.length * 100}%`,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;

              if (progress >= startProgress && progress <= fadeInEnd) {
                // Fade in phase
                const localProgress =
                  (progress - startProgress) / (fadeInEnd - startProgress);
                gsap.set(project, { opacity: 1, zIndex: 10 });

                // Stagger animations
                gsap.to(background, {
                  scale: 1,
                  opacity: 0.15,
                  duration: 0.1,
                  ease: "power2.out",
                });

                gsap.to(title, {
                  y: 0,
                  opacity: Math.min(localProgress * 2, 1),
                  duration: 0.1,
                  ease: "power2.out",
                });

                gsap.to(subtitle, {
                  y: 0,
                  opacity: Math.min((localProgress - 0.1) * 2, 1),
                  duration: 0.1,
                  ease: "power2.out",
                });

                gsap.to(description, {
                  y: 0,
                  opacity: Math.min((localProgress - 0.2) * 2, 1),
                  duration: 0.1,
                  ease: "power2.out",
                });

                gsap.to(techStack, {
                  y: 0,
                  opacity: Math.min((localProgress - 0.3) * 2, 1),
                  duration: 0.1,
                  ease: "power2.out",
                });
              } else if (progress > fadeInEnd && progress < fadeOutStart) {
                // Hold phase - fully visible
                gsap.set(project, { opacity: 1, zIndex: 10 });
                gsap.set([title, subtitle, description, techStack], {
                  opacity: 1,
                  y: 0,
                });
                gsap.set(background, { scale: 1, opacity: 0.15 });
              } else if (
                progress >= fadeOutStart &&
                progress <= endProgress
              ) {
                // Fade out phase
                const localProgress =
                  (progress - fadeOutStart) / (endProgress - fadeOutStart);
                gsap.to(project, {
                  opacity: 1 - localProgress,
                  zIndex: 5,
                  duration: 0.1,
                  ease: "power2.in",
                });
              } else {
                // Outside range - hidden
                gsap.set(project, { opacity: 0, zIndex: 1 });
              }
            },
          },
        });

        // Initial state
        gsap.set(project, { opacity: index === 0 ? 1 : 0 });
        gsap.set([title, subtitle, description, techStack], {
          y: 40,
          opacity: 0,
        });
        gsap.set(background, { scale: 1.2, opacity: 0 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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

      {/* Project Cards */}
      <div className="relative h-full w-full">
        {featuredProjects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className="absolute inset-0 flex items-center justify-center px-8"
          >
            {/* Gradient Background */}
            <div
              className={`project-background absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0`}
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="project-title text-7xl md:text-8xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="project-subtitle text-2xl md:text-3xl text-gray-600 mb-8 font-light">
                {project.subtitle}
              </p>
              <p className="project-description text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
                {project.description}
              </p>
              <div className="project-tech flex flex-wrap gap-3 justify-center">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {featuredProjects.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-400 opacity-50"
          />
        ))}
      </div>
    </div>
  );
}
