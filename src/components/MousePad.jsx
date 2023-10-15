

import React, { useRef } from 'react'
import { MeshReflectorMaterial, useGLTF } from '@react-three/drei'
import { MeshPhongMaterial } from 'three'
export function MousePad(props) {
  const { nodes, materials } = useGLTF('/models/mouse.glb')
  materials.mouse.color.setStyle("#7FFFD4")
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh castShadow   geometry={nodes.mouse_pad_mouse_pad_0.geometry} material={new MeshPhongMaterial({ color: "#800080" })} rotation={[-Math.PI / 2, 0, -0.205]} scale={100} />
        {/* <mesh castShadow   geometry={nodes.light_light_0.geometry} material={materials.light} rotation={[-Math.PI / 2, 0, 0]} scale={100} /> */}
        {/* <mesh castShadow   geometry={nodes.mouse_mouse_0.geometry} material={new MeshPhongMaterial({ color: "#7FFFD4" })} scale={100} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/models/mouse.glb')
