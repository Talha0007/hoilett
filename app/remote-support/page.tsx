import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Download } from "lucide-react";

export default function RemoteSupportPage() {
  const supportOptions = [
    {
      title: "TeamViewer Host",
      description:
        "Ideal for servers and permanent remote access. Installed for 24/7 infrastructure monitoring and unattended support.",
      link: "https://get.teamviewer.com/hoilett",
      image: "/remote-support/rs1.png",
      type: "Permanent Access",
    },
    {
      title: "Quick Support",
      description:
        "Perfect for immediate, one-time assistance. No installation required—just run the application and share your ID.",
      link: "https://get.teamviewer.com/hoilettqs",
      image: "/remote-support/rs2.png",
      type: "Instant Session",
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden relative">
      {/* BACKGROUND DECORATION - Scaled for mobile */}
      <div className="absolute top-10 right-0 text-[15vw] md:text-[20vw] font-black text-gray-50 select-none leading-none -z-10 translate-x-1/4 opacity-50 md:opacity-100">
        REMOTE
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* HEADER */}
        <div className="max-w-4xl mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7ff] border border-[#3a86ff]/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3a86ff] animate-pulse" />
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#3a86ff]">
              Secure Remote Engineering
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#001f3f] tracking-tighter uppercase leading-[0.9] mb-6 md:mb-8">
            On-Demand <br />
            <span className="text-[#3a86ff] italic font-black">Support</span>
          </h1>

          <p className="text-base md:text-xl text-gray-500 font-medium leading-relaxed max-w-2xl border-l-4 border-[#3a86ff] pl-5 md:pl-8">
            Our technicians bring decades of experience to every challenge,
            providing both in-person and remote computer support services across
            the United States.
          </p>
        </div>

        {/* SUPPORT MODULES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {supportOptions.map((option, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-100 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              {/* Module Type Badge */}
              <span className="absolute top-6 right-6 md:top-8 md:right-10 text-[8px] md:text-[10px] font-black tracking-widest text-[#3a86ff] uppercase bg-[#f0f7ff] px-3 md:px-4 py-1 rounded-full">
                {option.type}
              </span>

              {/* Visual Display */}
              <div className="relative w-full aspect-video mb-8 md:mb-12 transform group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h2 className="text-2xl md:text-3xl font-black text-[#001f3f] uppercase tracking-tighter mb-3 md:mb-4">
                {option.title}
              </h2>

              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-8 md:mb-10 max-w-sm">
                {option.description}
              </p>

              {/* Action Link - Responsive Button Styling */}
              <Link
                href={option.link}
                target="_blank"
                className="w-full mt-auto bg-[#001f3f] text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase flex items-center justify-center gap-3 md:gap-4 group-hover:bg-[#3a86ff] transition-all duration-500 shadow-xl shadow-[#001f3f]/10"
              >
                Launch Support Link
                <Download
                  size={16}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* TRUST FOOTER */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center text-[#3a86ff] border border-gray-100">
              <ShieldCheck size={24} className="md:w-8 md:h-8" />
            </div>
            <div>
              <p className="font-black text-[#001f3f] uppercase tracking-tight text-sm md:text-base">
                Encrypted Connection
              </p>
              <p className="text-gray-400 text-xs md:text-sm font-medium">
                Standard 256-bit AES session security.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-4 text-[#001f3f]/30 font-black text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] uppercase text-center">
            <span className="whitespace-nowrap">Hoilett Business Systems</span>
            <div className="w-8 md:w-12 h-px bg-gray-200" />
            <span className="whitespace-nowrap">Est. 1997</span>
          </div>
        </div>
      </div>
    </main>
  );
}
