import PersonCard from "./PersonCard";

interface Person {
  title: string;
  name: string;
}

interface LeadershipSectionProps {
  title: string;
  people: Person[];
  variant?: "primary" | "secondary";
  columns?: "single" | "double";
}

export default function LeadershipSection({
  title,
  people,
  variant = "secondary",
  columns = "double",
}: LeadershipSectionProps) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
        {title}
      </h2>
      <div
        className={`grid grid-cols-1 ${columns === "double" ? "md:grid-cols-2" : ""} gap-8`}
      >
        {people.map((person, index) => (
          <PersonCard
            key={index}
            title={person.title}
            name={person.name}
            variant={variant}
            textColor="dark"
          />
        ))}
      </div>
    </div>
  );
}
