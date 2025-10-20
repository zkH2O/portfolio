interface SectionProps {
  children: React.ReactNode;
  background?: "light" | "dark";
  className?: string;
  id?: string;
}

export function Section({
  children,
  background = "light",
  className = "",
  id,
}: SectionProps) {
  const bgColor = background === "light" ? "bg-off-white" : "bg-white";

  return (
    <section id={id} className={`py-32 md:py-16 ${bgColor} ${className}`}>
      {children}
    </section>
  );
}
