"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // If assets load quickly or are cached, bypass the loader transitions instantly
    if (!active || progress >= 100) {
      const timer = setTimeout(() => setShow(false), 200); // Drastically reduced exit delay
      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-300">
      <div className="relative flex flex-col items-center">
        {/* Uses hardware accelerated animations */}
        <div className="w-16 h-16 border-2 border-[#001f3f]/5 border-t-[#3a86ff] rounded-full animate-spin [animation-duration:0.6s]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-black font-mono text-xs font-black">
            {Math.round(progress)}%
          </span>
        </div>
        <h2 className="mt-6 text-[#001f3f] font-mono text-[9px] font-bold tracking-[0.4em] uppercase opacity-70">
          Establishing Connection...
        </h2>
        <div className="mt-4 w-36 h-[2px] bg-[#001f3f]/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3a86ff] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
