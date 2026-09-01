"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Terrain() {
  const mesh = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(28, 16, 110, 64);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const h =
        Math.sin(x * 0.45) * Math.cos(y * 0.5) * 0.9 +
        Math.sin(x * 0.18 + 1.7) * 1.2 +
        Math.cos(y * 0.33 - 0.6) * 0.7;
      pos.setZ(i, h);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.z = t * 0.012;
    mesh.current.position.y = -4.5 + Math.sin(t * 0.1) * 0.15;
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      rotation={[-Math.PI / 2.35, 0, 0]}
      position={[0, -4.5, -6]}
    >
      <meshBasicMaterial
        color="#3e7c4f"
        wireframe
        transparent
        opacity={0.28}
      />
    </mesh>
  );
}

export default function ContourTerrain() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 2.2, 7], fov: 50 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ pointerEvents: "none" }}
      aria-hidden
    >
      <Terrain />
    </Canvas>
  );
}
