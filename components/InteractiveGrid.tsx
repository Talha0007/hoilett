"use client";

import { motion } from "framer-motion";
import {
  Network,
  Mail,
  Settings,
  Printer,
  Wifi,
  Layout,
  Smartphone,
  CircleDollarSign,
  Lock,
  Headset,
} from "lucide-react";

const features = [
  {
    label: "Network Support",
    icon: Network,
    color: "bg-blue-50 text-blue-600",
  },
  {
    label: "OS Optimization",
    icon: Layout,
    color: "bg-emerald-50 text-emerald-600",
  },
  { label: "Email Solutions", icon: Mail, color: "bg-sky-50 text-sky-600" },
  {
    label: "App Deployment",
    icon: Smartphone,
    color: "bg-purple-50 text-purple-600",
  },
  {
    label: "PC Hardware Tuning",
    icon: Settings,
    color: "bg-slate-100 text-slate-700",
  },
  {
    label: "Guaranteed Results",
    icon: CircleDollarSign,
    color: "bg-amber-50 text-amber-600",
  },
  {
    label: "Enterprise Printing",
    icon: Printer,
    color: "bg-orange-50 text-orange-600",
  },
  { label: "Web Hardening", icon: Lock, color: "bg-red-50 text-red-600" },
  {
    label: "Wi-Fi Architecture",
    icon: Wifi,
    color: "bg-indigo-50 text-indigo-600",
  },
  { label: "Elite 24/7 Help", icon: Headset, color: "bg-blue-600 text-white" },
];

export default function InteractiveGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      {features.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
          whileHover={{
            scale: 1.02,
            backgroundColor: "#ffffff",
            boxShadow: "0 20px 40px rgba(0,31,63,0.08)",
          }}
          className="flex items-center gap-5 p-5 rounded-[2rem] bg-blue-50/30 border border-transparent transition-all duration-300 group cursor-default"
        >
          <div
            className={`p-4 rounded-2xl ${item.color} group-hover:rotate-[10deg] transition-transform duration-500 shadow-sm`}
          >
            <item.icon size={22} strokeWidth={2.5} />
          </div>
          <span className="text-sm font-black tracking-tight text-[#001f3f]/80 uppercase">
            {item.label}
          </span>
          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-100 group-hover:bg-[#3a86ff] transition-colors" />
        </motion.div>
      ))}
    </div>
  );
}
