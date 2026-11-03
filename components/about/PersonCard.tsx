interface PersonCardProps {
  title: string;
  name?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  layout?: "horizontal" | "vertical";
  textColor?: "dark" | "light";
}

export default function PersonCard({
  title,
  name = "Name",
  size = "medium",
  variant = "primary",
  layout = "horizontal",
  textColor = "dark",
}: PersonCardProps) {
  const heightClasses = {
    small: "h-[250px]",
    medium: "h-[300px]",
    large: "h-[400px]",
  };

  const bgColor = variant === "primary" ? "bg-brand-neutral" : "bg-white";
  
  const titleColorClass = textColor === "dark" ? "text-brand-gray" : "text-white";
  const nameColorClass = textColor === "dark" ? "text-brand-gray/70" : "text-white/90";

  return (
    <div>
      <div className={`${bgColor} rounded-lg ${heightClasses[size]}`}></div>
      {layout === "horizontal" ? (
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mt-2 gap-1 md:gap-0">
          {title && (
            <h3 className={`text-lg md:text-xl lg:text-2xl font-bold ${titleColorClass}`}>
              {title}
            </h3>
          )}
          {name && (
            <p className={`text-base md:text-lg lg:text-xl ${nameColorClass}`}>
              {name}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-2">
          {title && (
            <h3 className={`text-lg md:text-xl lg:text-2xl font-bold ${titleColorClass}`}>
              {title}
            </h3>
          )}
          {name && (
            <p className={`text-base md:text-lg lg:text-xl ${nameColorClass}`}>
              {name}
            </p>
          )}
        </div>
      )}
    </div>
  );
}