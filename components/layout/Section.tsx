interface SectionProps {
  children: React.ReactNode;
  variant?: "white" | "gray" | "full-height";
  withContainer?: boolean;
  className?: string;
}

export default function Section({
  children,
  variant = "white",
  withContainer = true,
  className = "",
}: SectionProps) {
  const sectionStyles = {
    white:
      "bg-white min-h-[80vh] flex items-center py-8 md:py-20 px-4 sm:px-6 lg:px-8",
    gray: "bg-brand-neutral-dark min-h-screen flex items-center py-8 md:py-20",
    "full-height": "bg-white min-h-[80vh] flex items-center",
  };

  if (!withContainer) {
    return (
      <section className={`${sectionStyles[variant]} ${className}`}>
        {children}
      </section>
    );
  }

  return (
    <section className={`${sectionStyles[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-brand-neutral rounded-3xl px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-24">
          {children}
        </div>
      </div>
    </section>
  );
}
