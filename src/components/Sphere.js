import { meshBounds } from "@react-three/drei";
import React from "react";

const Sphere = (props) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[10, 64, 64]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

export default Sphere;
