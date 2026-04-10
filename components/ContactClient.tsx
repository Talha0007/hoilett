"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import type { MapProps } from "./Map";

const Map = dynamic<MapProps>(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-blue-50 animate-pulse rounded-2xl flex items-center justify-center">
      <span className="text-[#001f3f]/20 font-black uppercase text-[10px] tracking-widest">
        Initializing Maps...
      </span>
    </div>
  ),
});

export default function ContactClient() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const offices = [
    {
      title: "New Jersey Office",
      address: "1030 S Orange Ave, Newark, NJ 07106",
      phone: "(973) 714-4625",
      email: "support@hoilett.com",
      coords: [40.74623985972757, -74.23115364418621] as [number, number],
    },
    {
      title: "New York Office",
      address: "13 W 38th St, New York, NY 10018",
      phone: "(212) 796-6850",
      email: "support@hoilett.com",
      coords: [40.7516, -73.9832] as [number, number],
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 pb-20 relative z-10">
      {/* Header Section */}
      <div className="text-center mb-20 space-y-4 pt-10">
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase italic text-[#001f3f]">
          Get In <span className="text-[#3a86ff] not-italic">Touch</span>
        </h1>
        <p className="text-[#001f3f]/40 font-bold uppercase tracking-[0.3em] text-[10px]">
          Professional IT Support Across the Tri-State Area
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-24">
        {offices.map((office, idx) => (
          <div
            key={idx}
            className="group bg-white border border-blue-50 rounded-[2.5rem] p-2 flex flex-col gap-2 shadow-[0_20px_50px_rgba(0,31,63,0.05)] hover:shadow-[0_30px_60px_rgba(58,134,255,0.1)] transition-all duration-500"
          >
            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-black text-[#001f3f] uppercase italic">
                {office.title}
              </h2>
              <div className="space-y-4 text-[#001f3f]/60 font-semibold text-sm">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 hover:text-[#3a86ff] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-[#3a86ff]">
                    <MapPin size={18} />
                  </div>
                  {office.address}
                </a>
                <a
                  href={`tel:${office.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-4 hover:text-[#3a86ff] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-[#3a86ff]">
                    <Phone size={18} />
                  </div>
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="flex items-center gap-4 hover:text-[#3a86ff] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-[#3a86ff]">
                    <Mail size={18} />
                  </div>
                  {office.email}
                </a>
              </div>
            </div>

            <div className="h-80 w-full relative z-0 overflow-hidden rounded-[2rem] border border-blue-50">
              <Map center={office.coords} zoom={15} title={office.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto bg-[#001f3f] rounded-[3.5rem] p-8 lg:p-20 text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3a86ff]/10 rounded-full -mr-48 -mt-48 blur-3xl" />

        <div className="text-center mb-16 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <MessageSquare size={16} className="text-[#3a86ff]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
              Direct Inquiry
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none italic uppercase">
            Send us a <span className="text-[#3a86ff] not-italic">Message</span>
          </h2>
          <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">
            Average response time: &lt; 2 Hours
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 relative z-10"
        >
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-1">
              Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#3a86ff] focus:bg-white/10 transition-all placeholder:text-white/10 font-medium"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-1">
              Subject
            </label>
            <div className="relative">
              <select
                name="subject"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white/70 outline-none focus:border-[#3a86ff] focus:bg-white/10 transition-all appearance-none cursor-pointer font-medium"
              >
                <option className="bg-[#001f3f]" value="General IT Support">
                  General IT Support
                </option>
                <option className="bg-[#001f3f]" value="Network Solutions">
                  Network Solutions
                </option>
                <option className="bg-[#001f3f]" value="Hardware Repair">
                  Hardware Repair
                </option>
                <option className="bg-[#001f3f]" value="Managed Services">
                  Managed Services
                </option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                ▼
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-1">
              Email Address
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="john@company.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#3a86ff] focus:bg-white/10 transition-all placeholder:text-white/10 font-medium"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-1">
              Phone Number
            </label>
            <input
              required
              name="phone"
              type="tel"
              placeholder="(---) --- ----"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-[#3a86ff] focus:bg-white/10 transition-all placeholder:text-white/10 font-medium"
            />
          </div>

          <div className="md:col-span-2 space-y-3">
            <label className="text-[10px] font-black uppercase text-white/30 tracking-widest ml-1">
              Detailed Message
            </label>
            <textarea
              required
              name="message"
              rows={6}
              placeholder="Describe your technical issue or project requirements..."
              className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white outline-none focus:border-[#3a86ff] focus:bg-white/10 transition-all resize-none placeholder:text-white/10 font-medium"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex flex-col items-center pt-8 gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className={`group px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all duration-500 flex items-center gap-4 ${
                status === "success"
                  ? "bg-green-500 text-white"
                  : "bg-[#3a86ff] text-white hover:bg-white hover:text-[#001f3f]"
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {status === "sending" ? (
                <>
                  Processing <Loader2 className="animate-spin" size={16} />
                </>
              ) : status === "success" ? (
                <>
                  Dispatched <CheckCircle2 size={16} />
                </>
              ) : (
                <>
                  Dispatch Message
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-red-400 font-bold text-[10px] uppercase tracking-widest animate-pulse">
                Error: System dispatch failed. Please try again.
              </p>
            )}

            {status === "success" && (
              <p className="text-green-400 font-bold text-[10px] uppercase tracking-widest">
                Check your inbox for acknowledgement.
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
}
