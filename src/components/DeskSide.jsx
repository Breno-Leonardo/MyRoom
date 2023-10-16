

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshPhysicalMaterial } from 'three';

export function DeskSide(props) {
  const { nodes } = useGLTF('./models/deskSide.glb')
  const {  materials} = useGLTF('./models/desk.glb')
  const meshNew= new MeshPhysicalMaterial({color:"#ffffff"});
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.001, 0]} rotation={[-1.572, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh castShadow receiveShadow  geometry={nodes.Desk_DeskMaterial_0.geometry} material={meshNew} />
            
            <mesh castShadow receiveShadow  geometry={nodes.Draw_DeskMaterial_0.geometry} material={meshNew} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/deskSide.glb')
