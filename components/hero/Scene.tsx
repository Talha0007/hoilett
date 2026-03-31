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
        // Position [0,0,12] moves the camera CLOSER to make the globe BIGGER
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
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} color="#3a86ff" intensity={2} />
          <NetworkPlexus />
          <CentralServer />
          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2.5}
            far={5}
            opacity={0.3}
          />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
