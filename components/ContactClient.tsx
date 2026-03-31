"use client";

import dynamic from "next/dynamic";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import type { MapProps } from "./Map";

// Load the map with NO Server Side Rendering
const Map = dynamic<MapProps>(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-slate-900 animate-pulse rounded-2xl flex items-center justify-center">
      <span className="text-white/20 font-black uppercase text-xs">
        Loading...
      </span>
    </div>
  ),
});

export default function ContactClient() {
  const offices = [
    {
      title: "New Jersey Office",
      address: "1030 S Orange Ave, Newark, NJ 07106",
      phone: "(973) 714-4625",
      email: "support@hoilett.com",
      coords: [40.7419, -74.2263] as [number, number],
    },
    {
      title: "New York Office",
      address: "13 W 38th St, New York, NY 10018",
      phone: "(212) 796-6850",
      email: "support@hoilett.com",
      coords: [40.7516, -73.9832] as [number, number],
    },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-16 pb-20">
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col gap-6"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-[#3a86ff] uppercase">
                {office.title}
              </h2>
              <div className="space-y-3 text-white/60 font-medium text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="text-[#7ac142]" size={18} />{" "}
                  {office.address}
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-[#7ac142]" size={18} /> {office.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-[#7ac142]" size={18} /> {office.email}
                </p>
              </div>
            </div>
            {/* CRITICAL: This div must have a height (h-80) for Leaflet to see it */}
            <div className="h-80 w-full relative z-0 overflow-hidden rounded-2xl border border-white/5">
              <Map center={office.coords} zoom={15} title={office.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Form Section - Matched to Map Section Style */}
      <section className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 lg:p-16 text-white shadow-2xl backdrop-blur-sm">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter leading-tight text-white">
            Please use the form below to send us an email:
          </h2>
          <p className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">
            24/7 Support! • Phone Inquiries: (973) 714-4625
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-white/50 ml-1">
              Full Name:
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#7ac142] focus:bg-white/10 transition-all placeholder:text-white/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-white/50 ml-1">
              Subject:
            </label>
            <select className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-white/70 outline-none focus:border-[#7ac142] focus:bg-white/10 transition-all appearance-none cursor-pointer">
              <option className="bg-[#000814]">General Support</option>
              <option className="bg-[#000814]">Business Systems</option>
              <option className="bg-[#000814]">Repair Status</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-white/50 ml-1">
              Email Address:
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#7ac142] focus:bg-white/10 transition-all placeholder:text-white/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase text-white/50 ml-1">
              Phone Number:
            </label>
            <input
              type="tel"
              placeholder="(973) --- ----"
              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#7ac142] focus:bg-white/10 transition-all placeholder:text-white/20"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[11px] font-black uppercase text-white/50 ml-1">
              Message:
            </label>
            <textarea
              rows={5}
              placeholder="How can we help you today?"
              className="w-full bg-white/[0.05] border border-white/10 rounded-2xl p-4 text-white outline-none focus:border-[#7ac142] focus:bg-white/10 transition-all resize-none placeholder:text-white/20"
            ></textarea>
          </div>

          {/* Error Box - Styled to blend with dark theme */}
          {/* <div className="md:col-span-2 p-5 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4">
            <ShieldCheck className="text-red-500 shrink-0" size={24} />
            <span className="text-[11px] text-red-400 font-bold italic leading-tight">
              ERROR for site owner: Invalid site key. Please configure reCAPTCHA
              in your dashboard.
            </span>
          </div> */}

          <div className="md:col-span-2 text-center pt-6">
            <button
              type="submit"
              className="bg-[#7ac142] text-white px-16 py-5 rounded-full font-black uppercase tracking-[0.2em] text-sm shadow-[0_10px_30px_rgba(122,193,66,0.2)] hover:bg-[#68a83a] hover:scale-105 transition-all active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
