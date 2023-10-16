import { useTexture } from '@react-three/drei';
import React from 'react'


export function Image(props) {
  const texture = useTexture(props.img);

    return (
      <mesh  castShadow receiveShadow {...props}>
      <planeGeometry  />
      <meshBasicMaterial   map={texture} />
    </mesh>
    )
  }