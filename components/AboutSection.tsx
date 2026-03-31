import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Globe, ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#000814] text-white py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#3a86ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: TECH IMAGE WITH HOVER EFFECT */}
          <div className="relative group lg:sticky lg:top-32">
            {/* Glow Effect behind the image */}
            <div className="absolute -inset-4 bg-[#3a86ff]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" />

            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 transition-all duration-500 group-hover:border-[#3a86ff]/30">
              {/* aspect-video forces the 16:9 ratio */}
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/about/ab-contentimage.png"
                  alt="Hoilett Business Systems Technical Support"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
                  priority
                />

                {/* 1997 Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000814]/80 via-transparent to-transparent opacity-60" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 bg-[#000814]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-[#3a86ff] font-black text-3xl leading-none">
                    25+
                  </p>
                  <p className="text-white/60 text-[8px] uppercase font-bold tracking-[0.2em] mt-1">
                    Years Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#7ac142] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                  Since 1997
                </span>
              </div>
              <h2 className="text-2xl lg:text-5xl font-black tracking-tighter leading-tight">
                PROUDLY SERVING THE <br />
                <span className="text-[#3a86ff]">NEW YORK TRI-STATE AREA.</span>
              </h2>
            </div>

            <div className="space-y-6 text-blue-100/60 text-lg leading-relaxed">
              <p>
                Our goal at{" "}
                <strong className="text-white">Hoilett Business Systems</strong>{" "}
                is to provide you with the greatest service experience ever. Our
                technicians have been in the computer repair industry for many
                years. We have maintained an excellent customer service record
                throughout the life of this company.
              </p>
              <p>
                We provide solutions for every computer repair related issue
                that you could ever have. We do it all. Everything from simple
                computer setup to complex network configurations. There is no
                job too big or too small of us. We offer the full range of IT
                services. Cyber security, Virus removal, Hardware replacement,
                Upgrades, Software installs, network setup, consulting, general
                maintenance, data recovery and anything else related to
                computers.
              </p>
            </div>

            {/* Feature Mini-Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <ShieldCheck className="text-[#7ac142]" size={20} />
                <span className="text-sm font-bold">Cyber Security</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <Globe className="text-[#3a86ff]" size={20} />
                <span className="text-sm font-bold">Network Setup</span>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <button className="group flex items-center gap-4 bg-[#3a86ff] text-white px-8 py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-[#2a75ee] transition-all shadow-xl shadow-blue-900/20 active:scale-95">
                  READ OUR STORY
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: EXTENDED CAPABILITIES */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <h4 className="text-[#7ac142] font-black text-sm uppercase tracking-widest">
                Full-Range IT
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Hardware replacement, upgrades, software installs, and general
                maintenance for any device.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[#3a86ff] font-black text-sm uppercase tracking-widest">
                Solutions Focused
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Consulting and data recovery services designed to minimize
                downtime and protect your assets.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-black text-sm uppercase tracking-widest">
                Trained Experts
              </h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Knowledgeable techs equipped to handle everything from virus
                removal to electrical circuitry repair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
