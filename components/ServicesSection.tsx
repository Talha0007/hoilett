import { ChevronRight, Target } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ServiceClientWrapper = dynamic(() => import("./ServiceClientWrapper"), {
  ssr: true,
});

export default function OurServices() {
  return (
    /* Background changed to Deep Petrol Blue to contrast with the White sections above and below */
    <section className="bg-[#001529] text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Ambient background glows for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Target size={14} className="text-[#3a86ff]" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-blue-400 font-mono">
              Expertise
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            Our <span className="not-italic text-[#3a86ff]">Services</span>
          </h2>
          <div className="w-20 h-1 bg-[#3a86ff] rounded-full" />
        </div>

        {/* Client Wrapper for Interaction */}
        <ServiceClientWrapper />

        {/* View All Button */}
        <div className="mt-24 flex justify-center">
          <Link
            href="/services"
            className="group relative flex items-center gap-4 px-12 py-6 bg-white text-[#001529] rounded-2xl font-black text-sm tracking-[0.2em] hover:bg-[#3a86ff] hover:text-white transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[#3a86ff]/40"
          >
            VIEW ALL SERVICES
            <ChevronRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
