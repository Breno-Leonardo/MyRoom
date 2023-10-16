

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Notebook(props) {
  const { nodes, materials } = useGLTF('./models/notebook.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow   geometry={nodes.Object_2.geometry} material={materials.blinn1SG} />
        <mesh castShadow   geometry={nodes.Object_3.geometry} material={materials.blinn2SG} />
        <mesh castShadow   geometry={nodes.Object_4.geometry} material={materials.blinn8SG} />
        <mesh castShadow   geometry={nodes.Object_5.geometry} material={materials.blinn9SG} />
        <mesh castShadow   geometry={nodes.Object_6.geometry} material={materials.lambert5SG} />
        <mesh castShadow   geometry={nodes.Object_7.geometry} material={materials.blinn11SG} />
        <mesh castShadow   geometry={nodes.Object_8.geometry} material={materials.blinn4SG} />
        <mesh castShadow   geometry={nodes.Object_9.geometry} material={materials.blinn6SG} />
        <mesh castShadow   geometry={nodes.Object_10.geometry} material={materials.blinn7SG} />
        <mesh castShadow   geometry={nodes.Object_11.geometry} material={materials.blinn8SG} />
        <mesh castShadow   geometry={nodes.Object_12.geometry} material={materials.lambert4SG} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/notebook.glb')
