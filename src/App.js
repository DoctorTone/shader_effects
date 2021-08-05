import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import ControlPanel from "./components/ControlPanel";

function App() {
  return (
    <>
      <ControlPanel />
      <Canvas camera={{ position: [20, 20, 50] }}>
        <pointLight position={[30, 30, 30]} />
        <Suspense fallback={null}>
          <Sphere position={[0, 0, 0]} />
        </Suspense>
        <Box position={[20, 20, 20]} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
