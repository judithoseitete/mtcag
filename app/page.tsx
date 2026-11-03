export default function Home() {
  return (
    <main className="min-h-screen bg-brand-neutral">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gray mb-4 md:mb-6">
            More Than Conquerors AG
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-brand-gray/80 mb-8 md:mb-12">
            Welcome to our church website
          </p>
          
          {/* Brand Colors Demo */}
          <div className="flex gap-4 justify-center mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red rounded-lg shadow-lg"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-gray rounded-lg shadow-lg"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-gray rounded-lg shadow-lg"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-yellow rounded-lg shadow-lg"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue rounded-lg shadow-lg"></div>
          </div>
          
          <p className="text-sm md:text-base text-brand-gray/60">
          </p>
        </div>
      </div>
    </main>
  );
}
