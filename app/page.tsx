import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import AboutSection from "@/components/home/AboutSection";
import EventsSection from "@/components/home/EventsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <EventsSection />
    </main>
  );
}
