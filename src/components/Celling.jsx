

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Celling(props) {
  const { nodes, materials } = useGLTF('/models/celling.glb')
  
  //changing color
  materials['Material.001'].color.setStyle("#d3d3d3")

  return (
    <group {...props} dispose={null}>
      
      
      
      <mesh  receiveShadow  geometry={nodes.Object_8.geometry} material={materials['Material.001']} position={[0.008, 3.686, 0.009]} scale={0.171} />
    </group>
  )
}

useGLTF.preload('/models/celling.glb')
