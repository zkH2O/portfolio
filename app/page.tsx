"use client";

import { Section } from "@/components/Layout/Section";
import { SectionContainer } from "@/components/Layout/SectionContainer";
import { SectionHeading } from "@/components/Layout/SectionHeading";
import { ProjectCard } from "@/components/Project/ProjectCard";
import { ProjectGrid } from "@/components/Project/ProjectGrid";
import { ExperienceCard } from "@/components/Experience/ExperienceCard";
import { Timeline, TimelineItem } from "@/components/Experience/Timeline";
import { SkillsGrid } from "@/components/Skills/SkillsGrid";
import { ExplodedSkills } from "@/components/Skills/ExplodedSkills";
import { SocialLink } from "@/components/UI/SocialLink";
import { FadeIn } from "@/components/UI/FadeIn";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ScrollProjects } from "@/components/Project/ScrollProjects";
import { AnimatedTypography } from "@/components/About/AnimatedTypography";

export default function Home() {
  const skillsData = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript/TypeScript", "SQL", "C++", "Java"],
    },
    {
      title: "AI/ML",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "spaCy"],
    },
    {
      title: "Backend & Databases",
      skills: ["FastAPI", "Node.js", "PostgreSQL", "Docker", "REST APIs"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Platforms & Tools",
      skills: ["AWS", "GCP", "Git", "Linux", "Vercel"],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <Section background="dark" id="about">
        <SectionContainer>
          <FadeIn direction="left" distance={60}>
            <SectionHeading>About Me</SectionHeading>
          </FadeIn>

          <div className="mt-12 mb-16">
            <AnimatedTypography
              words={[
                { text: "Building" },
                { text: "intelligent,", highlight: true },
                { text: "scalable", highlight: true },
                { text: "systems" },
                { text: "that" },
                { text: "solve" },
                { text: "real-world" },
                { text: "problems." },
              ]}
              className="mb-12"
            />
          </div>

          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl">
              <div>
                <p className="text-lg text-text-primary leading-relaxed mb-4">
                  My passion lies at the intersection of statistics and
                  software. My experience leading full-stack development at
                  CortexGrade instilled a drive to not only engineer complex
                  systems but also to deliver tangible business value through
                  AI-native platforms.
                </p>
                <p className="text-lg text-text-primary leading-relaxed">
                  I am currently exploring new challenges in AI/ML, from
                  building intelligent automation systems to full-stack AI
                  applications that solve real-world problems at scale.
                </p>
              </div>
            </div>
          </FadeIn>
        </SectionContainer>
      </Section>

      {/* Experience Section */}
      <Section background="light" id="experience">
        <SectionContainer>
          <FadeIn direction="left" distance={60}>
            <SectionHeading>Experience</SectionHeading>
          </FadeIn>

          <Timeline>
            <TimelineItem delay={0.1}>
              <FadeIn delay={0.1}>
                <ExperienceCard
                  company="CortexGrade"
                  role="Full Stack Developer & Architect"
                  dates="January 2024 - June 2025"
                  description="Lead developer architecting an AI-native SaaS platform for automated assignment grading."
                  achievements={[
                    "Designed and implemented scalable architecture using Python/FastAPI and React, leveraging Celery and Redis for asynchronous distributed task processing of high-throughput grading jobs",
                    "Developed Intelligent Review Queue with AI-driven confidence scoring, reducing manual review time by a projected 30%",
                    "Implemented Intelligent Roster feature using fuzzy-matching algorithms for automated data cleaning",
                    "Built complete monetization pipeline with Stripe integration for two-tier business model, securing payment lifecycle via webhooks",
                  ]}
                />
              </FadeIn>
            </TimelineItem>

            <TimelineItem delay={0.2}>
              <FadeIn delay={0.2}>
                <ExperienceCard
                  company="Ascent"
                  role="Full Stack Software Engineer Intern"
                  dates="July 2022 - September 2023"
                  description="Led critical initiatives spanning front-end architecture, product stability, and AI integration for enterprise clients."
                  achievements={[
                    "Spearheaded complete redesign of administrative settings portal with dynamic white-labeling theme customization using C#, HTML5, and CSS3",
                    "Reduced user-reported issue tickets by 25% through proactive bug identification and resolution across front-end application",
                    "Integrated LLM chatbot into customer support workflow, automating query resolution and enhancing support efficiency",
                  ]}
                />
              </FadeIn>
            </TimelineItem>

            <TimelineItem delay={0.3}>
              <FadeIn delay={0.3}>
                <ExperienceCard
                  company="SVCSA Sports"
                  role="Software Developer Intern"
                  dates="June 2025 - October 2025"
                  description="Re-platformed and stabilized mission-critical legacy infrastructure to unblock development team velocity."
                  achievements={[
                    "Architected MAMP environment matching legacy production specs, resolving critical authentication incompatibility by strategic database downgrade to MySQL 5.7",
                    "Diagnosed and eliminated intermittent server, routing, and database failures, transforming non-functional application into reliable testing platform",
                    "Performed deep-dive debugging into ThinkPHP framework, identifying and patching deprecated function causing catastrophic failures",
                    "Reduced setup time from days to minutes, unblocking immediate progress on core product features",
                  ]}
                />
              </FadeIn>
            </TimelineItem>
          </Timeline>
        </SectionContainer>
      </Section>

      {/* Projects Section - Apple-style Scroll Animation */}
      <ScrollProjects />

      {/* Skills Section */}
      <Section background="light" id="skills">
        <SectionContainer>
          <FadeIn direction="left" distance={60}>
            <SectionHeading>Skills</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <ExplodedSkills categories={skillsData} />
          </FadeIn>
        </SectionContainer>
      </Section>

      {/* Education Section */}
      <Section background="dark" id="education">
        <SectionContainer>
          <FadeIn direction="left" distance={60}>
            <SectionHeading>Education & Certifications</SectionHeading>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-xl border border-border-gray p-8">
              <h3 className="text-2xl font-semibold text-text-primary mb-2">
                University of California, Davis
              </h3>
              <p className="text-lg text-text-primary mb-2">
                B.S. in Computer Science
              </p>
              <p className="text-lg text-text-primary mb-4">
                B.S. in Statistics, Machine Learning Emphasis
              </p>
              <p className="text-base text-text-secondary mb-4">
                Expected Graduation: December 2025
              </p>
              <div>
                <p className="text-base font-medium text-text-primary mb-2">
                  Relevant Coursework:
                </p>
                <p className="text-base text-text-primary">
                  Machine Learning • Artificial Intelligence • Computer Vision
                  and Graphics • Statistical Learning • Big Data Analytics •
                  Optimization • Theory of Computation • Operating Systems
                </p>
              </div>
            </div>
          </FadeIn>
        </SectionContainer>
      </Section>

      {/* Contact Section */}
      <Section background="light" id="contact">
        <SectionContainer>
          <FadeIn>
            <div className="text-center py-16">
              <h2 className="text-5xl md:text-3xl font-semibold text-text-primary mb-8">
                Let&apos;s Connect
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                I&apos;m always open to new opportunities and conversations
                about AI, ML, and tech.
              </p>
              <a
                href="mailto:zizeng39@gmail.com"
                className="text-2xl text-sage hover:text-sage-dark transition-colors mb-6 inline-block"
              >
                zizeng39@gmail.com
              </a>
              <div className="flex gap-6 justify-center mt-6">
                <SocialLink
                  platform="github"
                  href="https://github.com/yourusername"
                  size="lg"
                />
                <SocialLink
                  platform="linkedin"
                  href="https://www.linkedin.com/in/zeng-zi/"
                  size="lg"
                />
              </div>
            </div>
          </FadeIn>
        </SectionContainer>
      </Section>
    </main>
  );
}
