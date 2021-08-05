import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import ControlPanel from "./components/ControlPanel";
import Title from "./components/Title";
import ShaderSelect from "./components/ShaderSelect";

function App() {
  return (
    <>
      <Title />
      <ControlPanel />
      <ShaderSelect />
      <Canvas camera={{ position: [20, 20, 50] }}>
        <pointLight position={[30, 30, 30]} />
        <Suspense fallback={null}>
          <Cube position={[0, 0, 0]} />
        </Suspense>
        <Box position={[20, 20, 20]} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
