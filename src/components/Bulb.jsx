
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bulb(props) {
  const { nodes, materials } = useGLTF('./models/bulb.glb')
  return (
    <group {...props} dispose={null}>
      <mesh transparent opacity={0.1} geometry={nodes.Object_5.geometry} material={materials.surfaceShader1} position={[0, -10.164, -23.149]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.lambert2} position={[0, 0.463, -23.149]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.lambert3} position={[0, 0, -23.149]} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.lambert3} position={[0, 0, -23.149]} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.lambert3} position={[-1.202, -1.112, -23.149]} rotation={[0, 0, 0.326]} scale={[0.166, 0.101, 0.218]} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.lambert3} position={[1.276, -1.112, -23.149]} rotation={[0, 0, -0.326]} scale={[-0.166, 0.101, 0.218]} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.lambert3} position={[-0.566, 2.251, -23.15]} scale={[0.121, 0.086, 0.134]} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.lambert3} position={[0.551, 2.251, -23.15]} scale={[-0.121, 0.086, 0.134]} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.lambert1} position={[4.528, 4.255, -23.148]} rotation={[0, 0, -1.205]} scale={[0.013, 0.009, 0.013]} />
    </group>
  )
}

useGLTF.preload('./models/bulb.glb')
