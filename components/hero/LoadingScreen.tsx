"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);

  // Smoothly hide the loader after progress hits 100%
  useEffect(() => {
    if (!active && progress === 100) {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#000205] transition-opacity duration-1000">
      <div className="relative flex flex-col items-center">
        {/* Animated Ring */}
        <div className="w-24 h-24 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />

        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-mono text-sm font-bold">
            {Math.round(progress)}%
          </span>
        </div>

        <h2 className="mt-8 text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase animate-pulse">
          Establishing Connection...
        </h2>

        {/* Progress Bar */}
        <div className="mt-4 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
