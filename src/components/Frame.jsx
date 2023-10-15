

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Frame(props) {
  const { nodes, materials } = useGLTF('/models/frame.glb')
  materials.wire_027177027.color.setStyle("#000")
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.defaultMaterial.geometry} material={materials.wire_027177027} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/frame.glb')
