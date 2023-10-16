import { useTexture } from "@react-three/drei";
import React from "react";
import { Frame } from "./Frame";

export function ImageWithFrame(props) {
  const texture = useTexture(props.img);

  return (
    <group {...props} dispose={null}>
      <Frame
        position={[0, 0, 3]}
        rotation={[1.575, 0, 0]}
        scale={[0.0165, 0.03, 0.024]}
      />
      <mesh castShadow receiveShadow position={[0, 0, 3]} scale={[1,1,1]}>
        <planeGeometry />
        <meshBasicMaterial  map={texture} />
      </mesh>
    </group>
  );
}
