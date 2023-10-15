
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mouse(props) {
  const { nodes, materials } = useGLTF('/models/pcMouse.glb')
  const aquaMarine="#017371"
  materials.plastic.color.setStyle("#FFFFFF")
  materials.mouse_light.color.setStyle(aquaMarine)
  materials.mouse.color.setStyle(aquaMarine)
  materials.mouse2.color.setStyle(aquaMarine)

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -1.15]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[371.964, 110.101, 159.354]} rotation={[-Math.PI / 2, 0, 0]} scale={[10.054, 17.645, 10.814]}>
            <mesh geometry={nodes.mouse1_mouse2_0.geometry} material={materials.mouse2} />
            <mesh geometry={nodes.mouse1_mouse_0.geometry} material={materials.mouse} />
            <mesh geometry={nodes.mouse1_mouse_light_0.geometry} material={materials.mouse_light} />
            <mesh geometry={nodes.mouse_wheel001_plastic_0.geometry} material={materials.plastic} position={[0, 0.091, -0.758]} scale={[1.15, 0.603, 1]} />
            <mesh geometry={nodes.mouse_side_button1_plastic_0.geometry} material={materials.plastic} position={[-0.74, 0.131, 0.52]} rotation={[-0.083, -0.305, 0.154]} scale={[0.976, 0.537, 0.875]} />
            <mesh geometry={nodes.mouse_side_button2_plastic_0.geometry} material={materials.plastic} position={[-0.785, 0.34, 0.462]} rotation={[-0.083, -0.305, 0.154]} scale={[0.976, 0.537, 0.875]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/pcMouse.glb')
