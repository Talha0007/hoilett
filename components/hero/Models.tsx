"use client";

import { useRef, useMemo, useState, useLayoutEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function NetworkPlexus() {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null!);
  const count = 60; // Increased for a denser "Network" feel

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
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * 0.5,
      0.05,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.y * 0.5,
      0.05,
    );
    groupRef.current.position.y = Math.sin(t * 0.2) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color="#3a86ff" />
          </mesh>
          {/* Connecting lines only to nearby nodes to simulate a grid */}
          {nodes.slice(i + 1, i + 4).map((target, j) => (
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
                opacity={0.35}
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
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 1024;
      setPosition(isMobile ? [0, 0, 0] : [5, 0, 0]);
      setScale(isMobile ? 1.4 : 1.1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    meshRef.current.rotation.y += 0.004;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[2.2, 2]} />
        <meshStandardMaterial
          color="#001f3f"
          wireframe
          transparent
          opacity={0.1} // Very subtle wireframe
        />
        <Sphere args={[1.3, 32, 32]}>
          <MeshDistortMaterial
            color="#3a86ff"
            speed={2.5}
            distort={0.35}
            radius={1}
            emissive="#3a86ff"
            emissiveIntensity={0.2}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}
