import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";
import image1 from "../images/wood.jpg";
import "../materials/Shiny";

const Sphere = (props) => {
  const ref = useRef();
  const texture1 = useLoader(THREE.TextureLoader, image1);
  useFrame(() => (ref.current.uniforms.time.value += 0.16));
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[20, 20, 20]} />
      <shinyMaterial ref={ref} tex={texture1} />
    </mesh>
  );
};

export default Sphere;
