"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!active && progress === 100) {
      const timer = setTimeout(() => setShow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [active, progress]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white transition-opacity duration-1000">
      <div className="relative flex flex-col items-center">
        <div className="w-24 h-24 border-2 border-[#001f3f]/5 border-t-[#3a86ff] rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-black font-mono text-sm font-black">
            {Math.round(progress)}%
          </span>
        </div>
        <h2 className="mt-8 text-[#001f3f] font-mono text-[10px] font-bold tracking-[0.4em] uppercase animate-pulse">
          Establishing Connection...
        </h2>
        <div className="mt-4 w-48 h-[2px] bg-[#001f3f]/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3a86ff] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
