import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export function LightsRoom(props) {
  const distanceBulbLight = 0.7;
  const lampIntensity = 50;

  const directionalLightRef = useRef();
  useHelper(directionalLightRef, DirectionalLightHelper, 1, "red");
  return (
    <>
      {props.timeOfDay == "day" ? (
        <>
          <rectAreaLight
          
            position={[0, 1.3, 10.1]}
            rotation={[-1, 0, 0]}
            height={3}
            width={5}
            
            color={"#FFE484"}
            intensity={5}
          />
           <directionalLight position={[0, 1, 10.0]}  intensity={15} color={"#FFE484"} castShadow ></directionalLight>
          <ambientLight intensity={1} />
        </>
      ) : (
        <>
          <ambientLight intensity={0.4} />

          <pointLight
            distance={distanceBulbLight}
            position={[-0.6, 1.9, 5]}
            intensity={lampIntensity}
          />
          <pointLight
            distance={distanceBulbLight}
            position={[0, 1.9, 5.4]}
            intensity={lampIntensity}
          />
          <pointLight
            distance={distanceBulbLight}
            position={[0, 1.9, 4.6]}
            intensity={lampIntensity}
          />
          <pointLight
            distance={distanceBulbLight}
            position={[0.6, 1.9, 5]}
            intensity={lampIntensity}
          />
          <pointLight
            distance={distanceBulbLight}
            position={[0, 1.6, 5]}
            intensity={lampIntensity / 10}
          />
          <pointLight
            castShadow
            position={[0, 1.9, 5]}
            intensity={lampIntensity}
          />
        </>
      )}

      <pointLight
        castShadow
        position={[4.5, 0, 0.5]}
        intensity={10}
        color={"red"}
        distance={2}
      />
    </>
  );
}
