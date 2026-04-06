"use client";

import { useRef, useMemo, useState, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

export function CentralServer() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [position, setPosition] = useState<[number, number, number]>([5, 0, 0]);
  const [scale, setScale] = useState(1.1);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setPosition([0, 0.5, 0]); // Center and move slightly up for mobile
        setScale(0.7); // Smaller scale to avoid text overlap
      } else {
        setPosition([5, 0, 0]); // Standard right-side desktop position
        setScale(1.1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <RoundedBox args={[3.5, 3.5, 3.5]} radius={0.4} smoothness={4}>
          <meshStandardMaterial
            color="#001f3f"
            transparent
            opacity={0.1}
            metalness={1}
            roughness={0}
          />
        </RoundedBox>
        <mesh>
          <boxGeometry args={[3.7, 3.7, 3.7]} />
          <meshStandardMaterial
            color="#3a86ff"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#3a86ff"
            speed={2}
            distort={0.3}
            radius={1}
            emissive="#3a86ff"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}

export function DistributedNodes() {
  const groupRef = useRef<THREE.Group>(null!);
  const satellites = useMemo(
    () => [
      { pos: [8, 5, -2] as [number, number, number], scale: 0.8 },
      { pos: [-8, -5, -2] as [number, number, number], scale: 0.6 },
      { pos: [-7, 6, 2] as [number, number, number], scale: 0.7 },
      { pos: [9, -4, 3] as [number, number, number], scale: 0.5 },
    ],
    [],
  );

  useFrame(() => {
    groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {satellites.map((sat, i) => (
        <Float key={i} position={sat.pos} speed={2} rotationIntensity={0.5}>
          <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.2} scale={sat.scale}>
            <meshStandardMaterial
              color="#3a86ff"
              emissive="#3a86ff"
              emissiveIntensity={0.2}
              transparent
              opacity={0.8}
            />
          </RoundedBox>
        </Float>
      ))}
    </group>
  );
}
