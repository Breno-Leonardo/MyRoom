

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Windows(props) {
  const { nodes, materials } = useGLTF('/models/windows.glb')
  
  
  
  return (
    <group {...props} dispose={null}>
      <group  position={[-0.822, 38.182, 19.387]} rotation={[-Math.PI / 2, 0, 0]} scale={[30.067, 100, 98]}>
        <mesh    receiveShadow geometry={nodes.Vidro_1001_Material_0.geometry} material={materials.Material} />
        <mesh    castShadow receiveShadow   geometry={nodes.Vidro_1001_Material002_0.geometry} material={materials['Material.002']} />
        <mesh   castShadow receiveShadow geometry={nodes.Vidro_1001_Material001_0.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/windows.glb')
