"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/ctc_3d_printer.glb";

function PrinterModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_PATH);
  const { camera } = useThree();
  const rotationRef = useRef(0);

  useEffect(() => {
    if (!groupRef.current) return;

    // Clone the scene so it can be reused safely
    const cloned = scene.clone(true);

    // Compute bounding box on the cloned scene to get raw dimensions
    const box = new THREE.Box3().setFromObject(cloned);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    // Normalize: fit model into a ~3-unit tall space
    const targetHeight = 3.2;
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = targetHeight / maxDim;

    groupRef.current.scale.setScalar(scale);
    // Center the model at origin
    groupRef.current.position.set(
      -center.x * scale,
      -center.y * scale + 0.05,
      -center.z * scale,
    );

    // Position camera for a 3/4 hero view (slightly elevated, from the right)
    const camDist = targetHeight * 1.75;
    (camera as THREE.PerspectiveCamera).position.set(
      camDist * 0.55,
      camDist * 0.38,
      camDist * 0.9,
    );
    camera.lookAt(0, 0.15, 0);
    camera.updateProjectionMatrix();
  }, [scene, camera]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      rotationRef.current += delta * 0.22;
      groupRef.current.rotation.y = rotationRef.current;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(MODEL_PATH);

function LoadingSpinner() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.9;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.65, 1]} />
      <meshStandardMaterial
        color="#00BFFF"
        wireframe
        opacity={0.4}
        transparent
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [5, 3.5, 8], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
        shadows
        dpr={[1, 2]}
      >
        {/* Ambient fill */}
        <ambientLight intensity={0.4} />

        {/* Main key light — warm-white, top-right */}
        <directionalLight
          position={[7, 12, 8]}
          intensity={2.2}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-8}
          shadow-camera-right={8}
          shadow-camera-top={8}
          shadow-camera-bottom={-8}
        />

        {/* Rim / fill light — cool blue accent from the back-left */}
        <directionalLight
          position={[-8, 4, -5]}
          intensity={0.9}
          color="#00BFFF"
        />

        {/* Subtle under-light for depth */}
        <pointLight position={[0, -3, 2]} intensity={0.25} color="#1a2a3a" />

        {/* Top accent for metallic sheen */}
        <pointLight position={[2, 6, 1]} intensity={0.5} color="#ffffff" />

        <Suspense fallback={<LoadingSpinner />}>
          <PrinterModel />
          <ContactShadows
            position={[0, -1.65, 0]}
            opacity={0.45}
            scale={10}
            blur={3}
            far={4}
            color="#000510"
          />
          <Environment preset="warehouse" />
        </Suspense>

        {/* Disabled zoom + pan; user can orbit but model auto-rotates via useFrame */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
