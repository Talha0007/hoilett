import AboutSection from "@/components/AboutSection";
import HeroSection from "../components/hero/HeroSection";
import InfoSection from "@/components/InfoSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <InfoSection />
    </main>
  );
}
