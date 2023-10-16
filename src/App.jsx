import { Canvas } from "@react-three/fiber";
import "./App.css";
import Room from "./components/Room";
import {
  CameraControls,
  OrbitControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { Menu } from "./components/Menu";
import { LoaderProgress } from "./components/Loader";

function App() {
  const [zoom, setZoom] = useState(1);
  const defaultZoom = 0.1;

  const zoomEvent = (event) => {
    if (event.deltaY < 0) {
      console.log("in");

      setZoom((prev) => prev + defaultZoom);
    } else {
      if (zoom < 1 || zoom - defaultZoom <= 1) {
        console.log("out" + zoom);

        setZoom(1);
      } else setZoom((prev) => prev - defaultZoom);
    }
  };
  const [timeOfDay, setTimeOfDay] = useState("day");

  const handleTimeOfDay = () => {
    if (timeOfDay == "day") {
      setTimeOfDay("night");
    } else {
      setTimeOfDay("day");
    }
    console.log(timeOfDay);
  };

  return (
    <div className="App">
      <Canvas shadows onWheel={zoomEvent}>
        <Suspense fallback={<LoaderProgress />}>
          <color attach="background" args={["#0add74"]} />
          {/* <CameraControls /> */}

          <PerspectiveCamera
            makeDefault
            fov={60}
            zoom={zoom}
            
          onUpdate={(self) => self.updateProjectionMatrix()}
          ></PerspectiveCamera>

          <OrbitControls
            enableDamping={false}
            enablePan={false}
            target={[0, 0.77, 3.5]}
            minDistance={0}
            maxDistance={0.01}
            

          />

          <Room timeOfDay={timeOfDay}></Room>
        </Suspense>
      </Canvas>
      <Menu timeOfDay={timeOfDay} onChange={handleTimeOfDay}></Menu>
    </div>
  );
}

export default App;
