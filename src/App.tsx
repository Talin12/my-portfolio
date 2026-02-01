import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Experience } from './components/canvas/Experience';
import { Overlay } from './sections/Overlay';
import './styles.css';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <color attach="background" args={['#0d1117']} />
      <ScrollControls pages={3} damping={0.25}>
        
        {/* The 3D Layer */}
        <Experience />
        
        {/* The HTML Overlay */}
        <Scroll html style={{ width: '100%' }}>
          <Overlay />
        </Scroll>
        
      </ScrollControls>
    </Canvas>
  );
}

export default App;