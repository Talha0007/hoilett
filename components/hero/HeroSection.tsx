"use client";

import { useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import LoadingScreen from "./LoadingScreen"; // Import our new loader

const Scene = dynamic(() => import("./Scene").then((mod) => mod.default), {
  ssr: false,
});

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="min-h-screen bg-[#000205]" />;

  const services = [
    "Laptop/desktop/server Repair",
    "Virus and spyware Removal",
    "Data recovery and backup",
    "Network design",
    "Cloud services",
    "Cyber security",
  ];

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col bg-[#000205] overflow-x-hidden">
      {/* REAL PROGRESS LOADER */}
      <LoadingScreen />

      <div className="relative h-[50dvh] w-full lg:absolute lg:inset-0 lg:h-full lg:z-0">
        <Scene />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 pb-20 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left items-center lg:items-start pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
              <Activity
                size={14}
                className="text-[#3a86ff] animate-pulse shrink-0"
              />
              <span className="text-white/70 font-mono text-[10px] tracking-[0.2em] uppercase">
                24/7 Technical Support
              </span>
            </div>

            <h1 className="text-[13vw] leading-[0.9] sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tighter">
              Computer <br />
              <span className="text-[#3a86ff] italic">Support!</span>
            </h1>

            <div className="space-y-3 max-w-lg">
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                Effective & Affordable Tech Support
              </p>
              <p className="text-white/40 text-sm sm:text-base lg:text-lg font-medium">
                Our technicians are available 24/7 to assist with your computer
                and network support needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-left">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border border-white/5 bg-white/[0.03] p-3 rounded-xl backdrop-blur-sm"
                >
                  <CheckCircle2 size={16} className="text-[#3a86ff] shrink-0" />
                  <span className="text-white/80 text-[11px] font-bold uppercase">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 w-full sm:w-auto">
              <Link href="/contact">
                <button className="bg-white text-[#000814] px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-[#3a86ff] hover:text-white transition-all w-full sm:min-w-[280px]">
                  ESTABLISH CONNECTION
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block h-[500px]" />
        </div>
      </div>
    </section>
  );
}
