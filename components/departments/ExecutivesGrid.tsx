import { Executives } from "@/types";

interface ExecutivesGridProps {
  executives: Executives;
  size?: "small" | "medium";
}

export default function ExecutivesGrid({
  executives,
  size = "medium",
}: ExecutivesGridProps) {
  const executiveRoles = [
    { title: "President", name: executives.president },
    { title: "Vice President", name: executives.vicePresident },
    { title: "Treasurer", name: executives.treasurer },
    { title: "Organizer", name: executives.organizer },
    { title: "Secretary", name: executives.secretary },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {executiveRoles.map((role) => (
        <div key={role.title}>
          <div
            className={`bg-brand-neutral rounded-lg mb-3 ${
              size === "small" ? "h-[200px]" : "h-[250px]"
            }`}
          ></div>
          <div>
            <h4 className="font-bold text-brand-blue-primary text-lg">{role.title}</h4>
            <p className="text-brand-blue-primary/70">{role.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
