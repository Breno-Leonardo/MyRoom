
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Headset(props) {
  const { nodes, materials } = useGLTF('./models/headset.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh  castShadow receiveShadow  geometry={nodes.razer_headset_mat_0.geometry} material={materials.headset_mat} position={[0.16, -0.514, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/headset.glb')
