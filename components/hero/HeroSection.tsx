"use client";

import dynamic from "next/dynamic";
import { ShieldCheck, Zap, Activity, CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";

// FIX: Added .then for the dynamic import error
const Scene = dynamic(() => import("./Scene").then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#000814]" />,
});

export default function HeroSection() {
  const services = [
    "Laptop/desktop/server Repair",
    "Virus and spyware Removal",
    "Data recovery and backup",
    "Network design",
    "Cloud services",
    "Cyber security",
  ];

  return (
    <section className="relative h-screen w-full flex items-center pt-20 overflow-hidden">
      <Scene />

      <div className="container mx-auto px-6 lg:px-16 z-10 grid lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-500/5 border border-blue-500/20 shadow-[0_0_15px_rgba(58,134,255,0.1)]">
            <Activity size={16} className="text-[#3a86ff] animate-pulse" />
            <span className="text-white/60 font-mono text-[10px] tracking-widest uppercase">
              24/7 Technical Support
            </span>
          </div>

          {/* Text from your Image */}
          <h2 className="text-6xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter">
            Computer <br />
            <span className="text-[#3a86ff] italic">Support!</span>
          </h2>

          <div className="space-y-2">
            <p className="text-white text-2xl font-bold">
              Effective & Affordable Tech Support
            </p>
            <p className="text-blue-100/40 text-lg max-w-md font-medium leading-relaxed">
              Our support technicians are available 24/7 to assist with your
              computer and network support needs.
            </p>
          </div>

          {/* Service Grid from Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border border-white/10 bg-white/5 p-2 rounded-md"
              >
                <CheckCircle2 size={14} className="text-[#3a86ff]" />
                <span className="text-white/80 text-[12px] font-bold">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href="/contact" className="block w-full sm:w-auto">
              <button className="bg-white text-[#000814] px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-[#3a86ff] hover:text-white transition-all shadow-2xl active:scale-95 w-full sm:w-auto">
                ESTABLISH CONNECTION
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#3a86ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#7ac142]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
