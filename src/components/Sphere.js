import React from "react";

const Sphere = (props) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[20, 64, 64]} />
      <meshStandardMaterial color={"midnightblue"} />
    </mesh>
  );
};

export default Sphere;
