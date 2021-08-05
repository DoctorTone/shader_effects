import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef } from "react";
import image1 from "../images/wood.jpg";
import "../materials/Shiny";
import useStore from "../state/store";

const Cube = (props) => {
  const ref = useRef();
  const { textureEnabled, bounceEnabled, specularEnabled } = useStore();
  const texture1 = useLoader(THREE.TextureLoader, image1);
  useFrame(() => (ref.current.uniforms.time.value += 0.16));
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[20, 20, 20]} />
      <shinyMaterial
        ref={ref}
        tex={texture1}
        textureEnabled={textureEnabled}
        bounceEnabled={bounceEnabled}
        specularEnabled={specularEnabled}
      />
    </mesh>
  );
};

export default Cube;
