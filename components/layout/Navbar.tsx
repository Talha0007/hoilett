"use client";

import React, { useState, useEffect } from "react";
import {
  PhoneCall,
  Mail,
  ChevronDown,
  Menu,
  X,
  Shield,
  Cpu,
  Cloud,
  Database,
  Network,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceOptions = [
    { name: "LAPTOP/DESKTOP/SERVER REPAIR", icon: <Network size={16} /> },
    { name: "VIRUS AND SPYWARE REMOVAL", icon: <Cloud size={16} /> },
    { name: "DATA RECOVERY AND BACKUP", icon: <Shield size={16} /> },
    { name: "NETWORK DESIGN", icon: <Database size={16} /> },
    { name: "CLOUD SERVICES", icon: <Cpu size={16} /> },
    { name: "CYBER SECURITY", icon: <Cpu size={16} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-out px-4 lg:px-10 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border ${
          isScrolled
            ? "bg-[#000814]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-blue-500/30"
            : "bg-white/5 backdrop-blur-sm border-white/10"
        }`}
        style={{
          transform: isScrolled ? "translateY(5px)" : "none",
        }}
      >
        {/* --- LEFT: LOGO --- */}
        <div className="relative h-[40px] w-[100px]">
          <Image
            src="/hbs-logo.png"
            alt="Hoilett Business Systems"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* --- CENTER: NAVIGATION --- */}
        <div
          className={`hidden xl:flex items-center gap-1 p-1 rounded-full border transition-colors duration-500 ${
            isScrolled
              ? "bg-white/5 border-white/10"
              : "bg-gray-200/10 border-white/10"
          }`}
        >
          <NavLink href="/" label="HOME" />
          <NavLink href="/about" label="ABOUT" />

          {/* SERVICES DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-5 py-2 rounded-full text-[11px] font-bold tracking-widest transition-all duration-300 group-hover:bg-[#3a86ff] group-hover:text-white text-white">
              SERVICES{" "}
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-[#001f3f] border border-blue-400/20 rounded-2xl p-3 shadow-2xl shadow-blue-900/40">
                {serviceOptions.map((service) => (
                  <a
                    key={service.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-[#3a86ff] rounded-xl transition-all text-[11px] font-bold tracking-wide"
                  >
                    <span className="text-[#3a86ff] group-hover:text-white transition-colors">
                      {service.icon}
                    </span>
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <NavLink href="#payment" label="REMOTE SERVICE" />
          <NavLink href="#payment" label="PAYMENT" />
          <NavLink href="/contact" label="CONTACT" />
        </div>

        {/* --- RIGHT: CONTACT DETAILS --- */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end gap-1">
            <a
              href="mailto:support@hoilett.com"
              className="flex items-center gap-2 text-[13px] font-bold transition-all duration-300 hover:text-[#3a86ff] text-white/90"
            >
              <Mail size={16} className="text-[#3a86ff]" />
              <span className="tracking-tight">support@hoilett.com</span>
            </a>

            <a
              href="tel:9737144625"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[15px] font-black transition-all duration-300 shadow-lg group ${
                isScrolled
                  ? "bg-[#3a86ff] text-white hover:shadow-blue-500/40"
                  : "bg-white/10 text-white hover:bg-[#3a86ff]"
              }`}
            >
              <PhoneCall size={18} className="group-hover:animate-pulse" />
              <span>(973) 714-4625</span>
            </a>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="xl:hidden text-[#3a86ff]"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {mobileMenu && (
        <div className="xl:hidden mt-4 bg-[#000814]/95 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-6 flex flex-col gap-4 animate-in fade-in zoom-in duration-300 shadow-2xl">
          {[
            "HOME",
            "ABOUT",
            "SERVICES",
            "REMOTE SERVICE",
            "PAYMENT",
            "CONTACT",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white font-bold text-sm border-b border-white/5 pb-2 hover:text-[#3a86ff]"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:9737144625"
            className="bg-[#3a86ff] text-white py-3 rounded-xl text-center font-bold"
          >
            Call (973) 714-4625
          </a>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest transition-all duration-300 hover:bg-[#3a86ff] hover:text-white text-white"
    >
      {label}
    </a>
  );
}
