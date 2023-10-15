

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bed(props) {
  const { nodes, materials } = useGLTF('/models/bed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow  geometry={nodes.Bed__0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/models/bed.glb')
