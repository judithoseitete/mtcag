import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "px-8 py-3 md:px-12 md:py-5 text-lg md:text-xl font-bold rounded-lg transition-colors";
  
  const variantStyles = {
    primary: "bg-brand-gray text-white hover:bg-brand-gray/90",
    secondary: "bg-brand-red text-white hover:bg-brand-red/90",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}