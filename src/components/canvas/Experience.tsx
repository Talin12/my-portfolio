import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, PerspectiveCamera, Grid } from '@react-three/drei';
import * as THREE from 'three';

const CodeSymbol = ({ char, position, color }: { char: string; position: [number, number, number]; color: string }) => {
  const rotRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (rotRef.current) {
      rotRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      rotRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group position={position} ref={rotRef}>
        <Text
          fontSize={1.5}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {char}
        </Text>
      </group>
    </Float>
  );
};

export const Experience = () => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      {/* Floating Syntax Symbols */}
      <CodeSymbol char="< />" position={[-3, 2, 0]} color="#ff7b72" /> 
      <CodeSymbol char="{ }" position={[-4, -2, -2]} color="#7ee787" />
      <CodeSymbol char="&&" position={[3, 1, -1]} color="#d2a8ff" />
      <CodeSymbol char=";" position={[4, -3, 0]} color="#79c0ff" />
      <CodeSymbol char="def" position={[0, 3, -5]} color="#8b949e" />

      {/* Cyber Grid Floor */}
      <group ref={gridRef} position={[0, -2, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
         <Grid 
            sectionSize={3} 
            cellSize={1} 
            position={[0, -5, 0]} 
            infiniteGrid 
            fadeDistance={30} 
            sectionColor="#7ee787" 
            cellColor="#30363d"
          />
      </group>
    </>
  );
};