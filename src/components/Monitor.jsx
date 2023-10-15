/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 monitor.glb 
Author: Artik (https://sketchfab.com/artikdev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128
Title: Asus PC Gaming Monitor
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Monitor(props) {
  const { nodes, materials } = useGLTF('/models/monitor.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.065}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-0.106, 358.788, -251.948]} scale={100}>
            <mesh castShadow receiveShadow  geometry={nodes.Plano001_Base_0.geometry} material={materials.Base} />
            <mesh castShadow receiveShadow  geometry={nodes.Plano001_Screen_0.geometry} material={materials.Screen} />
            <mesh castShadow receiveShadow  geometry={nodes.Plano001_Backboard_0.geometry} material={materials.Backboard} />
          </group>
          <mesh castShadow receiveShadow  geometry={nodes.Plano_Base_0.geometry} material={materials.Base} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh castShadow receiveShadow  geometry={nodes.Bolt_Bolt_0.geometry} material={materials.Bolt} position={[138.582, 413.877, -176.412]} scale={5.554} />
          <mesh castShadow receiveShadow  geometry={nodes.Bolt001_Bolt_0.geometry} material={materials.Bolt} position={[138.582, 330.051, -176.412]} scale={5.554} />
          <mesh castShadow receiveShadow  geometry={nodes.Bolt002_Bolt_0.geometry} material={materials.Bolt} position={[-137.909, 413.877, -176.412]} scale={5.554} />
          <mesh castShadow receiveShadow  geometry={nodes.Bolt003_Bolt_0.geometry} material={materials.Bolt} position={[-137.909, 330.051, -176.412]} scale={5.554} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/monitor.glb')
