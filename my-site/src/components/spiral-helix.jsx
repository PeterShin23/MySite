import { Canvas, useFrame } from '@react-three/fiber';
import * as React from 'react';
import { Mesh } from 'three';

const Cube = () => {
  const meshRef = React.useRef(null); // Typing this as <Mesh> causes error

  useFrame(() => {
    if (!meshRef.current) {
      return;
    };

    meshRef.current.rotation.y += 0.01
  });

  return (
    <>
      <ambientLight />
      <pointLight intensity={500} position={[5, 5, 10]} />
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5,1.5,1.5]} />
        <meshStandardMaterial>
          <color args={["blue"]} attach="color" />
        </meshStandardMaterial>
      </mesh>
    </>
  )
}

export const SpiralHelix = ({ items }) => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  )
};