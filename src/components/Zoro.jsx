/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 zoro.glb 
Author: mateusbmarcelino (https://sketchfab.com/mateusbmarcelino)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/roronoa-d19ff4b6b1954228b68d2dc608ec6817
Title: Roronoa
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Zoro(props) {
  const { nodes, materials , scene} = useGLTF('./models/zoro.glb')
  
  return (
    <group {...props}  dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.153, 0.016, 1.362]} rotation={[0.482, 0.318, -2.371]} scale={[0.016, 0.016, 0.007]}>
          <mesh castShadow receiveShadow  geometry={nodes.Cube002_0.geometry} material={materials['Material.003']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube002_1.geometry} material={materials['Material.004']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube002_2.geometry} material={materials['Material.005']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube002_3.geometry} material={materials.Dourado} />
        </group>
        <group position={[-0.137, 0.209, 0.727]} rotation={[-0.841, -0.823, -1.696]} scale={[0.277, 0.006, 0.004]}>
          <mesh castShadow receiveShadow  geometry={nodes.Cube001_0.geometry} material={materials['Material.008']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube001_1.geometry} material={materials.Dourado} />
        </group>
        <group position={[-0.143, 0.17, 0.708]} rotation={[-0.841, -0.823, -1.696]} scale={[0.277, 0.006, 0.004]}>
          <mesh castShadow receiveShadow  geometry={nodes.Cube003_0.geometry} material={materials.Dourado} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube003_1.geometry} material={materials['Material.010']} />
        </group>
        <group position={[-0.139, -0.125, 1.423]} rotation={[-1.919, -1.24, 3.121]} scale={[0.016, 0.016, 0.007]}>
          <mesh castShadow receiveShadow  geometry={nodes.Cube004_0.geometry} material={materials['Material.003']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube004_1.geometry} material={materials['Material.005']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube004_2.geometry} material={materials['Material.009']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube004_3.geometry} material={materials.Dourado} />
        </group>
        <group position={[-0.145, 0.15, 0.673]} rotation={[-0.841, -0.823, -1.696]} scale={[0.277, 0.006, 0.004]}>
          <mesh castShadow receiveShadow  geometry={nodes.Cube005_0.geometry} material={materials.Dourado} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube005_1.geometry} material={materials['Material.011']} />
        </group>
        <group position={[0.394, 0.042, 0.81]} rotation={[-0.713, -1.449, 0.452]} scale={[0.016, 0.016, 0.007]}>
          <mesh castShadow receiveShadow  geometry={nodes.Cube006_0.geometry} material={materials['Material.003']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube006_1.geometry} material={materials['Material.005']} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube006_2.geometry} material={materials.Dourado} />
          <mesh castShadow receiveShadow  geometry={nodes.Cube006_3.geometry} material={materials['Material.012']} />
        </group>
        <primitive object={nodes.Armature_rootJoint} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder003_0.geometry} material={materials.OutLine} skeleton={nodes.Cylinder003_0.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder002_0.geometry} material={materials.OutLine} skeleton={nodes.Cylinder002_0.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder_0.geometry} material={materials.Calca} skeleton={nodes.Cylinder_0.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder_1.geometry} material={materials.Camisa} skeleton={nodes.Cylinder_1.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder_2.geometry} material={materials.VerdeClaro} skeleton={nodes.Cylinder_2.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder_3.geometry} material={materials.Pele} skeleton={nodes.Cylinder_3.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder_4.geometry} material={materials.Material} skeleton={nodes.Cylinder_4.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder_5.geometry} material={materials['Material.001']} skeleton={nodes.Cylinder_5.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cube_0.geometry} material={materials.VerdeClaro} skeleton={nodes.Cube_0.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Cylinder001_0.geometry} material={materials.VerdeClaro} skeleton={nodes.Cylinder001_0.skeleton} />
        <skinnedMesh castShadow receiveShadow  geometry={nodes.Torus002_0.geometry} material={materials.Brinco} skeleton={nodes.Torus002_0.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/zoro.glb')
