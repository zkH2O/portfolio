interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export function TechTag({ children, className = "" }: TechTagProps) {
  return (
    <span
      className={`text-text-primary text-lg font-medium rounded-full ${className}`}
      style={{
        padding: '12px 24px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '2px solid rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)'
      }}
    >
      {children}
    </span>
  );
}
