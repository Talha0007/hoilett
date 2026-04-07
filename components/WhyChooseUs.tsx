"use client";

import Image from "next/image";
import { CheckCircle2, Cpu, Activity, Shield, Award, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const InteractiveFeatureGrid = dynamic(() => import("./InteractiveGrid"), {
  ssr: true,
});

export default function WhyChooseUs() {
  return (
    <section className="bg-white text-[#001f3f] py-24 lg:py-32 overflow-hidden relative">
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* --- Section Header --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-end">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 w-fit">
              <Zap size={14} className="text-[#3a86ff] fill-[#3a86ff]" />
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[#3a86ff]">
                Operational Excellence
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-[#001f3f]">
              Why <span className="text-[#3a86ff]">Choose</span> <br />
              <span className="italic">The Best?</span>
            </h2>
          </div>
          <div className="relative">
            <p className="text-[#001f3f]/60 text-xl lg:text-2xl font-medium leading-relaxed border-l-4 border-[#3a86ff] pl-8 py-2">
              We provide enterprise-grade hardware optimization and 24/7
              technical surveillance for businesses that require{" "}
              <span className="text-[#001f3f] font-bold">maximum uptime.</span>
            </p>
          </div>
        </div>

        {/* --- Main Content Tier --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: Visual Engineering Stack */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative rounded-[3.5rem] overflow-hidden border-[12px] border-blue-50/50 shadow-[0_40px_100px_rgba(0,31,63,0.1)]">
              <Image
                src="/about/component.png"
                alt="IT Specialist"
                width={600}
                height={750}
                priority
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay for better text readability on top of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            {/* Floating 24/7 Badge (High Impact) */}
            <div className="absolute -bottom-8 -right-8 bg-[#001f3f] p-10 rounded-[3rem] shadow-2xl z-30 border-4 border-white transition-transform duration-500 group-hover:scale-110">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#3a86ff] animate-ping" />
                <span className="text-white font-black text-4xl tracking-tighter">
                  24/7
                </span>
              </div>
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-[0.2em]">
                Live Mission Control
              </p>
            </div>

            {/* Engineering HUD (Light Mode Version) */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-12 hidden xl:flex flex-col gap-8 z-30">
              {[
                {
                  icon: Cpu,
                  label: "Core",
                  val: "Peak",
                  color: "bg-[#3a86ff]",
                },
                {
                  icon: Shield,
                  label: "Safety",
                  val: "Enforced",
                  color: "bg-[#001f3f]",
                },
                {
                  icon: Activity,
                  label: "Ping",
                  val: "< 1ms",
                  color: "bg-emerald-500",
                },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="bg-white/90 backdrop-blur-xl border border-blue-100 p-5 rounded-3xl flex flex-col items-center gap-2 shadow-xl hover:border-[#3a86ff] transition-all duration-300 hover:translate-x-2"
                >
                  <div
                    className={`p-2 rounded-xl ${spec.color} text-white shadow-lg`}
                  >
                    <spec.icon size={20} />
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-[#001f3f]/30 uppercase tracking-widest">
                      {spec.label}
                    </p>
                    <p className="text-[12px] font-black text-[#001f3f]">
                      {spec.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Capabilities & Matrix */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-[#001f3f] tracking-tight leading-tight">
                Next-Gen Managed <br />
                <span className="text-[#3a86ff] italic">
                  Infrastructure & Support
                </span>
              </h3>
              <p className="text-[#001f3f]/60 text-lg leading-relaxed font-medium">
                Our systems are engineered for the NYC Tri-State area&apos;s
                most demanding environments. We ensure your technical stack is a
                competitive advantage, not a bottleneck.
              </p>
            </div>

            <InteractiveFeatureGrid />

            {/* Confidence Footer */}
            <div className="pt-10 border-t border-blue-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Award className="text-[#3a86ff]" size={20} />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#001f3f]/40">
                  Certified Industry Standards
                </span>
              </div>
              <span className="text-[#3a86ff] font-black text-[10px] uppercase tracking-[0.3em] animate-pulse">
                System Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
