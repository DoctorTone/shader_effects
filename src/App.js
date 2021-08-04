import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <Canvas camera={{ position: [20, 20, 50] }}>
      <pointLight position={[30, 30, 30]} />
      <Sphere position={[0, 0, 0]} />
      <Box position={[20, 20, 20]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
