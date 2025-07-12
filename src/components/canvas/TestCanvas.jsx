import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Simple test component to check if WebGL works
const TestCube = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#915EFF" />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </mesh>
  );
};

const SimpleTestCanvas = () => {
  const [contextLost, setContextLost] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const canvasRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contextLost && retryCount < 3) {
        setContextLost(false);
        setRetryCount(prev => prev + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [contextLost, retryCount]);

  if (contextLost) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-32 h-32 border border-purple-500/50 rounded-lg flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-purple-500/30 rounded"></div>
          </div>
          <p className="text-sm">Loading 3D Content...</p>
          {retryCount > 0 && <p className="text-xs text-gray-400">Retry {retryCount}/3</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0" ref={canvasRef}>
      <Canvas
        key={retryCount} // Force remount on retry
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: false,
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={({ gl }) => {
          console.log("Canvas created, attempt:", retryCount + 1);
          
          // Handle context lost
          gl.domElement.addEventListener('webglcontextlost', (event) => {
            console.warn('WebGL context lost, preventing default');
            event.preventDefault();
            setContextLost(true);
          });
          
          // Handle context restored
          gl.domElement.addEventListener('webglcontextrestored', () => {
            console.log('WebGL context restored');
            setContextLost(false);
          });
        }}
        onError={(error) => {
          console.error('Canvas error:', error);
          setContextLost(true);
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <TestCube />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SimpleTestCanvas;
