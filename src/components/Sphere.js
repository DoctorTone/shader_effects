import React from "react";
import "../materials/Shiny";

const Sphere = (props) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[20, 64, 64]} />
      <shinyMaterial />
    </mesh>
  );
};

export default Sphere;
