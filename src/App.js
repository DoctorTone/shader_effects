import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 50] }}>
      <pointLight position={[30, 30, 0]} />
      <Sphere position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
