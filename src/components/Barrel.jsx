

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Barrel(props) {
  const { nodes, materials } = useGLTF("/models/barrel.glb")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.336}>
        <mesh castShadow receiveShadow  geometry={nodes.Object_4.geometry}  material={materials.Barrel}  rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/barrel.glb')
