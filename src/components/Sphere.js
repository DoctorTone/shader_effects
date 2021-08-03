import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "../materials/Shiny";

const Sphere = (props) => {
  const ref = useRef();
  useFrame(() => (ref.current.uniforms.time.value += 0.16));
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[20, 20, 20]} />
      <shinyMaterial ref={ref} />
    </mesh>
  );
};

export default Sphere;
