
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Vinil(props) {
  const { nodes, materials } = useGLTF('./models/vinil.glb')
  materials['PBR.1'].color.setStyle("#fffb08")
  
  return (
    <group {...props} dispose={null}>
      <mesh receiveShadow geometry={nodes.Inner_PBR1_0.geometry} material={materials['PBR.1']} />
      <mesh receiveShadow geometry={nodes.Outer_PBR_0.geometry} material={materials.material} />
    </group>
  )
}

useGLTF.preload('./models/vinil.glb')
