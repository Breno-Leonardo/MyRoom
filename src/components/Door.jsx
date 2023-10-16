

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Door(props) {
  const { nodes, materials } = useGLTF('./models/door.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <group position={[-0.435, -0.101, 0.249]}>
          <mesh  receiveShadow  geometry={nodes.Plane001_Glossy_0.geometry} material={materials.Glossy} />
          <mesh  receiveShadow  geometry={nodes.Plane001_Door_0.geometry} material={materials.Door} />
          <mesh  receiveShadow  geometry={nodes.Plane003_Door_0.geometry} material={materials.Door} position={[0.852, 0.017, 0.782]} />
          <mesh  receiveShadow  geometry={nodes.Circle002_Glossy_0.geometry} material={materials.Glossy} position={[0.81, 0.043, 0.803]} />
        </group>
        <mesh  receiveShadow  geometry={nodes.Plane002_Glossy_0.geometry} material={materials.Glossy} />
        <mesh  receiveShadow  geometry={nodes.Plane002_Door_0.geometry} material={materials.Door} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/door.glb')
