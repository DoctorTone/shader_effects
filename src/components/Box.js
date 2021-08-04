import React, { useRef } from "react";

const Box = (props) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

export default Box;
