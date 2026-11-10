interface SimpleLeaderCardProps {
  id: string;
  title: string;
  name: string;
}

export default function SimpleLeaderCard({
  id,
  title,
  name,
}: SimpleLeaderCardProps) {
  return (
    <div id={id} className="scroll-mt-40">
      <div className="bg-brand-blue rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {title}
        </h2>
        
        {/* Photo with name below */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="w-full h-64 md:h-80 lg:h-96 bg-brand-neutral-dark rounded-lg"></div>
          <p className="text-lg md:text-xl font-bold text-white text-center mt-4">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}