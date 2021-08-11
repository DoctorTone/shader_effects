import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import Plane from "./components/Plane";
import { OrbitControls } from "@react-three/drei";
import ControlPanel from "./components/ControlPanel";
import Title from "./components/Title";
import ShaderSelect from "./components/ShaderSelect";
import useStore from "./state/store";

function App() {
  const { currentShader } = useStore();

  return (
    <>
      <Title />
      <ControlPanel />
      <ShaderSelect />
      <Canvas camera={{ position: [20, 20, 50] }}>
        <pointLight position={[30, 30, 30]} />
        <Suspense fallback={null}>
          {currentShader === "Cube" && <Cube position={[0, 0, 0]} />}
          {currentShader === "Sphere" && <Sphere position={[0, 0, 0]} />}
          {currentShader === "Plane" && <Plane position={[0, 0, 0]} />}
        </Suspense>
        <Box position={[20, 20, 20]} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
