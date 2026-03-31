"use client";

import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";

import { NetworkPlexus, CentralServer } from "./Models";

import { ContactShadows, Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#000814]">
      <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
        <color attach="background" args={["#000814"]} />

        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />

          <pointLight position={[10, 10, 10]} color="#3a86ff" intensity={2} />

          <pointLight
            position={[-10, -10, -10]}
            color="#7ac142"
            intensity={1}
          />

          <NetworkPlexus />

          <CentralServer />

          <ContactShadows
            position={[0, -4.5, 0]}
            scale={20}
            blur={2}
            far={4.5}
          />

          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
