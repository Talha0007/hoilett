import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  PiIcon as Pinterest,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

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

  const services = [
    "Laptop/desktop/server Repair",
    "Virus and spyware Removal",
    "Data recovery and backup",
    "Network design",
    "Cloud services",
    "Cyber security",
  ];

  return (
    <footer className="bg-[#000814] text-white pt-20 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#3a86ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & NJ Office */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/hbs-logo.png"
                alt="Hoilett Business Systems"
                width={120}
                height={60}
                priority
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </Link>
            <div className="space-y-4">
              <h3 className="text-[#3a86ff] font-bold tracking-widest text-xs uppercase">
                New Jersey Office
              </h3>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#7ac142] shrink-0" />
                  <span>
                    1030 South Orange Avenue
                    <br />
                    Newark, NJ 07106
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#7ac142] shrink-0" />
                  <a
                    href="tel:9737144625"
                    className="hover:text-white transition-colors"
                  >
                    (973) 714-4625
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#7ac142] shrink-0" />
                  <a
                    href="mailto:support@hoilett.com"
                    className="hover:text-white transition-colors"
                  >
                    support@hoilett.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: NY Office */}
          <div className="lg:pt-20 space-y-4">
            <h3 className="text-[#3a86ff] font-bold tracking-widest text-xs uppercase">
              New York Office
            </h3>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#7ac142] shrink-0" />
                <span>
                  381 Park Avenue South
                  <br />
                  New York, NY 10016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#7ac142] shrink-0" />
                <a
                  href="tel:2127966850"
                  className="hover:text-white transition-colors"
                >
                  (212) 796-6850
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#7ac142] shrink-0" />
                <a
                  href="mailto:support@hoilett.com"
                  className="hover:text-white transition-colors"
                >
                  support@hoilett.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:pt-20 space-y-6">
            <h3 className="text-white font-bold tracking-widest text-xs uppercase border-l-2 border-[#3a86ff] pl-3">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-3 text-white/60 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 hover:text-[#3a86ff] transition-all group"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform text-[#7ac142]"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="lg:pt-20 space-y-6">
            <h3 className="text-white font-bold tracking-widest text-xs uppercase border-l-2 border-[#7ac142] pl-3">
              Support & Help
            </h3>
            <ul className="space-y-3 text-white/60 text-sm font-medium">
              {services.map((service) => (
                <li
                  key={service}
                  className="hover:text-white transition-colors cursor-default flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-[#3a86ff] rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-white/40 hover:text-[#3a86ff] transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-[#3a86ff] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-[#3a86ff] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-[#3a86ff] transition-colors"
            aria-label="Pinterest"
          >
            <FaPinterestP size={18} />
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-[#3a86ff] transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
