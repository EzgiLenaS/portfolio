"use client";

import React, { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error ignore declerations
import * as random from "maath/random/dist/maath-random.esm";

const COUNT = 5000; // yıldız sayısı

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);

  // XYZ üçlüleri için length = COUNT * 3 olmalı
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);
    random.inSphere(arr, { radius: 1.2 });
    // olası NaN/∞ temizliği
    for (let i = 0; i < arr.length; i++) {
      if (!Number.isFinite(arr[i])) arr[i] = 0;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"              // <-- düzeltildi
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none">
    <Canvas className="pointer-events-none" camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
