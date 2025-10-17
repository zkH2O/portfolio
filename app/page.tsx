"use client";

import { Section } from "@/components/Layout/Section";
import { SectionContainer } from "@/components/Layout/SectionContainer";
import { SectionHeading } from "@/components/Layout/SectionHeading";
import { ProjectCard } from "@/components/Project/ProjectCard";
import { ProjectGrid } from "@/components/Project/ProjectGrid";
import { ExperienceCard } from "@/components/Experience/ExperienceCard";
import { SkillsGrid } from "@/components/Skills/SkillsGrid";
import { SocialLink } from "@/components/UI/SocialLink";
import { FadeIn } from "@/components/UI/FadeIn";

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
      <Section background="light">
        <SectionContainer>
          <FadeIn>
            <div className="text-center py-16">
              <h1 className="text-7xl md:text-5xl font-bold text-text-primary mb-6">
                Zigao Zeng
              </h1>
              <h2 className="text-2xl md:text-xl text-text-secondary mb-8">
                Machine Learning Engineer & Developer
              </h2>
              <p className="text-lg text-text-primary max-w-3xl mx-auto mb-8 leading-relaxed">
                UC Davis Computer Science & Statistics student building
                intelligent, scalable systems. Lead developer at CortexGrade,
                building AI-native SaaS platforms.
              </p>
              <div className="flex gap-6 justify-center">
                <SocialLink
                  platform="github"
                  href="https://github.com/yourusername"
                />
                <SocialLink
                  platform="linkedin"
                  href="https://www.linkedin.com/in/zeng-zi/"
                />
                <SocialLink
                  platform="email"
                  href="mailto:zizeng39@gmail.com"
                />
              </div>
            </div>
          </FadeIn>
        </SectionContainer>
      </Section>

      {/* About Me Section */}
      <Section background="dark" id="about">
        <SectionContainer>
          <FadeIn>
            <SectionHeading>About Me</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
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
          <FadeIn>
            <SectionHeading>Experience</SectionHeading>
          </FadeIn>

          <div className="space-y-8">
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
          </div>
        </SectionContainer>
      </Section>

      {/* Projects Section */}
      <Section background="dark" id="projects">
        <SectionContainer>
          <FadeIn>
            <SectionHeading>Projects</SectionHeading>
          </FadeIn>

          <ProjectGrid>
            <FadeIn delay={0.1}>
              <ProjectCard
                title="Viral Hunter - AI Content Engine"
                description="Automated system that transforms top Reddit stories into engaging TikTok videos using AI-powered curation and dynamic word-level subtitles."
                techStack={["Python", "OpenAI", "Whisper", "FFmpeg", "Reddit API"]}
                highlights={[
                  "Built AI-powered content curation using LLM to analyze narrative strength and viral potential",
                  "Engineered dynamic word-level subtitle system using Whisper timestamps and complex FFmpeg filters",
                  "Implemented 'Follower Flywheel' engine for multi-part story splitting with automated CTAs",
                ]}
                githubUrl="https://github.com/yourusername/viral-hunter"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ProjectCard
                title="Face Detection Performance Benchmark"
                description="Rigorous comparative analysis of facial detection models (RetinaFace, Haar Cascade, YOLO) on WIDER FACE dataset."
                techStack={["Python", "OpenCV", "YOLO", "NumPy", "Google Colab"]}
                highlights={[
                  "Evaluated three state-of-the-art detection models against challenging unconstrained benchmark",
                  "Identified operational envelopes for each model across accuracy, speed, and robustness dimensions",
                  "Produced quantifiable performance report for production model selection",
                ]}
                githubUrl="https://github.com/yourusername/face-detection-benchmark"
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <ProjectCard
                title="Interactive 3D Snow Globe"
                description="Browser-based 3D physics simulation with photorealistic rendering using WebGL and GPU acceleration."
                techStack={["Three.js", "WebGL", "JavaScript"]}
                highlights={[
                  "Architected deterministic particle system modeling thousands of snowflakes in real-time",
                  "Implemented realistic collision detection and physics simulation pipeline",
                  "Achieved photorealistic glass rendering using environment mapping, reflection, and refraction",
                ]}
                liveUrl="https://yourwebsite.com/snow-globe"
                githubUrl="https://github.com/yourusername/snow-globe"
              />
            </FadeIn>

            <FadeIn delay={0.4}>
              <ProjectCard
                title="Corporate Bankruptcy Prediction"
                description="High-rigor ML classification pipeline predicting financial distress using imbalanced Taiwanese corporate dataset (1999-2009)."
                techStack={["Python", "Scikit-learn", "XGBoost", "Pandas", "SMOTE"]}
                highlights={[
                  "Conducted rigorous evaluation across 8 diverse ML algorithms, identifying SVM as optimal model",
                  "Applied advanced oversampling techniques (SMOTE/ADASYN) to address severe class imbalance",
                  "Achieved production-ready model for early warning signals of corporate distress",
                ]}
                githubUrl="https://github.com/yourusername/bankruptcy-prediction"
              />
            </FadeIn>
          </ProjectGrid>
        </SectionContainer>
      </Section>

      {/* Skills Section */}
      <Section background="light" id="skills">
        <SectionContainer>
          <FadeIn>
            <SectionHeading>Skills</SectionHeading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SkillsGrid categories={skillsData} />
          </FadeIn>
        </SectionContainer>
      </Section>

      {/* Education Section */}
      <Section background="dark" id="education">
        <SectionContainer>
          <FadeIn>
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
