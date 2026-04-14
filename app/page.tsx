import AboutSection from "@/components/AboutSection";
import HeroSection from "../components/hero/HeroSection";
import InfoSection from "@/components/InfoSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/ServicesSection";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="w-full">
      <div id="hero-trigger">
        <HeroSection />
      </div>
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
      <InfoSection />
      <ChatWidget />
    </main>
  );
}
