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
      href: "/services/laptop-desktop-and-server-repair",
    },
    {
      name: "Threat Mitigation",
      icon: <Shield size={18} />,
      href: "/services/virus-and-spyware-removal",
    },
    {
      name: "Enterprise Backup",
      icon: <Database size={18} />,
      href: "/services/data-recovery-and-backup",
    },
    {
      name: "Network Architecture",
      icon: <Globe size={18} />,
      href: "/services/network-design",
    },
    {
      name: "Cloud Integration",
      icon: <Cloud size={18} />,
      href: "/services/cloud-services",
    },
    {
      name: "Cyber Security",
      icon: <Zap size={18} />,
      href: "/services/cyber-security",
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
            ? "py-3 bg-white shadow-xl border-b border-blue-50"
            : "py-5 md:py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="relative flex items-center shrink-0">
            <div className="w-[100px] md:w-[130px]">
              <Image
                src="/hoilett-logo.png"
                alt="HBS Logo"
                width={130}
                height={45}
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-2">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />

            {/* SOLUTIONS DROPDOWN */}
            <div className="relative group/menu">
              <button className="flex items-center gap-2 px-5 py-2.5 text-[13px] font-black uppercase tracking-widest text-[#001f3f] hover:text-[#3a86ff] transition-all">
                Solutions
                <ChevronDown
                  size={14}
                  className="group-hover/menu:rotate-180 transition-transform duration-300"
                />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[550px] pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300">
                <div className="bg-white border border-blue-50 rounded-[32px] p-8 shadow-2xl grid grid-cols-2 gap-3">
                  {serviceOptions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-4 p-4 hover:bg-blue-50 rounded-2xl transition-all group/item"
                    >
                      <span className="p-2.5 bg-gray-50 rounded-xl text-[#3a86ff] group-hover/item:bg-[#3a86ff] group-hover/item:text-white transition-colors shadow-sm">
                        {item.icon}
                      </span>
                      <span className="text-[11px] font-black text-[#001f3f] uppercase tracking-wider">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/remote-support" label="Remote Support" />
            <NavLink href="/payment" label="Payment" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* RIGHT ACTION AREA */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[9px] font-bold tracking-widest uppercase text-[#3a86ff]">
                NOC Support
              </span>
              <a
                href="tel:9737144625"
                className="text-sm md:text-lg font-black text-[#001f3f] whitespace-nowrap"
              >
                (973) 714-4625
              </a>
            </div>

            <button
              className="xl:hidden flex flex-col items-center justify-center gap-1.5 w-11 h-11 bg-blue-50 rounded-xl text-[#001f3f]"
              onClick={() => setMobileMenu(true)}
            >
              <div className="w-5 h-0.5 bg-current rounded-full" />
              <div className="w-5 h-0.5 bg-current rounded-full" />
              <div className="w-5 h-0.5 bg-current rounded-full" />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[1000] transition-transform duration-500 ease-in-out ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        } xl:hidden`}
      >
        <div className="flex flex-col h-full p-6 md:p-12">
          <div className="flex justify-between items-center mb-10">
            <Image src="/hbs-logo.png" alt="Logo" width={110} height={40} />
            <button
              onClick={() => setMobileMenu(false)}
              className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-2xl text-[#001f3f]"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            {mobileLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-3xl md:text-4xl font-black text-[#001f3f] py-5 flex items-center justify-between border-b border-gray-50 hover:text-[#3a86ff] transition-all"
                onClick={() => setMobileMenu(false)}
              >
                {link.label}
                <ArrowRight size={26} className="text-[#3a86ff]" />
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <div className="bg-blue-50 p-8 rounded-[32px]">
              <span className="text-[11px] font-bold text-[#3a86ff] uppercase tracking-widest">
                Immediate Response Line
              </span>
              <p className="text-2xl font-black text-[#001f3f] mt-2">
                (973) 714-4625
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-5 py-2.5 text-[13px] font-black uppercase tracking-widest text-[#001f3f] hover:text-[#3a86ff] transition-all relative group"
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#3a86ff] transition-all duration-300 group-hover:w-1/3" />
    </Link>
  );
}
