interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function SecondaryButton({
  children,
  href,
  onClick,
}: SecondaryButtonProps) {
  const baseClasses =
    "border-2 border-sage text-sage font-medium px-8 py-3 rounded-md hover:bg-sage hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 hover:scale-105 active:scale-95";

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
