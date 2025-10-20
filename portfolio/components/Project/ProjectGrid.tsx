interface ProjectGridProps {
  children: React.ReactNode;
}

export function ProjectGrid({ children }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-8">{children}</div>
  );
}
