

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pc(props) {
  const { nodes, materials } = useGLTF('/models/pc.glb')
  materials['04_-_Default'].transparent=true;
  materials['04_-_Default'].opacity=0.5;
  materials['07_-_Default'].transparent=true;
  materials['07_-_Default'].opacity=0.5;
  materials['03_-_Default'].transparent=true;
  materials['03_-_Default'].opacity=1;

  return (
    <group {...props} dispose={null}>
      <group position={[-64.949, 61.989, 15]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1.039]}>
        <mesh geometry={nodes['Object002_12_-_Default_0'].geometry} material={materials['12_-_Default']} position={[60.367, 0, -60]} />
      </group>
      <group position={[-91.384, 63.435, 16.81]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[85.712, 1.81, -63.435]}>
          <mesh geometry={nodes['Object003_04_-_Default_0'].geometry} material={materials['04_-_Default']} />
          <mesh geometry={nodes['Object003_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
          <mesh geometry={nodes['Object003_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
        </group>
      </group>
      <group position={[-73.938, 60, 15]} rotation={[-Math.PI / 2, 0, 0]} scale={0.859}>
        <mesh geometry={nodes['Object004_Material_#26_0'].geometry} material={materials.Material_26} position={[60.367, 0, -60]} />
      </group>
      <group position={[-91.58, 0.065, 15.275]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.059, 1.098, 1]}>
        <mesh geometry={nodes['Object005_11_-_Default_0'].geometry} material={materials['11_-_Default']} position={[85.712, -0.769, -124.512]} />
      </group>
      <group position={[-91.116, 83.649, 9.816]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Box004_10_-_Default_0'].geometry} material={materials['10_-_Default']} position={[-55.818, -52.015, -83.649]} />
      </group>
      <group position={[-117.434, 61.989, 15]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 1, 1.039]}>
        <mesh geometry={nodes['Object006_12_-_Default_0'].geometry} material={materials['12_-_Default']} position={[60.367, 0, -60]} />
      </group>
      <group position={[-90.41, 48.307, 39.913]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.678, 2.394, 0.632]}>
        <mesh geometry={nodes['Cylinder008_11_-_Default_0'].geometry} material={materials['11_-_Default']} position={[-30.596, -2.289, -75.08]} />
      </group>
      <group position={[-81.33, 64.991, 33.469]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.35, 0.88, 0.851]}>
        <mesh geometry={nodes['Box008_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
        <mesh geometry={nodes['Box008_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
      </group>
      <group position={[-81.33, 64.991, 33.469]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.35, 0.88, 0.851]}>
        <mesh geometry={nodes['Object007_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
        <mesh geometry={nodes['Object007_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
      </group>
      <group position={[-81.33, 64.991, 33.692]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.35, 0.88, 0.851]}>
        <mesh geometry={nodes['Object008_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
        <mesh geometry={nodes['Object008_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
      </group>
      <group position={[-81.33, 64.991, 33.469]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.35, 0.88, 0.851]}>
        <mesh geometry={nodes['Object009_03_-_Default_0'].geometry} material={materials['03_-_Default']} />
        <mesh geometry={nodes['Object009_07_-_Default_0'].geometry} material={materials['07_-_Default']} />
      </group>
      <group position={[-69.691, 73.187, 44.417]} rotation={[Math.PI, 0, 0]} scale={[0.678, 2.394, 0.632]}>
        <mesh geometry={nodes['Cylinder009_11_-_Default_0'].geometry} material={materials['11_-_Default']} position={[-30.596, -2.289, -75.08]} />
      </group>
      <group position={[-69.691, 67.688, 44.417]} rotation={[Math.PI, 0, 0]} scale={[0.678, 2.394, 0.632]}>
        <mesh geometry={nodes['Cylinder010_11_-_Default_0'].geometry} material={materials['11_-_Default']} position={[-30.596, -2.289, -75.08]} />
      </group>
      <group position={[-80.95, 91.523, 9.421]} rotation={[Math.PI / 2, -1.309, 0]} scale={[0.678, 2.394, 0.632]}>
        <mesh geometry={nodes['Cylinder011_11_-_Default_0'].geometry} material={materials['11_-_Default']} position={[-30.596, -2.289, -75.08]} />
      </group>
      <mesh geometry={nodes['Box001_05_-_Default_0'].geometry} material={materials['05_-_Default']} position={[-91.801, 43.889, 7.278]} rotation={[-Math.PI / 2, 0, 0]} scale={[1.797, 1.441, 0.833]} />
      <mesh geometry={nodes['Cylinder001_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-91.797, 47.898, -18.183]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Cylinder002_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-91.797, 47.898, 7.592]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Cylinder003_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-91.797, 47.898, 32.991]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Box002__0.geometry} material={materials.Box002__0} position={[-90.882, 0, 65.392]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['Cylinder004_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-91.797, 25.73, 64.319]} rotation={[Math.PI, 0, 0]} scale={[1.294, 1.358, 0.94]} />
      <mesh geometry={nodes['Cylinder005_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-91.797, 60.383, 64.319]} rotation={[Math.PI, 0, 0]} scale={[1.294, 1.358, 0.94]} />
      <mesh geometry={nodes['Cylinder006_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-91.797, 95.302, 64.319]} rotation={[Math.PI, 0, 0]} scale={[1.294, 1.358, 0.94]} />
      <mesh geometry={nodes['Box003_06_-_Default_0'].geometry} material={materials['06_-_Default']} position={[-86.592, 68.937, -3.391]} rotation={[-Math.PI / 2, 0, 0]} scale={[1, 0.704, 1]} />
      <mesh geometry={nodes['Cylinder007_03_-_Default_0'].geometry} material={materials['03_-_Default']} position={[-90.764, 83.625, 12.257]} rotation={[Math.PI, 0, 0]} scale={[0.966, 1.013, 0.701]} />
      <mesh geometry={nodes['Box009_08_-_Default_0'].geometry} material={materials['08_-_Default']} position={[-76.564, 62.265, 56.842]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.378, 0.88, 1.16]} />
      <mesh geometry={nodes['Box010_08_-_Default_0'].geometry} material={materials['08_-_Default']} position={[-76.564, 30.835, 15.368]} rotation={[Math.PI, 0, 0]} scale={[0.378, 0.88, 1.16]} />
      <mesh geometry={nodes['Box011_08_-_Default_0'].geometry} material={materials['08_-_Default']} position={[-76.564, 38.513, -29.123]} scale={[0.378, 0.88, 0.498]} />
    </group>
  )
}

useGLTF.preload('/models/pc.glb')
