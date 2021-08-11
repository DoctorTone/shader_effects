import React from "react";
import { PlaneBufferGeometry } from "three";

const Plane = (props) => {
  return (
    <mesh {...props}>
      <planeBufferGeometry args={[50, 50, 32, 32]} />
      <meshBasicMaterial color={"blue"} />
    </mesh>
  );
};

export default Plane;
