"use client";

import { useLayoutEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { NetworkPlexus, CentralServer } from "./Models";

export default function Scene() {
  const [cameraConfig, setCameraConfig] = useState({
    position: [0, 0, 15],
    fov: 35,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCameraConfig({ position: [0, 0, 10], fov: 45 });
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
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.8} /> {/* Increased for Light Mode */}
          <pointLight position={[10, 15, 10]} color="#3a86ff" intensity={2} />
          <NetworkPlexus />
          <CentralServer />
          <ContactShadows
            position={[0, -5, 0]}
            scale={25}
            blur={3.5}
            far={5}
            opacity={0.08} // Very soft shadow for white background
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
