"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  X,
  Shield,
  Cloud,
  Database,
  Network,
  ArrowRight,
  Globe,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenu]);

  const serviceOptions = [
    {
      name: "Infrastructure Repair",
      icon: <Network size={18} />,
      href: "/services/repair",
    },
    {
      name: "Threat Mitigation",
      icon: <Shield size={18} />,
      href: "/services/security",
    },
    {
      name: "Enterprise Backup",
      icon: <Database size={18} />,
      href: "/services/backup",
    },
    {
      name: "Network Architecture",
      icon: <Globe size={18} />,
      href: "/services/network",
    },
    {
      name: "Cloud Integration",
      icon: <Cloud size={18} />,
      href: "/services/cloud",
    },
    {
      name: "Cyber Security",
      icon: <Zap size={18} />,
      href: "/services/cyber",
    },
  ];

  const mobileLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Remote Support", href: "/remote-support" },
    { label: "Payment", href: "/payment" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-xl border-b border-blue-50"
            : "py-4 md:py-4 bg-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          {/* LOGO & BUSINESS NAME GROUP */}
          <Link href="/" className="flex items-center gap-4 group shrink-0">
            <div className="w-[65px] md:w-[85px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/hoilett-logo.png"
                alt="HBS Logo"
                width={85}
                height={85}
                priority
                className="object-contain"
              />
            </div>

            {/* The Business Name - Slightly Dark Grey (Slate-700) */}
            <div className="flex flex-col border-l border-slate-200 pl-4 py-1">
              <span
                className={`text-[12px] md:text-[14px] font-black uppercase tracking-[0.15em] leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-slate-700" : "text-slate-800"
                }`}
              >
                Hoilett Business
              </span>
              <span
                className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] opacity-70 transition-colors duration-300 ${
                  isScrolled ? "text-slate-500" : "text-slate-600"
                }`}
              >
                Systems, Inc.
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-2">
            <NavLink href="/" label="Home" isScrolled={isScrolled} />
            <NavLink href="/about" label="About" isScrolled={isScrolled} />

            {/* SOLUTIONS DROPDOWN */}
            <div className="relative group/menu">
              <button
                className={`flex items-center gap-2 px-5 py-2.5 text-[12px] font-black uppercase tracking-widest transition-all ${
                  isScrolled ? "text-slate-700" : "text-[#001f3f]"
                } hover:text-[#3a86ff]`}
              >
                Solutions
                <ChevronDown
                  size={14}
                  className="group-hover/menu:rotate-180 transition-transform duration-300"
                />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[550px] pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 translate-y-2 group-hover/menu:translate-y-0">
                <div className="bg-white border border-blue-50 rounded-[32px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.12)] grid grid-cols-2 gap-3">
                  {serviceOptions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-4 p-4 hover:bg-blue-50 rounded-2xl transition-all group/item"
                    >
                      <span className="p-2.5 bg-gray-50 rounded-xl text-[#3a86ff] group-hover/item:bg-[#3a86ff] group-hover/item:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-[10px] font-black text-[#001f3f] uppercase tracking-wider">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              href="/remote-support"
              label="Remote Support"
              isScrolled={isScrolled}
            />
            <NavLink href="/payment" label="Payment" isScrolled={isScrolled} />
            <NavLink href="/contact" label="Contact" isScrolled={isScrolled} />
          </div>

          {/* RIGHT ACTION AREA */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#3a86ff]">
                NOC Support
              </span>
              <a
                href="tel:9737144625"
                className={`text-sm md:text-lg font-black transition-colors ${
                  isScrolled ? "text-slate-800" : "text-[#001f3f]"
                } hover:text-[#3a86ff]`}
              >
                (973) 714-4625
              </a>
            </div>

            <button
              className="xl:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 bg-slate-900 rounded-xl text-white shadow-lg"
              onClick={() => setMobileMenu(true)}
            >
              <div className="w-5 h-0.5 bg-current rounded-full" />
              <div className="w-5 h-0.5 bg-current rounded-full" />
              <div className="w-5 h-0.5 bg-current rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-[1000] transition-transform duration-500 ease-in-out ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <div className="flex flex-col h-full p-6 md:p-12">
          <div className="flex justify-between items-center mb-10">
            <span className="font-black text-slate-800 uppercase tracking-tighter">
              HBS, Inc.
            </span>
            <button
              onClick={() => setMobileMenu(false)}
              className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-2xl"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col space-y-2">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-3xl font-black text-[#001f3f] py-5 flex items-center justify-between border-b border-gray-50"
                onClick={() => setMobileMenu(false)}
              >
                {link.label}
                <ArrowRight size={26} className="text-[#3a86ff]" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  label,
  isScrolled,
}: {
  href: string;
  label: string;
  isScrolled: boolean;
}) {
  return (
    <Link
      href={href}
      className={`px-5 py-2.5 text-[12px] font-black uppercase tracking-widest transition-all relative group ${
        isScrolled ? "text-slate-700" : "text-[#001f3f]"
      } hover:text-[#3a86ff]`}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#3a86ff] transition-all duration-300 group-hover:w-1/3" />
    </Link>
  );
}
