interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function PrimaryButton({ children, href, onClick }: PrimaryButtonProps) {
  const baseClasses =
    "bg-sage text-white font-medium px-8 py-3 rounded-md hover:bg-sage-dark transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 hover:scale-105 active:scale-95";

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
