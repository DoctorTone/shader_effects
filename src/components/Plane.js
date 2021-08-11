import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import flagImage from "../images/drt.jpg";
import "../materials/FlagMaterial";

const Plane = (props) => {
  const ref = useRef();
  const flagTexture = useLoader(THREE.TextureLoader, flagImage);
  useFrame(() => (ref.current.uniforms.time.value += 0.16));
  return (
    <mesh {...props}>
      <planeBufferGeometry args={[50, 50, 32, 32]} />
      <flagMaterial ref={ref} tex={flagTexture} />
    </mesh>
  );
};

export default Plane;
