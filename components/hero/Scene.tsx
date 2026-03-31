"use client";

import { useLayoutEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import { NetworkPlexus, CentralServer } from "./Models";

export default function Scene() {
  const [fov, setFov] = useState(35);

  useLayoutEffect(() => {
    const handleResize = () => {
      setFov(window.innerWidth < 768 ? 50 : 35);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full bg-transparent">
      <Canvas camera={{ position: [0, 0, 15], fov }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
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
