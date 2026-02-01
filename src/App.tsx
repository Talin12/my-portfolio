import { Canvas } from '@react-three/fiber';
import { Experience } from './components/canvas/Experience';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechStack } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      {/* 3D Background Canvas - Fixed Position */}
      <div className="canvas-background">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <color attach="background" args={['#0d1117']} />
          <Experience />
        </Canvas>
      </div>

      {/* HTML Content Layer - Scrollable */}
      <div className="content-layer">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;