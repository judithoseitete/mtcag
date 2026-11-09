import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center";
  
  const variantStyles = {
    primary: "bg-brand-blue text-white hover:bg-brand-red",
    secondary: "bg-brand-yellow text-brand-blue hover:bg-brand-red hover:text-white",
    outline:
      "border-2 border-brand-blue text-brand-blue hover:bg-brand-red hover:border-brand-red hover:text-white",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
