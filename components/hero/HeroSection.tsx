"use client";

import { useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Activity,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import LoadingScreen from "./LoadingScreen";

const Scene = dynamic(() => import("./Scene").then((mod) => mod.default), {
  ssr: false,
});

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="min-h-screen bg-white" />;

  const services = [
    "Enterprise Network Design",
    "Infrastructure Recovery",
    "Cloud Architecture",
    "Cyber Security Solutions",
    "Managed IT Services",
    "Server Maintenance",
  ];

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col bg-white overflow-hidden font-sans">
      <LoadingScreen />

      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,_#f8fbff_0%,_#ffffff_70%)]" />

      {/* 3D Scene Layer - Absolute so it doesn't push text */}
      <div className="absolute inset-0 z-10 pointer-events-none lg:pointer-events-auto opacity-40 lg:opacity-100">
        <Scene />
      </div>

      {/* Content Area */}
      <div className="relative z-20 container mx-auto px-6 lg:px-16 flex-1 flex flex-col justify-center">
        <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-2 items-center gap-6 lg:gap-12">
          <div className="flex flex-col space-y-4 lg:space-y-6 text-center lg:text-left items-center lg:items-start pt-16 lg:pt-0">
            {/* <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#3a86ff]/5 border border-[#3a86ff]/10">
              <Activity size={12} className="text-[#3a86ff] animate-pulse" />
              <span className="text-[#001f3f] font-mono text-[9px] font-bold tracking-widest uppercase">
                Established 1997 • Next-Gen Networking
              </span>
            </div> */}

            <div className="space-y-2">
              <h1 className="text-[12vw] leading-[0.85] sm:text-6xl lg:text-7xl xl:text-8xl font-black text-black tracking-tighter">
                Network <br />{" "}
                <span className="text-[#3a86ff] italic">Solutions</span>
              </h1>
              <p className="text-[#001f3f] text-lg lg:text-xl font-extrabold tracking-tight uppercase">
                Architecting Resilient Ecosystems
              </p>
            </div>

            <div className="max-w-lg space-y-3">
              <p className="text-black/70 text-xs sm:text-sm lg:text-base leading-relaxed font-medium">
                We engineer high-capacity infrastructure for modern enterprises.
                From local maintenance to global cloud architecture, we ensure
                your business remains connected and secure.
              </p>
              <p className="hidden md:block text-black/50 text-[12px] leading-relaxed italic border-l-2 border-[#3a86ff]/20 pl-4">
                Scalable technology for a data-driven world, Providing the
                silent backbone for your daily operations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full max-w-lg text-left">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border border-slate-100 bg-white/60 p-2 lg:p-3 rounded-xl shadow-sm backdrop-blur-sm"
                >
                  <CheckCircle2 size={14} className="text-[#3a86ff] shrink-0" />
                  <span className="text-[#001f3f] text-[11px] font-bold uppercase tracking-tighter">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 w-full sm:w-auto">
              <Link href="/contact">
                <button className="group bg-[#001f3f] text-white px-8 py-4 rounded-xl font-black text-[11px] tracking-widest hover:bg-[#3a86ff] transition-all w-full flex items-center justify-center gap-3">
                  Contact Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Desktop Spacer */}
          <div className="hidden lg:block h-[400px] w-full pointer-events-none" />
        </div>

        {/* Bottom Trust Bar - Managed to stay visible but subtle */}
        <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-4 lg:gap-8 mt-8 py-6 border-t border-gray-100 w-full max-w-4xl opacity-80">
          <Stat icon={<ShieldCheck size={16} />} text="Ironclad Security" />
          <Stat icon={<Globe2 size={16} />} text="Global Support" />
          <Stat icon={<Zap size={16} />} text="99.9% Uptime" />
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-[#3a86ff]">{icon}</span>
      <span className="text-[9px] lg:text-[10px] font-black text-[#001f3f] uppercase tracking-wider">
        {text}
      </span>
    </div>
  );
}
