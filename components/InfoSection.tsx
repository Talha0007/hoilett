"use client";

import {
  Server,
  ShieldCheck,
  Cpu,
  HardDrive,
  Cloud,
  Activity,
} from "lucide-react";

export default function ServerInfoSection() {
  const serverCapabilities = [
    {
      label: "Enterprise Hosting",
      desc: "LSI MegaRAID enabled high-availability storage.",
      icon: <Server size={40} />,
      glow: "group-hover:bg-blue-600/30",
      textColor: "text-blue-400",
    },
    {
      label: "Dedicated Compute",
      desc: "Dell Precision architecture with Multi-Core optimization.",
      icon: <Cpu size={40} />,
      glow: "group-hover:bg-emerald-500/30",
      textColor: "text-emerald-400",
    },
    {
      label: "Cloud Virtualization",
      desc: "Proxmox-powered isolated node environments.",
      icon: <Cloud size={40} />,
      glow: "group-hover:bg-sky-500/30",
      textColor: "text-sky-400",
    },
    {
      label: "Cyber Fortress",
      desc: "Real-time threat detection and firewall protection.",
      icon: <ShieldCheck size={40} />,
      glow: "group-hover:bg-red-500/30",
      textColor: "text-red-400",
    },
    {
      label: "NVMe Storage Arrays",
      desc: "Ultra-low latency data retrieval systems.",
      icon: <HardDrive size={40} />,
      glow: "group-hover:bg-amber-500/30",
      textColor: "text-amber-400",
    },
    {
      label: "Uptime Analytics",
      desc: "24/7 Nginx reverse-proxy health monitoring.",
      icon: <Activity size={40} />,
      glow: "group-hover:bg-indigo-500/30",
      textColor: "text-indigo-400",
    },
  ];

  return (
    <section className="bg-[#001529] text-white py-28 relative overflow-hidden">
      {/* Refined "Petrol Blue" Ambient Lighting */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px]" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[180px]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200">
              Technical Specifications
            </span>
          </div>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
            Enterprise <br />
            <span className="text-blue-400 not-italic">Infrastructure.</span>
          </h2>
          <p className="mt-8 text-white/40 font-mono text-xs tracking-[0.4em] uppercase max-w-xl">
            Reliable. Secure. High-Performance Architecture.
          </p>
        </div>

        {/* 3D Server Blade Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10"
          style={{ perspective: "2500px" }}
        >
          {serverCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-56 flex items-center transition-all duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Server Blade (Glass Layer) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent backdrop-blur-xl rounded-3xl border border-white/10 transition-all duration-700 ease-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:rotate-y-[-12deg] group-hover:shadow-[40px_60px_80px_rgba(0,0,0,0.6)]">
                {/* Visual Status Indicator */}
                <div className="absolute top-6 right-8 flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                </div>
              </div>

              {/* Icon & Label Layer */}
              <div
                className="relative z-10 flex items-center gap-8 px-10 transition-transform duration-500 group-hover:translate-x-12 group-hover:-translate-y-10"
                style={{ transform: "translateZ(60px)" }}
              >
                <div
                  className={`${item.textColor} transition-all duration-700 group-hover:scale-125 group-hover:drop-shadow-[0_0_20px_currentColor]`}
                >
                  {item.icon}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-blue-100 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-white/40 mt-2 max-w-[200px] leading-relaxed font-medium group-hover:text-white/70">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Underlying Glow */}
              <div
                className={`absolute inset-0 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl ${item.glow}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
