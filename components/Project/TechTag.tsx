interface TechTagProps {
  children: React.ReactNode;
}

export function TechTag({ children }: TechTagProps) {
  return (
    <span className="inline-block bg-tag-bg text-text-primary text-sm font-medium px-3 py-1.5 rounded">
      {children}
    </span>
  );
}
