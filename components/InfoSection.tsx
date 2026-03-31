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
      glow: "group-hover:bg-blue-600/20",
      textColor: "text-blue-500",
    },
    {
      label: "Dedicated Compute",
      desc: "Dell Precision architecture with Multi-Core optimization.",
      icon: <Cpu size={40} />,
      glow: "group-hover:bg-emerald-600/20",
      textColor: "text-emerald-500",
    },
    {
      label: "Cloud Virtualization",
      desc: "Proxmox-powered isolated node environments.",
      icon: <Cloud size={40} />,
      glow: "group-hover:bg-sky-500/20",
      textColor: "text-sky-500",
    },
    {
      label: "Cyber Fortress",
      desc: "Real-time threat detection and firewall protection.",
      icon: <ShieldCheck size={40} />,
      glow: "group-hover:bg-red-600/20",
      textColor: "text-red-600",
    },
    {
      label: "NVMe Storage Arrays",
      desc: "Ultra-low latency data retrieval systems.",
      icon: <HardDrive size={40} />,
      glow: "group-hover:bg-amber-500/20",
      textColor: "text-amber-500",
    },
    {
      label: "Uptime Analytics",
      desc: "24/7 Nginx reverse-proxy health monitoring.",
      icon: <Activity size={40} />,
      glow: "group-hover:bg-indigo-600/20",
      textColor: "text-indigo-600",
    },
  ];

  return (
    <section className="bg-[#000205] text-white py-20 relative overflow-hidden">
      {/* Background Matrix-style Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic leading-none">
            Next-Gen{" "}
            <span className="text-blue-500 not-italic">Infrastructure.</span>
          </h2>
          <p className="mt-6 text-white/40 font-mono text-sm tracking-[0.3em] uppercase">
            Scalable. Secure. Self-Hosted Excellence.
          </p>
        </div>

        {/* 3D Rack Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8"
          style={{ perspective: "2000px" }}
        >
          {serverCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-48 flex items-center transition-all duration-500"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* The "Server Blade" Glass Layer */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md rounded-2xl border-l border-t border-white/10 transition-all duration-700 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:rotate-y-[-15deg] group-hover:shadow-[20px_40px_60px_rgba(0,0,0,0.5)]"
                style={{ transform: "translateZ(0px)" }}
              >
                {/* Lightning Edge Highlight */}
                <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Layer (Pops out further than the glass) */}
              <div
                className="relative z-10 flex items-center gap-6 px-8 transition-transform duration-500 group-hover:translate-x-10 group-hover:-translate-y-8"
                style={{ transform: "translateZ(50px)" }}
              >
                <div
                  className={`${item.textColor} transition-transform duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
                >
                  {item.icon}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-white transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-white/40 mt-1 max-w-[180px] leading-relaxed group-hover:text-white/60">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Ambient Shadow/Glow behind the blade */}
              <div
                className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-2xl ${item.glow}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
