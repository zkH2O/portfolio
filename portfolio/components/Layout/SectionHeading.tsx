interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-5xl md:text-3xl font-semibold text-text-primary mb-12 ${className}`}
    >
      {children}
    </h2>
  );
}
