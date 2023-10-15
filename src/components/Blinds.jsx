
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Blinds(props) {
  const { nodes, materials } = useGLTF('/models/blinds.glb')
  
  //changin color
  materials.white_plas.color.setStyle("#000000")
  materials.white_fin_trans.color.setStyle("#000000");
  
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[80.687, -56.4, 9.902]} scale={0.596}>
          <group position={[-25.457, 64.678, 34.378]} scale={1.677}>
            <mesh  castShadow receiveShadow  geometry={nodes.Object_3.geometry} material={materials.white_plas} />
            <mesh  castShadow receiveShadow  geometry={nodes.Object_4.geometry} material={materials.white_fin_trans} />
            <mesh castShadow receiveShadow  geometry={nodes.Object_5.geometry} material={materials.thread} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/blinds.glb')
