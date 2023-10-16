/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 kindred.glb 
Author: maisth (https://sketchfab.com/maisth)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kindred-league-of-legends-rigged-06a32da82b0441c39950296315307400
Title: Kindred (League of Legends) - Rigged
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Kindred(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/kindred.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.Animation.play();
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.492}>
          <group name="Kindred_Sketchfabfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="HairBack" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="HairBack001" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="HairBack002" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="HairBack003" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="FrontHair" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair001" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair002" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair003" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair004" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair005" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair006" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair007" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair008" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontHair009" position={[0, 328.855, 1.738]} rotation={[2.799, -0.875, -0.116]} scale={-100} />
                <group name="FrontFur" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="ShoulderFur" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="TailFur" position={[0.461, 207.365, -27.506]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={-100} />
                <group name="Body" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="LeftEye" position={[0, 303.154, 11.913]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Eyebrow" position={[0, 308.557, 11.913]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Eyeliners" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="TeethTongue" position={[0, 293.882, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="RightEye" position={[0, 303.154, 11.913]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Ears" position={[0.233, 307.52, 1.337]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Mask" position={[0, 303.703, 11.027]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Bow" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Bow_Sling" position={[0, 0, -45.796]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                <group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_32">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_34" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_37" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_40" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_43" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_46" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_48" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_50" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_52" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_54" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_56" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_58" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_60" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_62" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_64" position={[0, 328.855, 1.738]} rotation={[-0.343, 0.875, 0.116]} scale={[-100, 100, 100]} />
                    <group name="Object_66" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_69" position={[0, 338, -1]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_72" position={[0.461, 207.365, -27.506]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[-100, 100, 100]} />
                    <group name="Object_74" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_77" position={[0, 303.154, 11.913]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_79" position={[0, 308.557, 11.913]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_81" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_83" position={[0, 293.882, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_86" position={[0, 303.154, 11.913]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_88" position={[0.233, 307.52, 1.337]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_91" position={[0, 303.703, 11.027]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_95" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <group name="Object_98" position={[0, 0, -45.796]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                    <skinnedMesh castShadow receiveShadow  name="Object_35" geometry={nodes.Object_35.geometry} material={materials.TX_Hair} skeleton={nodes.Object_35.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_36" geometry={nodes.Object_36.geometry} material={materials.Outline} skeleton={nodes.Object_36.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_38" geometry={nodes.Object_38.geometry} material={materials.TX_Hair} skeleton={nodes.Object_38.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_39" geometry={nodes.Object_39.geometry} material={materials.Outline} skeleton={nodes.Object_39.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_41" geometry={nodes.Object_41.geometry} material={materials.TX_Hair} skeleton={nodes.Object_41.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Outline} skeleton={nodes.Object_42.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_44" geometry={nodes.Object_44.geometry} material={materials.TX_Hair} skeleton={nodes.Object_44.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Outline} skeleton={nodes.Object_45.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_47" geometry={nodes.Object_47.geometry} material={materials.TX_Hair} skeleton={nodes.Object_47.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_49" geometry={nodes.Object_49.geometry} material={materials.TX_Hair} skeleton={nodes.Object_49.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_51" geometry={nodes.Object_51.geometry} material={materials.TX_Hair} skeleton={nodes.Object_51.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_53" geometry={nodes.Object_53.geometry} material={materials.TX_Hair} skeleton={nodes.Object_53.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_55" geometry={nodes.Object_55.geometry} material={materials.TX_Hair} skeleton={nodes.Object_55.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_57" geometry={nodes.Object_57.geometry} material={materials.TX_Hair} skeleton={nodes.Object_57.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_59" geometry={nodes.Object_59.geometry} material={materials.TX_Hair} skeleton={nodes.Object_59.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_61" geometry={nodes.Object_61.geometry} material={materials.TX_Hair} skeleton={nodes.Object_61.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_63" geometry={nodes.Object_63.geometry} material={materials.TX_Hair} skeleton={nodes.Object_63.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_65" geometry={nodes.Object_65.geometry} material={materials.TX_Hair} skeleton={nodes.Object_65.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_67" geometry={nodes.Object_67.geometry} material={materials.TX_Body} skeleton={nodes.Object_67.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Outline} skeleton={nodes.Object_68.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_70" geometry={nodes.Object_70.geometry} material={materials.TX_Body} skeleton={nodes.Object_70.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_71" geometry={nodes.Object_71.geometry} material={materials.Outline} skeleton={nodes.Object_71.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_73" geometry={nodes.Object_73.geometry} material={materials.TX_Body} skeleton={nodes.Object_73.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_75" geometry={nodes.Object_75.geometry} material={materials.TX_Body} skeleton={nodes.Object_75.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_76" geometry={nodes.Object_76.geometry} material={materials.Outline} skeleton={nodes.Object_76.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_78" geometry={nodes.Object_78.geometry} material={materials.TX_Eyes} skeleton={nodes.Object_78.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_80" geometry={nodes.Object_80.geometry} material={materials.TX_Body} skeleton={nodes.Object_80.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_82" geometry={nodes.Object_82.geometry} material={materials.TX_Body} skeleton={nodes.Object_82.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_84" geometry={nodes.Object_84.geometry} material={materials.TX_Body} skeleton={nodes.Object_84.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_85" geometry={nodes.Object_85.geometry} material={materials.Outline} skeleton={nodes.Object_85.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_87" geometry={nodes.Object_87.geometry} material={materials.TX_Eyes} skeleton={nodes.Object_87.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_89" geometry={nodes.Object_89.geometry} material={materials.TX_Body} skeleton={nodes.Object_89.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_90" geometry={nodes.Object_90.geometry} material={materials.Outline} skeleton={nodes.Object_90.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_92" geometry={nodes.Object_92.geometry} material={materials.TX_Mask} skeleton={nodes.Object_92.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_93" geometry={nodes.Object_93.geometry} material={materials.TX_MaskEyes} skeleton={nodes.Object_93.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_94" geometry={nodes.Object_94.geometry} material={materials.Outline} skeleton={nodes.Object_94.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_96" geometry={nodes.Object_96.geometry} material={materials.TX_Bow} skeleton={nodes.Object_96.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_97" geometry={nodes.Object_97.geometry} material={materials.Outline} skeleton={nodes.Object_97.skeleton} />
                    <skinnedMesh castShadow receiveShadow  name="Object_99" geometry={nodes.Object_99.geometry} material={materials.TX_Bow} skeleton={nodes.Object_99.skeleton} />
                  </group>
                </group>
                <group name="Podium" rotation={[-Math.PI / 2, 0, 0]} scale={3.28}>
                  <mesh name="Podium_Podium1_0" geometry={nodes.Podium_Podium1_0.geometry} material={materials.Podium1} />
                  <mesh name="Podium_Podium2_0" geometry={nodes.Podium_Podium2_0.geometry} material={materials.Podium2} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/kindred.glb')