Microphone

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Microphone(props) {
  const { nodes, materials } = useGLTF('/models/microphone.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes['podstavec_��ern��_plast_0'].geometry} material={materials.ern_plast} />
          <mesh castShadow receiveShadow  geometry={nodes.podstavec_Material008_0.geometry} material={materials['Material.008']} />
        </group>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes['uchycen��_mikrofonu_Material015_0'].geometry} material={materials['Material.015']} />
          <mesh castShadow receiveShadow  geometry={nodes['uchycen��_mikrofonu_body_metal_0'].geometry} material={materials.body_metal} />
          <mesh castShadow receiveShadow  geometry={nodes['uchycen��_mikrofonu_Material009_0'].geometry} material={materials['Material.009']} />
          <mesh castShadow receiveShadow  geometry={nodes['uchycen��_mikrofonu_Material014_0'].geometry} material={materials['Material.014']} />
          <mesh castShadow receiveShadow  geometry={nodes['uchycen��_mikrofonu_��ern��_plast_0'].geometry} material={materials.ern_plast} />
        </group>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes['n��stavec_��ern��_plast_0'].geometry} material={materials.ern_plast} />
          <mesh castShadow receiveShadow  geometry={nodes['n��stavec_Material004_0'].geometry} material={materials['Material.004']} />
          <mesh castShadow receiveShadow  geometry={nodes['n��stavec_metall_0'].geometry} material={materials.metall} />
        </group>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes['nastaven��_pop_filter_body_metal_0'].geometry} material={materials.body_metal} />
          <mesh castShadow receiveShadow  geometry={nodes['nastaven��_pop_filter_light_gray_plastic_0'].geometry} material={materials.light_gray_plastic} />
        </group>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes['pop_filter_��ern��_plast_0'].geometry} material={materials.ern_plast} />
          <mesh castShadow receiveShadow  geometry={nodes.pop_filter_Material010_0.geometry} material={materials['Material.010']} />
        </group>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes['dr����k_pop_filtr_��ern��_plast_0'].geometry} material={materials.ern_plast} />
          <mesh castShadow receiveShadow  geometry={nodes['dr����k_pop_filtr_body_metal_0'].geometry} material={materials.body_metal} />
        </group>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes.konektor_Material011_0.geometry} material={materials['Material.011']} />
          <mesh castShadow receiveShadow  geometry={nodes.konektor_Material012_0.geometry} material={materials['Material.012']} />
          <mesh castShadow receiveShadow  geometry={nodes.konektor_Material013_0.geometry} material={materials['Material.013']} />
        </group>
        <group rotation={[0, -1.194, 0]} scale={4328.071}>
          <mesh castShadow receiveShadow  geometry={nodes['mikrofon_p��ep��na��_0'].geometry} material={materials.pepna} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material002_0.geometry} material={materials['Material.002']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material003_0.geometry} material={materials['Material.003']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_body_metal_0.geometry} material={materials.body_metal} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material007_0.geometry} material={materials['Material.007']} />
          <mesh castShadow receiveShadow  geometry={nodes['mikrofon_��ern��_plast_0'].geometry} material={materials.ern_plast} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material001_0.geometry} material={materials['Material.001']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material001_0_1.geometry} material={materials['Material.001']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material001_0_2.geometry} material={materials['Material.001']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material001_0_3.geometry} material={materials['Material.001']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material001_0_4.geometry} material={materials['Material.001']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material001_0_5.geometry} material={materials['Material.001']} />
          <mesh castShadow receiveShadow  geometry={nodes.mikrofon_Material015_0.geometry} material={materials['Material.015']} />
        </group>
        <mesh castShadow receiveShadow  geometry={nodes['ty��_��ern��_plast_0'].geometry} material={materials.ern_plast} rotation={[0, -1.194, 0]} scale={4328.071} />
        <mesh castShadow receiveShadow  geometry={nodes['nastaven��_��ern��_plast_0'].geometry} material={materials.ern_plast} rotation={[0, -1.194, 0]} scale={4328.071} />
        <mesh castShadow receiveShadow  geometry={nodes['utahov��k_chrome_0'].geometry} material={materials.chrome} rotation={[0, -1.194, 0]} scale={4328.071} />
        <mesh castShadow receiveShadow  geometry={nodes.kabel_Material006_0.geometry} material={materials['Material.006']} rotation={[0, -1.194, 0]} scale={4328.071} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/microphone.glb')
