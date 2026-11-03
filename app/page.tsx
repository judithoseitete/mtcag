export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-brand-gray mb-4">
          More Than Conquerors AG
        </h1>
        <p className="text-xl text-brand-gray/80 mb-8">
          Welcome to our church website
        </p>
        <div className="flex gap-4 justify-center">
          <div className="w-20 h-20 bg-brand-red rounded-lg"></div>
          <div className="w-20 h-20 bg-brand-neutral border-2 border-brand-gray rounded-lg"></div>
          <div className="w-20 h-20 bg-brand-gray rounded-lg"></div>
          <div className="w-20 h-20 bg-brand-yellow rounded-lg"></div>
        </div>
        <p className="text-sm text-brand-gray/60 mt-4">
          Phase 1: Foundation & Infrastructure ✓
        </p>
      </div>
    </div>
  );
}
