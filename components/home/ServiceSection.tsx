import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section className="bg-white min-h-[80vh] flex items-center border-t-4 border-brand-blue">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-gray text-center mb-8 md:mb-12">
          Join us this Sunday
        </h2>
        <div className="flex flex-col md:flex-row md:divide-x-2 divide-brand-gray/30">
          <ServiceCard
            title="Time"
            mainText="8:00 AM to<br />10:30 AM"
            buttonText="See other weekly times"
            showDivider={true}
            dividerPosition="bottom"
          />
          <ServiceCard
            title="Location"
            mainText='Sowutuom, Accra<br class="md:hidden" /><span class="hidden md:inline">, </span>Ghana'
            buttonText="Get directions"
            dividerPosition="right"
          />
        </div>
      </div>
    </section>
  );
}
