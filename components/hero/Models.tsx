"use client";

import { useRef, useMemo, useState, useLayoutEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function NetworkPlexus() {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null!);

  // Controls the slow random drift
  const randomMotion = useRef({ x: 0, y: 0, phase: Math.random() * 100 });

  const count = 40; // Reduced count for a cleaner look
  const nodes = useMemo(() => {
    return Array.from(
      { length: count },
      () =>
        new THREE.Vector3(
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
        ),
    );
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // 1. Slow Random Motion logic
    randomMotion.current.x =
      Math.sin(t * 0.1 + randomMotion.current.phase) * 0.5;
    randomMotion.current.y =
      Math.cos(t * 0.15 + randomMotion.current.phase) * 0.5;

    // 2. Apply combined Mouse + Random rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.3 + randomMotion.current.x,
      0.02,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.y * 0.3 + randomMotion.current.y,
      0.02,
    );
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <group key={i} position={pos}>
          {/* Subtle Node Dot */}
          <mesh>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#3a86ff" transparent opacity={0.6} />
          </mesh>

          {/* Reduced lines: only connects to the NEXT node (creates a clean web) */}
          {nodes.slice(i + 1, i + 2).map((target, j) => (
            <line key={j}>
              <bufferGeometry
                attach="geometry"
                onUpdate={(self) =>
                  self.setFromPoints([
                    new THREE.Vector3(0, 0, 0),
                    new THREE.Vector3().subVectors(target, pos),
                  ])
                }
              />
              <lineBasicMaterial
                attach="material"
                color="#3a86ff"
                transparent
                opacity={0.15} // Made lines more transparent for "clean" look
              />
            </line>
          ))}
        </group>
      ))}
    </group>
  );
}

export function CentralServer() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [position, setPosition] = useState<[number, number, number]>([5, 0, 0]);

  useLayoutEffect(() => {
    const handleResize = () => {
      setPosition(window.innerWidth < 1024 ? [0, 0, 0] : [5, 0, 0]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    meshRef.current.rotation.y += 0.005;
    // Central core floating movement
    meshRef.current.position.y =
      Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshStandardMaterial
          color="#001f3f"
          wireframe
          transparent
          opacity={0.03}
        />
        <Sphere args={[1.3, 32, 32]}>
          <MeshDistortMaterial
            color="#3a86ff"
            speed={2}
            distort={0.3}
            radius={1}
            emissive="#3a86ff"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}
