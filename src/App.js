import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import CameraControls from "./camera/CameraControls";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 50] }}>
      <CameraControls />
      <pointLight position={[100, 100, 100]} />
      <Sphere position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;