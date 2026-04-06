import {
  Target,
  ArrowRight,
  ShieldCheck,
  Network,
  Award,
  Zap,
  Database,
  Globe,
} from "lucide-react";
import Link from "next/link";
import ServiceGridClient from "./ServiceGridClient";

export default function ServicesPage() {
  const PILLARS = [
    {
      icon: Zap,
      title: "High-Performance",
      desc: "Optimized server & hardware infrastructure.",
    },
    {
      icon: Database,
      title: "Data Integrity",
      desc: "Enterprise-grade backup and recovery systems.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      desc: "USA-based standards applied to local solutions.",
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* HEADER SECTION */}
      <section className="relative pt-32 pb-4 overflow-hidden">
        {/* Large Decorative Text - Architectural watermark */}
        <div className="absolute top-0 right-0 text-[25vw] font-black text-gray-50 select-none leading-none z-0 translate-x-1/4">
          1997
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT SIDE: TEXT CONTENT */}
            <div className="flex flex-col items-start space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7ff] border border-[#3a86ff]/20">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3a86ff] animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#3a86ff] font-mono">
                  Operational Excellence
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-[#001f3f] tracking-tighter leading-[0.85] uppercase">
                Technical <br />
                <span className="text-[#3a86ff]">Precision.</span>
              </h1>

              <p className="text-xl text-gray-500 max-w-xl font-medium leading-relaxed italic border-l-4 border-[#3a86ff] pl-6">
                &quot;Redefining technical support through excellence and
                precision infrastructure management since 1997.&quot;
              </p>

              <button className="bg-[#001f3f] text-white px-12 py-6 rounded-2xl font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-6 hover:bg-[#3a86ff] transition-all group shadow-2xl shadow-blue-900/20">
                View Infrastructure
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </button>
            </div>

            {/* RIGHT SIDE: TECHNICAL PILLARS (No Image) */}
            <div className="relative space-y-4">
              {/* Decorative Blueprint Lines */}
              <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />

              {PILLARS.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-[#3a86ff]/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Background Accent */}
                  <div className="absolute inset-0 bg-[#f8fbff] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#001f3f] text-white flex items-center justify-center shrink-0 group-hover:bg-[#3a86ff] transition-colors">
                      <item.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#001f3f] uppercase tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Subtle index number */}
                  <span className="absolute top-6 right-8 text-4xl font-black text-gray-50 group-hover:text-blue-50 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              ))}

              {/* Bottom "Legacy" Tag */}
              <div className="pt-8 flex items-center gap-4 text-[#001f3f]/30 font-black text-[10px] tracking-[0.5em] uppercase pl-8">
                <div className="h-px flex-grow bg-gray-100" />
                <span>Hoilett Standards</span>
                <div className="h-px w-12 bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE GRID SECTION */}
      <section className="py-10 bg-white border-t border-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#001f3f] uppercase tracking-tighter leading-none">
                Our Core <br />{" "}
                <span className="text-[#3a86ff]">Capabilities</span>
              </h2>
              <div className="w-20 h-2 bg-[#3a86ff] mt-6" />
            </div>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest max-w-[200px] text-right">
              Explore our full range of technical solutions
            </p>
          </div>
          <ServiceGridClient />
        </div>
      </section>
    </main>
  );
}
