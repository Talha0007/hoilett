"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Remote Support", href: "/remote-support" },
    { name: "Payment", href: "/payment" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white text-[#001f3f] pt-24 pb-12 border-t border-blue-50 relative overflow-hidden">
      {/* Decorative Light Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50/30 rounded-full blur-[80px] pointer-events-none -ml-20 -mb-20" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image
                src="/hoilett-logo.png"
                alt="Hoilett Business Systems"
                width={150}
                height={50}
                priority
                className="object-contain"
              />
            </Link>
            <p className="text-[#000000]/50 text-sm leading-relaxed font-medium">
              Providing enterprise-grade IT infrastructure and network security
              solutions since 1997. Dedicated to keeping your business connected
              and secure.
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  Icon: FaFacebookF,
                  href: "https://www.facebook.com/hoilettbusiness/",
                },
                {
                  Icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/junior-hoilett-1032875/",
                },
                {
                  Icon: FaInstagram,
                  href: "https://instagram.com/hoilettbusinesssystems",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security best practice
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-[#3a86ff] hover:bg-[#3a86ff] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* New Jersey Column */}
          <div className="space-y-6">
            <h3 className="text-[#3a86ff] font-black tracking-[0.2em] text-[10px] uppercase">
              New Jersey Office
            </h3>
            <ul className="space-y-5 text-[#001f3f]/70 text-sm font-semibold">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 bg-blue-50 rounded-lg text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <span>
                  1030 South Orange Avenue
                  <br />
                  Newark, NJ 07106
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-blue-50 rounded-lg text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:9737144625"
                  className="hover:text-[#3a86ff] transition-colors"
                >
                  (973) 714-4625
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-blue-50 rounded-lg text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <a
                  href={`mailto:support@hoilett.com`}
                  className="hover:text-[#3a86ff] transition-colors"
                >
                  support@hoilett.com
                </a>
              </li>
            </ul>
          </div>

          {/* New York Column */}
          <div className="space-y-6">
            <h3 className="text-[#3a86ff] font-black tracking-[0.2em] text-[10px] uppercase">
              New York Office
            </h3>
            <ul className="space-y-5 text-[#001f3f]/70 text-sm font-semibold">
              <li className="flex items-start gap-4 group">
                <div className="p-2.5 bg-blue-50 rounded-lg text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white transition-colors">
                  <MapPin size={16} />
                </div>
                <span>
                  13 W 38th St,
                  <br />
                  New York, NY 10018
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-blue-50 rounded-lg text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <a
                  href="tel:2127966850"
                  className="hover:text-[#3a86ff] transition-colors"
                >
                  (212) 796-6850
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2.5 bg-blue-50 rounded-lg text-[#3a86ff] group-hover:bg-[#3a86ff] group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <a
                  href={`mailto:support@hoilett.com`}
                  className="hover:text-[#3a86ff] transition-colors"
                >
                  support@hoilett.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-[#001f3f] font-black tracking-[0.2em] text-[10px] uppercase border-l-4 border-[#3a86ff] pl-4">
              Company
            </h3>
            <ul className="grid grid-cols-1 gap-4 text-[#001f3f]/60 text-sm font-bold">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-[#3a86ff] transition-all group"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform text-[#3a86ff]"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-blue-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#001f3f]/40 text-[11px] font-bold tracking-wider uppercase">
            © {currentYear} Hoilett Business Systems. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[11px] font-black tracking-[0.1em] uppercase text-[#001f3f]/60">
            <Link
              href="/privacy"
              className="hover:text-[#3a86ff] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#3a86ff] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
