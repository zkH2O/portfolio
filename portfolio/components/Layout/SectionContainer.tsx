interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-16 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
