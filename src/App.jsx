import { Canvas } from "@react-three/fiber";
import "./App.css";
import Room from "./components/Room";
import {
  CameraControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import { useState } from "react";
import { Menu } from "./components/Menu";

function App() {
  const [zoom, setZoom] = useState(1);
  const [look, setLock] = useState(true);
  const defaultZoom = 0.1;
  const zoomEvent = (event) => {
    if (event.deltaY < 0) {
      setZoom((prev) => prev + defaultZoom);
    } else {
      if (zoom < 1 || zoom - defaultZoom <= 1) {
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

  // useEffect
  return (
    <div className="App">
      <Canvas
        shadows
        onWheel={zoomEvent}
        
      >
        <color attach="background" args={["#0add74"]} />
        {/* <CameraControls/> */}

        <PerspectiveCamera
          makeDefault
          position={[0, 0.77, 3.5]}
          rotation={[0, -1.5, 0]}
          
          zoom={zoom}
          fov={75}
          onUpdate={(self) => self.updateProjectionMatrix()}
        />

        <PointerLockControls isLocked={look} pointerSpeed={2} onAuxClick={(event) => {setLock(false)}} />
        <Room timeOfDay={timeOfDay}></Room>
      </Canvas>
      <Menu onChange={handleTimeOfDay}></Menu>
    </div>
  );
}

export default App;
