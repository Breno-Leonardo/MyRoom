
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/models/chair.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh2_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh2_skp7AF7_1_Model__auto_1_0.geometry} material={materials.auto_1} />
      </group>
      <group scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh4_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh4_skp7AF7_1_Model__auto_1_0.geometry} material={materials.auto_1} />
      </group>
      <group scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh6_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh6_skp7AF7_1_Model__auto_1_0.geometry} material={materials.auto_1} />
      </group>
      <group scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh8_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh8_skp7AF7_1_Model__auto_1_0.geometry} material={materials.auto_1} />
      </group>
      <group scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh10_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh10_skp7AF7_1_Model__auto_1_0.geometry} material={materials.auto_1} />
      </group>
      <group position={[0, 0, 0.001]} scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh30_skp7AF7_1_Model__auto_4_0.geometry} material={materials.auto_4} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh30_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} />
      </group>
      <group scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh40_skp7AF7_1_Model__auto_4_0.geometry} material={materials.auto_4} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh40_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} />
      </group>
      <group scale={100}>
        <mesh castShadow receiveShadow  geometry={nodes.Mesh41_skp7AF7_1_Model__auto_4_0.geometry} material={materials.auto_4} />
        <mesh castShadow receiveShadow  geometry={nodes.Mesh41_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} />
      </group>
      <mesh castShadow receiveShadow  geometry={nodes.Mesh1_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh3_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh5_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh7_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh9_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh11_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh12_skp7AF7_1_Model__auto_3_0.geometry} material={materials.auto_3} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh13_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh14_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh15_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh16_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh17_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh18_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh19_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh20_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh21_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh22_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh23_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh24_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh25_skp7AF7_1_Model__auto_3_0.geometry} material={materials.auto_3} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh26_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh27_skp7AF7_1_Model__auto_3_0.geometry} material={materials.auto_3} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh28_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh29_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh31_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh32_skp7AF7_1_Model__auto_4_0.geometry} material={materials.auto_4} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh33_skp7AF7_1_Model__auto_4_0.geometry} material={materials.auto_4} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh34_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh35_skp7AF7_1_Model__auto_4_0.geometry} material={materials.auto_4} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh36_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh37_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh38_skp7AF7_1_Model__auto_3_0.geometry} material={materials.auto_3} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh39_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh42_skp7AF7_1_Model__auto_6_0.geometry} material={materials.auto_6} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh43_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh44_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh45_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh46_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh47_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh50_skp7AF7_1_Model__auto_5001_0.geometry} material={materials['auto_5.001']} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh51_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh52_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh53_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh54_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh55_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh56_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh57_skp7AF7_1_Model_Plastic_Black_Matte_0.geometry} material={materials.Plastic_Black_Matte} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh58_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh59_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh60_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
      <mesh castShadow receiveShadow  geometry={nodes.Mesh61_skp7AF7_1_Model__auto__0.geometry} material={materials.auto} scale={100} />
    </group>
  )
}

useGLTF.preload('/models/chair.glb')
