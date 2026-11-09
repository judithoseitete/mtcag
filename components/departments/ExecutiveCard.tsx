interface ExecutiveCardProps {
  title: string;
  name: string;
}

export default function ExecutiveCard({ title, name }: ExecutiveCardProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-brand-neutral rounded-lg flex-1 mb-3"></div>
      <div>
        <h4 className="font-bold text-brand-blue-primary text-lg">{title}</h4>
        <p className="text-brand-blue-primary/70">{name}</p>
      </div>
    </div>
  );
}
