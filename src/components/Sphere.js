import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import ShinyMaterial from "../materials/Shiny";

const Sphere = (props) => {
  const ref = useRef();
  useFrame(() => (ref.current.uniforms.time.value += 0.16));
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[20, 20, 20]} />
      <shaderMaterial attach="material" ref={ref} args={[ShinyMaterial]} />
    </mesh>
  );
};

export default Sphere;
