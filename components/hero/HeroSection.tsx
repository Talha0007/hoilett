"use client";

import { useLayoutEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Activity, CheckCircle2, ArrowRight } from "lucide-react";
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
    <section className="relative min-h-[100dvh] w-full flex flex-col bg-white overflow-x-hidden font-sans">
      <LoadingScreen />

      {/* CORPORATE LIGHT GRADIENT */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,_#f0f7ff_0%,_#ffffff_60%)]" />

      {/* 3D Scene - Subtle transparency for light mode */}
      <div className="relative h-[45dvh] w-full lg:absolute lg:inset-0 lg:h-full lg:z-10 opacity-90">
        <Scene />
      </div>

      <div className="relative z-20 container mx-auto px-6 sm:px-10 lg:px-16 pb-20 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-2 items-center gap-12">
          <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left items-center lg:items-start pt-12 lg:pt-0">
            {/* Industry Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#3a86ff]/5 border border-[#3a86ff]/10 backdrop-blur-sm">
              <Activity
                size={14}
                className="text-[#3a86ff] animate-pulse shrink-0"
              />
              <span className="text-[#001f3f] font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                Next-Gen Networking
              </span>
            </div>

            {/* Sharp Typography - High Contrast */}
            <h1 className="text-[12vw] leading-[0.9] sm:text-7xl lg:text-8xl xl:text-9xl font-black text-[#000000] tracking-tighter">
              Network <br />
              <span className="text-[#3a86ff] italic">Solutions.</span>
            </h1>

            <div className="space-y-4 max-w-lg">
              <p className="text-[#001f3f] text-xl sm:text-2xl font-bold">
                Scalable Infrastructure for Modern Business
              </p>
              <p className="text-[#000000]/60 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                We design and deploy high-performance network architectures that
                keep your business connected, secure, and ready for growth.
              </p>
            </div>

            {/* Modern Card-style Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl text-left">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border border-slate-100 bg-white/80 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all backdrop-blur-md"
                >
                  <CheckCircle2 size={18} className="text-[#3a86ff] shrink-0" />
                  <span className="text-[#001f3f] text-[11px] font-extrabold uppercase tracking-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 w-full sm:w-auto">
              <Link href="/contact">
                <button className="group bg-[#001f3f] text-white px-10 py-6 rounded-2xl font-black text-sm tracking-widest hover:bg-[#3a86ff] transition-all w-full sm:min-w-[320px] flex items-center justify-center gap-4 shadow-xl shadow-blue-900/10">
                  ESTABLISH CONNECTION
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* Spacer for 3D Scene on Desktop */}
          <div className="hidden lg:block h-[600px]" />
        </div>
      </div>
    </section>
  );
}
