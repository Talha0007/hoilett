"use client";

import { useLayoutEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, Preload } from "@react-three/drei";
import { NetworkPlexus, CentralServer } from "./Models";

export default function Scene() {
  const [cameraConfig, setCameraConfig] = useState({
    position: [0, 0, 15],
    fov: 35,
  });

  useLayoutEffect(() => {
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
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]} // Performance optimization for high-res screens
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 15, 10]} color="#3a86ff" intensity={1.5} />

          <NetworkPlexus />
          <CentralServer />

          <ContactShadows
            position={[0, -5, 0]}
            scale={25}
            blur={4}
            far={5}
            opacity={0.05}
          />
          <Environment preset="city" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
