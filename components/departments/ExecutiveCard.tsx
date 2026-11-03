interface ExecutiveCardProps {
  title: string;
  name: string;
  size?: "small" | "medium";
}

export default function ExecutiveCard({
  title,
  name,
  size = "medium",
}: ExecutiveCardProps) {
  const heightClass = size === "small" ? "h-[200px]" : "h-[250px]";

  return (
    <div>
      <div
        className={`bg-brand-neutral rounded-lg ${heightClass} mb-3`}
      ></div>
      <div>
        <h4 className="font-bold text-brand-gray text-lg">{title}</h4>
        <p className="text-brand-gray/70">{name}</p>
      </div>
    </div>
  );
}
