"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function RotatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Very slow rotation for subtle movement
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Large icosahedron for subtle geometric presence */}
      <icosahedronGeometry args={[4, 1]} />
      <meshStandardMaterial
        color="#d0d0d0"
        wireframe={true}
        opacity={0.12}
        transparent={true}
        emissive="#b0b0b0"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-60">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <RotatingGeometry />
      </Canvas>
    </div>
  );
}
