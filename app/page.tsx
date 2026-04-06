import AboutSection from "@/components/AboutSection";
import HeroSection from "../components/hero/HeroSection";
import InfoSection from "@/components/InfoSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
      <InfoSection />
    </main>
  );
}
