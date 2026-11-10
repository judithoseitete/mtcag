import PersonCard from "./PersonCard";

interface Person {
  title?: string;
  name: string;
}

interface LeadershipCardProps {
  id: string;
  title: string;
  people: Person[];
  columns?: "single" | "double" | "grid";
}

export default function LeadershipCard({
  id,
  title,
  people,
  columns = "double",
}: LeadershipCardProps) {
  const getGridClass = () => {
    if (columns === "single") return "grid grid-cols-1";
    if (columns === "double") return "grid grid-cols-1 md:grid-cols-2 gap-8";
    if (columns === "grid") return "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6";
    return "grid grid-cols-1 md:grid-cols-2 gap-8";
  };

  return (
    <div id={id} className="scroll-mt-40">
      <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {title}
        </h2>
        <div className={getGridClass()}>
          {people.map((person, index) => (
            columns === "grid" ? (
              <div key={index} className="text-center">
                <div className="w-full aspect-square bg-brand-neutral rounded-lg mb-3"></div>
                <p className="text-sm md:text-base font-semibold text-white">
                  {person.name}
                </p>
              </div>
            ) : (
              <PersonCard
                key={index}
                title={person.title}
                name={person.name}
                variant="primary"
                textColor="light"
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}