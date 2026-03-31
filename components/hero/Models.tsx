"use client";

import { useRef, useMemo, useState, useLayoutEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function NetworkPlexus() {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null!);
  const count = 40;

  const nodes = useMemo(() => {
    return Array.from(
      { length: count },
      () =>
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
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
    groupRef.current.position.y = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color="#3a86ff" />
          </mesh>
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
                opacity={0.2}
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

  useLayoutEffect(() => {
    const handleResize = () => {
      // 1024px is the 'lg' breakpoint in Tailwind
      setPosition(window.innerWidth < 1024 ? [0, 0, 0] : [4, 0, 0]);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.scale.setScalar(
      1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05,
    );
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#3a86ff"
          wireframe
          emissive="#3a86ff"
          emissiveIntensity={0.5}
        />
        <Sphere args={[0.7, 32, 32]}>
          <MeshDistortMaterial
            color="#7ac142"
            speed={5}
            distort={0.3}
            radius={1}
          />
        </Sphere>
      </mesh>
    </Float>
  );
}
