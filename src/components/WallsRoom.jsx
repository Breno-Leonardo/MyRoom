import { useTexture ,Plane} from "@react-three/drei";


export function WallsRoom(props) {
    const textureFloor = useTexture({
        normalMap: "./textures/Limestone_1_normal-1K.png",
        map: "./textures/Limestone_1_basecolor-1K.png",
        aoMap: "./textures/Limestone_1_ambientocclusion-1K.png",
        roughnessMap: "./textures/Limestone_1_roughness-1K.png",
      });
    
      const textureWall = useTexture({
        map: "./textures/augustine-wong-3Om4DHcaAc0-unsplash.jpg",
      });
    
      const textureBlackWall = useTexture({
        // normalMap:"./textures/1K-black_plastic_normal.png",
        map: "./textures/1K-black_plastic_basecolor.png",
        aoMap: "./textures/1K-black_plastic_ambientocclusion.png",
        roughnessMap: "./textures/1K-black_plastic_roughness.png",
      });
    

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[10, 6, 1]}
      >
        <planeGeometry></planeGeometry>
        <meshStandardMaterial  {...textureWall}></meshStandardMaterial>
      </mesh>

      <mesh
        castShadow
        receiveShadow
        position={[0, 3, 5]}
        rotation={[1.575, 0, 0]}
        scale={[21, 15, 1]}
      >
        <planeGeometry></planeGeometry>
        <meshStandardMaterial {...textureWall}></meshStandardMaterial>
      </mesh>

      <Plane
        castShadow
        receiveShadow
        position={[0, -1.9, 5]}
        rotation={[1.575, 0, 0]}
        scale={[10, 15, -1]}
      >
        <meshStandardMaterial {...textureFloor}></meshStandardMaterial>
      </Plane>
      <mesh
        castShadow
        receiveShadow
        position={[-5, 0, 5]}
        rotation={[0, 1.57, 0]}
        scale={[15, 6, 1]}
      >
        <planeGeometry></planeGeometry>
        <meshStandardMaterial {...textureWall}></meshStandardMaterial>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        position={[5, 0, 5]}
        rotation={[0, 1.57, 0]}
        scale={[15, 6, -1]}
      >
        <planeGeometry></planeGeometry>
        <meshPhysicalMaterial {...textureBlackWall}></meshPhysicalMaterial>
      </mesh>

      <mesh
        castShadow
        receiveShadow
        position={[0, 0, 10]}
        rotation={[0, 0, 0]}
        scale={[10, 6, -1]}
      >
        <planeGeometry></planeGeometry>
        <meshStandardMaterial
          {...textureWall}
          transparent
        ></meshStandardMaterial>
      </mesh>
    </>
  );
}


