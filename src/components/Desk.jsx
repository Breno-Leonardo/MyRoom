

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three';
export function Desk(props) {
  const { nodes, materials } = useGLTF('/models/desk.glb')

  const meshNew= new MeshPhysicalMaterial({color:"#ffffff"});

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow  geometry={nodes.Object_4.geometry} material={meshNew} rotation={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/desk.glb')
