"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";

export default function ServiceClientWrapper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES_DATA.map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.6 }}
          className="group relative p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.07] hover:border-[#3a86ff]/50 transition-all duration-500 flex flex-col h-full backdrop-blur-sm"
        >
          {/* Subtle hover glow behind icon */}
          <div className="absolute top-10 left-10 w-16 h-16 bg-[#3a86ff]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon Section */}
          <div
            className={`w-20 h-20 rounded-[1.5rem] bg-[#001529] border border-white/10 flex items-center justify-center mb-10 text-white shadow-2xl relative z-10 group-hover:border-[#3a86ff] group-hover:-translate-y-2 transition-all duration-500`}
          >
            <service.icon
              size={36}
              strokeWidth={1.5}
              className="group-hover:text-[#3a86ff] transition-colors"
            />
          </div>

          {/* Content */}
          <div className="flex-grow relative z-10">
            <h4 className="text-2xl font-black mb-4 tracking-tight group-hover:text-white transition-colors uppercase italic">
              {service.title}
            </h4>
            <p className="text-white/40 leading-relaxed text-base group-hover:text-white/70 transition-colors mb-8 font-medium">
              {service.description}
            </p>
          </div>

          {/* Action Link */}
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-3 text-[#3a86ff] font-black text-[10px] tracking-[0.3em] uppercase group-hover:gap-5 transition-all duration-300"
          >
            <span>Read Case Study</span>
            <div className="h-[1px] w-8 bg-[#3a86ff] group-hover:w-12 transition-all" />
            <ChevronRight size={14} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
