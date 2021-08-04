import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import CameraControls from "./camera/CameraControls";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 50] }}>
      <CameraControls />
      <Sphere position={[0, 0, 0]} />
      <Box position={[20, 20, 20]} />
    </Canvas>
  );
}

export default App;
