

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Modem(props) {
  const { nodes, materials } = useGLTF('/models/blackModem.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.029}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.06, 4.142, -0.48]}>
            <mesh castShadow receiveShadow  geometry={nodes.polySurface91_led_azul_0.geometry} material={materials.led_azul} />
            <mesh castShadow receiveShadow  geometry={nodes.polySurface91_led_apagado_0.geometry} material={materials.led_apagado} />
            <mesh castShadow receiveShadow  geometry={nodes.polySurface91_Preto_Brilhante_0.geometry} material={materials.Preto_Brilhante} />
            <mesh castShadow receiveShadow  geometry={nodes.polySurface91_preto_Fosco_0.geometry} material={materials.preto_Fosco} />
            <mesh castShadow receiveShadow  geometry={nodes.polySurface91_aluminio_0.geometry} material={materials.aluminio} />
            <mesh castShadow receiveShadow  geometry={nodes.polySurface91_botaozinho_preto_0.geometry} material={materials.botaozinho_preto} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/blackModem.glb')
