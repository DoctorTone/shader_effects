import React from "react";
import "../materials/Normals";

const Sphere = (props) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[10, 64, 64]} />
      <normalMaterial />
    </mesh>
  );
};

export default Sphere;
