

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Switch(props) {
  const { nodes, materials } = useGLTF('/models/switch.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh castShadow   geometry={nodes.CoverPlate001_lightswitch_0.geometry} material={materials.lightswitch} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh castShadow   geometry={nodes.ScrewBottom001_lightswitch_0.geometry} material={materials.lightswitch} position={[0.21, -4.689, 0.01]} rotation={[-2.923, 0, 0]} scale={100} />
        <mesh castShadow   geometry={nodes.ScrewTop001_lightswitch_0.geometry} material={materials.lightswitch} position={[0.21, 4.689, 0.01]} rotation={[-1.076, 0, 0]} scale={100} />
        <mesh castShadow   geometry={nodes.Switch001_lightswitch_0.geometry} material={materials.lightswitch} position={[-0.25, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh castShadow   geometry={nodes.SwitchHolder001_lightswitch_0.geometry} material={materials.lightswitch} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/switch.glb')
