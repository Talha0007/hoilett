"use client";

import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { NetworkPlexus, CentralServer } from "./Models";

export default function Scene() {
  const [cameraConfig, setCameraConfig] = useState({
    position: [0, 0, 15],
    fov: 35,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCameraConfig({ position: [0, 0, 12], fov: 45 });
      } else {
        setCameraConfig({ position: [0, 0, 15], fov: 35 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full bg-transparent touch-none">
      <Canvas
        camera={{
          position: cameraConfig.position as any,
          fov: cameraConfig.fov,
        }}
        gl={{
          antialias: false, // Performance boost: disabled anti-aliasing (mostly unnoticeable on mobile)
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: true, // Prevents crashes on weak GPUs
        }}
        dpr={1} // Performance boost: force 1x scale (avoids rendering at huge 3x/4x resolutions on retina displays)
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 15, 10]} color="#3a86ff" intensity={1.5} />

          <NetworkPlexus />
          <CentralServer />

          {/* Performance boost: Pre-allocated assets are loaded with lower complexity */}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
