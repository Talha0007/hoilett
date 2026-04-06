"use client";

import { useLayoutEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { CentralServer, DistributedNodes } from "./Models";

export default function Scene() {
  const [cameraConfig, setCameraConfig] = useState({
    position: [0, 0, 15],
    fov: 35,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCameraConfig({ position: [0, 0, 18], fov: 50 }); // Wider view for mobile
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
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} color="#3a86ff" intensity={2} />
          <CentralServer />
          <DistributedNodes />
          <ContactShadows
            position={[0, -5, 0]}
            scale={20}
            blur={3}
            far={4.5}
            opacity={0.1}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
