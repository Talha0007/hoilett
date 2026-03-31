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
import Link from "next/link"; // Use Next.js Link for better performance

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceOptions = [
    {
      name: "LAPTOP/DESKTOP/SERVER REPAIR",
      icon: <Network size={16} />,
      href: "/services/repair",
    },
    {
      name: "VIRUS AND SPYWARE REMOVAL",
      icon: <Cloud size={16} />,
      href: "/services/virus-removal",
    },
    {
      name: "DATA RECOVERY AND BACKUP",
      icon: <Shield size={16} />,
      href: "/services/data",
    },
    {
      name: "NETWORK DESIGN",
      icon: <Database size={16} />,
      href: "/services/network",
    },
    {
      name: "CLOUD SERVICES",
      icon: <Cpu size={16} />,
      href: "/services/cloud",
    },
    {
      name: "CYBER SECURITY",
      icon: <Cpu size={16} />,
      href: "/services/security",
    },
  ];

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "REMOTE SERVICE", href: "/remote" },
    { label: "PAYMENT", href: "/payment" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ease-out px-4 lg:px-10 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border ${
          isScrolled
            ? "bg-[#000814]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-blue-500/30"
            : "bg-white/5 backdrop-blur-sm border-white/10"
        }`}
      >
        {/* --- LEFT: LOGO --- */}
        <Link href="/" className="relative h-[40px] w-[100px]">
          <Image
            src="/hbs-logo.png"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </Link>

        {/* --- CENTER: DESKTOP NAVIGATION --- */}
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
            <button className="flex items-center gap-1 px-5 py-2 rounded-full text-[11px] font-bold tracking-widest transition-all duration-300 group-hover:bg-[#3a86ff] group-hover:text-white text-white uppercase">
              SERVICES{" "}
              <ChevronDown
                size={14}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </button>

            <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-[1001]">
              <div className="bg-[#001f3f] border border-blue-400/20 rounded-2xl p-3 shadow-2xl">
                {serviceOptions.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-[#3a86ff] rounded-xl transition-all text-[11px] font-bold tracking-wide"
                  >
                    <span className="text-[#3a86ff] group-hover:text-white transition-colors">
                      {service.icon}
                    </span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink href="/remote" label="REMOTE SERVICE" />
          <NavLink href="/payment" label="PAYMENT" />
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
              <span>support@hoilett.com</span>
            </a>
            <a
              href="tel:9737144625"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[15px] font-black transition-all duration-300 group ${
                isScrolled
                  ? "bg-[#3a86ff] text-white"
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
          className="xl:hidden text-[#3a86ff] z-[1001]"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {mobileMenu && (
        <div className="fixed inset-x-4 top-24 xl:hidden bg-[#000814]/98 backdrop-blur-3xl border border-blue-500/30 rounded-3xl p-8 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-300 shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-[1000]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenu(false)} // Important: close menu on click
              className="text-white font-bold text-lg border-b border-white/10 pb-4 hover:text-[#3a86ff] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:9737144625"
            className="bg-[#3a86ff] text-white py-5 rounded-2xl text-center font-black text-lg shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
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
    <Link
      href={href}
      className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest transition-all duration-300 hover:bg-[#3a86ff] hover:text-white text-white uppercase"
    >
      {label}
    </Link>
  );
}
