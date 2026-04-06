"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";

export default function ServiceGridClient() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES_DATA.map((service, idx) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#3a86ff]/5 blur-3xl rounded-full group-hover:bg-[#3a86ff]/10 transition-colors" />

          {/* Icon - Clean Outline Style */}
          <div className="w-16 h-16 rounded-2xl bg-[#f8fbff] border border-[#3a86ff]/10 flex items-center justify-center mb-8 group-hover:bg-[#3a86ff] transition-all duration-500">
            <service.icon
              size={28}
              className="text-[#3a86ff] group-hover:text-white transition-colors"
              strokeWidth={1.5}
            />
          </div>

          {/* Text Content - Responsive Container */}
          <div className="flex-grow space-y-4">
            <h3 className="text-xl font-black text-[#001f3f] uppercase tracking-tight leading-tight group-hover:text-[#3a86ff] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-4 group-hover:text-gray-600">
              {service.description}
            </p>
          </div>

          {/* Action - Reference Blue Link */}
          <div className="mt-10 pt-6 border-t border-gray-50">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-[#3a86ff] font-extrabold text-[10px] tracking-widest uppercase group-hover:gap-4 transition-all"
            >
              READ MORE
              <ChevronRight size={14} />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
