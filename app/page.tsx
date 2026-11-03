import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import AboutSection from "@/components/home/AboutSection";
import EventsSection from "@/components/home/EventsSection";
import DepartmentsSection from "@/components/home/DepartmentsSection";
import GivingSection from "@/components/home/GivingSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <EventsSection />
        <DepartmentsSection />
        <GivingSection />
      </main>
      <Footer bgColor="blue" />
    </>
  );
}
