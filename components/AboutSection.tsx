"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Globe, ArrowRight, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#f8fafc] text-[#001f3f] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3a86ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group lg:sticky lg:top-32">
            <div className="absolute -inset-4 bg-[#3a86ff]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative rounded-[2.5rem] overflow-hidden border border-blue-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,31,63,0.05)] transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(58,134,255,0.15)]">
              <div className="relative aspect-video w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/about/ab-contentimage.png"
                  alt="HBS Technical Support"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/40 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-blue-50 p-5 rounded-2xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Award className="text-[#3a86ff]" size={24} />
                    </div>
                    <div>
                      <p className="text-[#3a86ff] font-black text-3xl leading-none">
                        25+
                      </p>
                      <p className="text-[#001f3f]/40 text-[9px] uppercase font-bold tracking-[0.2em] mt-1">
                        Years Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                <span className="w-2 h-2 rounded-full bg-[#3a86ff] animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#3a86ff]">
                  Established 1997
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-black tracking-tighter leading-[1.1] text-[#001f3f]">
                PROUDLY SERVING THE <br />
                <span className="text-[#3a86ff] italic">NY TRI-STATE AREA</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#001f3f]/70 text-lg leading-relaxed font-medium">
              <p>
                Our mission at{" "}
                <strong className="text-[#001f3f] font-bold">
                  Hoilett Business Systems
                </strong>{" "}
                is to redefine technical support through excellence. Our
                technicians bring decades of on-the-ground experience to every
                challenge, maintaining an impeccable service record within the
                community.
              </p>
              <p>
                From streamlined residential setups to high-capacity enterprise
                network architectures, we handle the full spectrum of IT
                requirements. Whether it&apos;s cybersecurity hardening,
                hardware lifecycle management, or precision data recovery—no
                task is beyond our expertise.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <ShieldCheck className="text-[#3a86ff]" size={20} />
                </div>
                <span className="text-sm font-bold tracking-tight">
                  Cyber Security
                </span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-blue-50 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Globe className="text-[#3a86ff]" size={20} />
                </div>
                <span className="text-sm font-bold tracking-tight">
                  Network Architecture
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <button className="group flex items-center gap-6 bg-[#001f3f] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-[0.2em] hover:bg-[#3a86ff] transition-all shadow-xl shadow-blue-900/10 active:scale-95">
                  DISCOVER OUR LEGACY
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-blue-100">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h4 className="text-[#3a86ff] font-black text-xs uppercase tracking-[0.2em]">
                Comprehensive IT
              </h4>
              <p className="text-[#001f3f]/50 text-[15px] leading-relaxed font-medium">
                Hardware lifecycle management, system upgrades, and preventative
                maintenance tailored for modern business environments.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#001f3f] font-black text-xs uppercase tracking-[0.2em]">
                Strategic Solutions
              </h4>
              <p className="text-[#001f3f]/50 text-[15px] leading-relaxed font-medium">
                Expert consulting and enterprise-grade data recovery designed to
                eliminate downtime and secure your digital assets.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#3a86ff] font-black text-xs uppercase tracking-[0.2em]">
                Certified Expertise
              </h4>
              <p className="text-[#001f3f]/50 text-[15px] leading-relaxed font-medium">
                Elite technicians equipped for complex threat mitigation and
                precision electrical circuitry repair and diagnostics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
