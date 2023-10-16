

import React, { useRef } from 'react'
import { useGLTF, useAnimations, useTexture } from '@react-three/drei'
import {   MeshPhysicalMaterial } from 'three'

export function Closet(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/closet2.glb')
  const { actions } = useAnimations(animations, group)
  materials.Sicomora.color.setStyle("#000")
  materials.RAL_7047_telegrey_4_semiglos.color.setStyle("#fff")

  const textureMetalic = useTexture({
    normalMap: "./textures/Metal_scratched_008_metallic.jpg",
    map: "./textures/Metal_scratched_008_basecolor.jpg",
    aoMap: "./textures/Metal_scratched_008_ambientOcclusion.jpg",
    roughnessMap: "./textures/Metal_scratched_008_roughness.jpg",
    metalnessMap:"./textures/Metal_scratched_008_metallic.jpg"
  });
  const meshNew= new MeshPhysicalMaterial({color:"#ffffff", ...textureMetalic});
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="7685ebc16e114b7ca2188a38870dcd12fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.001}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Group011" position={[1022.073, 1280, 346.079]} rotation={[-Math.PI / 2, 0, Math.PI / 9]}>
                  <group name="Group005" position={[515.5, 48.708, -508.833]}>
                    <group name="Box164" position={[-476.956, 0, 25.006]}>
                      <mesh castShadow receiveShadow  name="Box164_��������_0" geometry={nodes['Box164_��������_0'].geometry} material={materials.material} />
                    </group>
                    <group name="Line005" position={[-232.956, -81.946, 48.073]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <mesh castShadow receiveShadow  name="Line005_��������_0" geometry={nodes['Line005_��������_0'].geometry} material={materials.material} />
                    </group>
                    <group name="Line004" position={[-285.956, -81.946, 48.073]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <mesh castShadow receiveShadow  name="Line004_��������_0" geometry={nodes['Line004_��������_0'].geometry} material={materials.material} />
                    </group>
                    <group name="Line003" position={[-338.956, -81.946, 48.073]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <mesh castShadow receiveShadow  name="Line003_��������_0" geometry={nodes['Line003_��������_0'].geometry} material={materials.material} />
                    </group>
                    <group name="Line002" position={[-391.956, -81.946, 48.073]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <mesh castShadow receiveShadow  name="Line002_��������_0" geometry={nodes['Line002_��������_0'].geometry} material={materials.material} />
                    </group>
                    <group name="Line001" position={[-444.956, -81.946, 48.073]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <mesh castShadow receiveShadow  name="Line001_��������_0" geometry={nodes['Line001_��������_0'].geometry} material={materials.material} />
                    </group>
                    <group name="Box163" position={[-281.956, 195, 25.006]} rotation={[0, 0, Math.PI / 2]}>
                      <mesh castShadow receiveShadow  name="Box163_��������_0" geometry={nodes['Box163_��������_0'].geometry} material={materials.material} />
                    </group>
                    <group name="Line006" position={[-179.956, -81.946, 48.073]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <mesh castShadow receiveShadow  name="Line006_��������_0" geometry={nodes['Line006_��������_0'].geometry} material={materials.material} />
                    </group>
                  </group>
                  <group name="Group007" position={[-1020.571, -262.862, 21.5]}>
                    <group  name="Object014" position={[444.155, -30.287, -456.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <group name="Object_138" position={[-480.943, -150.142, 34.188]}>
                        <mesh castShadow receiveShadow  name="Object014_������������_0" geometry={nodes['Object014_������������_0'].geometry} {...textureMetalic} material={meshNew} />
                      </group>
                    </group>
                    <group name="Object012" position={[247.321, 0.7, 0]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_141" position={[238.75, -1301.5, -9.5]}>
                        <mesh castShadow receiveShadow  name="Object012_Sicomora_0" geometry={nodes.Object012_Sicomora_0.geometry} material={materials.Sicomora} />
                      </group>
                    </group>
                    
                  </group>
                  <group name="Group008" position={[-10.42, -262.087, 21.5]}>
                    
                    <group name="Furniture_handle_014" position={[-415.853, -65.251, -937.443]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
                    <group name="Object020" position={[-444.163, -31.063, -456.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <group  name="Object_149" position={[-480.943, -28.31, 34.188]}>
                        <mesh castShadow receiveShadow  name="Object020_������������_0" geometry={nodes['Object020_������������_0'].geometry} {...textureMetalic} material={meshNew} />
                      </group>
                    </group>
                    <group name="Object018" position={[-247.329, -0.075, 0]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_152" position={[-276.75, -1301.5, -9.5]}>
                        <mesh castShadow receiveShadow  name="Object018_Sicomora_0" geometry={nodes.Object018_Sicomora_0.geometry} material={materials.Sicomora} />
                      </group>
                    </group>
                  </group>
                  <group name="Group009" position={[12.33, -262.067, 21.5]}>
                    
                    <group name="Object022" position={[442.254, -31.083, -456.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <group  name="Object_159" position={[-480.943, -150.142, 34.188]}>
                        <mesh castShadow receiveShadow  name="Object022_������������_0" geometry={nodes['Object022_������������_0'].geometry} {...textureMetalic} material={meshNew}/>
                      </group>
                    </group>
                    <group name="Object026" position={[245.42, -0.096, 0]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_162" position={[238.75, -1301.5, -9.5]}>
                        <mesh castShadow receiveShadow  name="Object026_Sicomora_0" geometry={nodes.Object026_Sicomora_0.geometry} material={materials.Sicomora} />
                      </group>
                    </group>
                  </group>
                  <group name="Group010" position={[1020.354, -262.888, 21.5]}>
                   
                    <group name="VIFS044" position={[-247.104, 0.726, 0]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_169" position={[-276.75, -1301.5, -9.5]}>
                        <mesh castShadow receiveShadow  name="VIFS044_Sicomora_0" geometry={nodes.VIFS044_Sicomora_0.geometry} material={materials.Sicomora} />
                      </group>
                    </group>
                    <group name="Furniture_handle_010" position={[-443.938, -30.261, -456.5]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                      <group name="Object_172" position={[-480.943, -28.31, 34.188]}>
                        <mesh castShadow receiveShadow  name="Furniture_handle_010_������������_0" geometry={nodes['Furniture_handle_010_������������_0'].geometry} {...textureMetalic} material={meshNew} />
                      </group>
                    </group>
                  </group>
                  <group name="VIFS003" position={[0, -242.663, 1270.5]}>
                    <group name="Object_6" position={[-1050, -30, -9.5]}>
                      <mesh castShadow receiveShadow  name="VIFS003_Sicomora_0" geometry={nodes.VIFS003_Sicomora_0.geometry} material={materials.Sicomora} />
                    </group>
                  </group>
                  <group name="VIFS001" position={[0, -263.162, -1250]} rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_9" position={[-1031, -30, -9.5]}>
                      <mesh castShadow receiveShadow  name="VIFS001_Sicomora_0" geometry={nodes.VIFS001_Sicomora_0.geometry} material={materials.Sicomora} />
                    </group>
                  </group>
                  <group name="VIFS037" position={[513, 32.337, 767.5]} rotation={[Math.PI / 2, 1.571, 0]}>
                    <group name="Object_12" position={[-67.519, -198.157, -497]}>
                      <mesh castShadow receiveShadow  name="VIFS037_��������_0" geometry={nodes['VIFS037_��������_0'].geometry} material={materials.material} />
                    </group>
                  </group>
                  <group name="VIFS035" position={[23.5, 32.337, 767.5]} rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Object_15" position={[-7.5, -67.5, 0]}>
                      <mesh castShadow receiveShadow  name="VIFS035_��������_0" geometry={nodes['VIFS035_��������_0'].geometry} material={materials.material} />
                    </group>
                  </group>
                  <group name="VIFS036" position={[1007.5, 32.337, 767.5]} rotation={[Math.PI / 2, 0, -Math.PI]}>
                    <group name="Object_18" position={[-7.5, -67.5, 0]}>
                      <mesh castShadow receiveShadow  name="VIFS036_��������_0" geometry={nodes['VIFS036_��������_0'].geometry} material={materials.material} />
                    </group>
                  </group>
                  <group name="Group006" position={[0, 37.337, -9.5]}>
                    <group name="VIFS020" position={[-261.75, -5, 32.5]}>
                      <group name="Object_39" position={[280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS020_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS020_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS006" position={[-515.5, 242, -1240.5]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_42" position={[-534.5, -30, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS006_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS006_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS007" position={[-515.5, -282, -1240.5]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_45" position={[-534.5, -30, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS007_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS007_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS027" position={[515.5, -5, 852.5]}>
                      <group name="Object_48" position={[534.5, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS027_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS027_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS008" position={[-515.5, 0, -1202.5]}>
                      <group name="Object_51" position={[-534.5, -310, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS008_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS008_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS041" position={[41, -212, -809.5]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                      <group name="Object_54" position={[-539, -461, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS041_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS041_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS040" position={[973, 38, -809.5]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <group name="Object_57" position={[-252, -461, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS040_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS040_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS039" position={[58, 38, -809.5]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <group name="Object_60" position={[-252, -461, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS039_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS039_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS032" position={[515.5, -282, -1240.5]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_63" position={[534.5, -30, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS032_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS032_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS013" position={[-261.75, -5, 852.5]}>
                      <group name="Object_66" position={[-788.25, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS013_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS013_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS014" position={[-769.25, -5, 852.5]}>
                      <group name="Object_69" position={[-280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS014_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS014_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS015" position={[-769.25, -5, 442.5]}>
                      <group name="Object_72" position={[-280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS015_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS015_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS016" position={[-769.25, -5, 32.5]}>
                      <group name="Object_75" position={[-280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS016_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS016_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS017" position={[-769.25, -5, -377.5]}>
                      <group name="Object_78" position={[-280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS017_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS017_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS018" position={[-769.25, -5, -787.5]}>
                      <group name="Object_81" position={[-280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS018_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS018_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS022" position={[-261.75, -5, -787.5]}>
                      <group name="Object_84" position={[280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS022_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS022_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS021" position={[-261.75, -5, -377.5]}>
                      <group name="Object_87" position={[280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS021_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS021_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS042" position={[990, -212, -809.5]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
                      <group name="Object_90" position={[539, -461, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS042_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS042_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS033" position={[515.5, 242, -1240.5]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_93" position={[534.5, -30, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS033_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS033_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS031" position={[515.5, 0, -1202.5]}>
                      <group name="Object_96" position={[534.5, -310, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS031_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS031_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS038" position={[515.5, 30, -416.5]}>
                      <group name="Object_99" position={[534.5, -340, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS038_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS038_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS019" position={[-261.75, -5, 442.5]}>
                      <group name="Object_102" position={[280.75, -305, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS019_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS019_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS034" position={[1023, 0, 0]} rotation={[Math.PI / 2, 1.571, 0]}>
                      <group name="Object_105" position={[290, -1270.5, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS034_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS034_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS030" position={[515.5, 0, 1262.5]}>
                      <group name="Object_108" position={[534.5, -310, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS030_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS030_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS009" position={[-515.5, 0, 1262.5]}>
                      <group name="Object_111" position={[-534.5, -310, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS009_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS009_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS029" position={[515.5, 285, 34]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_114" position={[534.5, -1304.5, -5]}>
                        <mesh castShadow receiveShadow  name="VIFS029_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS029_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS005" position={[-1023, 0, 0]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <group name="Object_117" position={[-290, -1270.5, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS005_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS005_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS011" position={[-8, 0, 0]} rotation={[Math.PI / 2, 1.571, 0]}>
                      <group name="Object_120" position={[290, -1270.5, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS011_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS011_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS012" position={[-515.5, -5, 30]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <group name="Object_123" position={[-295, -1300.5, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS012_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS012_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS010" position={[-515.5, 285, 34]} rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_126" position={[-534.5, -1304.5, -5]}>
                        <mesh castShadow receiveShadow  name="VIFS010_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS010_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                    <group name="VIFS028" position={[8, 0, 0]} rotation={[Math.PI / 2, -1.571, 0]}>
                      <group name="Object_129" position={[-290, -1270.5, -8]}>
                        <mesh castShadow receiveShadow  name="VIFS028_RAL_7047_telegrey_4_semiglos_0" geometry={nodes.VIFS028_RAL_7047_telegrey_4_semiglos_0.geometry} material={materials.RAL_7047_telegrey_4_semiglos} />
                      </group>
                    </group>
                  </group>
                  <group name="Object008" position={[19.002, -1803.048, -1280]} rotation={[-Math.PI / 2, 0, Math.PI]} />
                  <group name="VIFS024" position={[-534.5, -252.662, -1280]} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/closet2.glb')
