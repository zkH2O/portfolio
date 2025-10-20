import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialLinkProps {
  platform: "github" | "linkedin" | "email";
  href: string;
  size?: "sm" | "md" | "lg";
}

export function SocialLink({ platform, href, size = "md" }: SocialLinkProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const icons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    email: FaEnvelope,
  };

  const Icon = icons[platform];

  return (
    <a
      href={href}
      className={`text-sage hover:text-sage-dark transition-colors duration-200 ${sizeClasses[size]}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={platform}
    >
      <Icon />
    </a>
  );
}
