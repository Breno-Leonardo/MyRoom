import { Barrel } from "./Barrel";
import { Celling } from "./Celling";
import { Bulb } from "./Bulb";
import { Blinds } from "./Blinds";
import { Windows } from "./Windows";
import { Bed } from "./Bed";
import { Desk } from "./Desk";
import { Door } from "./Door";
import { DeskSide } from "./DeskSide";
import { Pc } from "./Pc";
import { Switch } from "./Switch";
import { MousePad } from "./MousePad";
import { Mouse } from "./Mouse";
import { GamingKeyboard } from "./GamingKeyboard";
import { Monitor } from "./Monitor";
import { Image } from "./Image";
import { ImageWithFrame } from "./ImageWithFrame";
import { Closet } from "./Closet";
import { Kindred } from "./Kindred";
import { Zoro } from "./Zoro";
import { Vinil } from "./Vinil";
import { Notebook } from "./Notebook";
import { Phone } from "./Phone";
import { Microphone } from "./Microphone";
import { Headset } from "./Headset";
import { Modem } from "./Modem";
import { Chair } from "./Chair";
export function ObjectsRoom(props) {
  return (
    <>
      <Chair
        castShadow
        receiveShadow
        rotation={[0, 2, 0]}
        scale={[0.00045, 0.00045, 0.00045]}
        position={[-1.4, -1.9, 4]}
      />

      {/* ////////////////////////////////////////
      Left Wall (Door) */}
      <Door
        castShadow
        receiveShadow
        scale={[0.019, 0.019, 0.019]}
        position={[-2.5, -1.9, -0.1]}
      ></Door>

      <Phone
        castShadow
        receiveShadow
        rotation={[-1.6, 0, -0.4]}
        scale={[0.005, 0.005, 0.005]}
        position={[2.2, -0.5, 0.7]}
      ></Phone>

      <Vinil
        castShadow
        receiveShadow
        rotation={[1.5, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        position={[-2.5, 2.4, 0.1]}
      ></Vinil>

      <Image
        castShadow
        receiveShadow
        transparent
        scale={[0.6, 0.75, 0.5]}
        position={[2, 1.4, 0.03]}
        rotation={[0, 0, 0]}
        img="./textures/blackPosterLuffy.png"
      />

      <ImageWithFrame
        scale={[1, 0.75, 1]}
        position={[1, 1.4, -2.9]}
        img="./textures/kindred.jpg"
      />

      <ImageWithFrame
        scale={[1, 0.75, 1]}
        position={[3, 1.4, -2.9]}
        img="./textures/kindredClassic.png"
      />

      <Modem
        castShadow
        receiveShadow
        scale={[1, 1, 1]}
        position={[0.4, -0.2, 0]}
        rotation={[1.6, 3.15, 0]}
      />

      <Switch
        castShadow
        receiveShadow
        rotation={[0, 4.7, 0]}
        scale={[2.5, 2.5, 2.5]}
        position={[0, 0.5, 0.05]}
      ></Switch>

      <DeskSide
        castShadow
        receiveShadow
        rotation={[0, 0, 0]}
        scale={[3.3, 1.8, 2.5]}
        position={[0.9, -1.9, 4.07]}
      ></DeskSide>

      <Notebook
        castShadow
        receiveShadow
        rotation={[0, 0, 0]}
        scale={[0.075, 0.075, 0.075]}
        position={[1.5, -0.72, 1.3]}
      ></Notebook>

      <Microphone
        castShadow
        receiveShadow
        rotation={[0, 0, 0]}
        scale={[0.25, 0.25, 0.25]}
        position={[2.6, -0.6, 1.4]}
      ></Microphone>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// 
      Front Wall (Black) */}
      <Image
        scale={[1.55, 0.9, 1]}
        position={[3.79, 0.07, 4.7]}
        rotation={[0, 4.74, 0]}
        img="./textures/monitor.png"
      />

      <Image
        scale={[1.55, 0.9, 1]}
        position={[3.79, 0.07, 3]}
        rotation={[0, 4.74, 0]}
        img="./textures/monitor2.png"
      />

      <Image
        scale={[1.8, 1.4, 1]}
        position={[4.9, 1.7, 4.9]}
        rotation={[0, -1.6, 0]}
        img="./textures/quadroMeio.jpg"
      />

      <ImageWithFrame
        scale={[0.75, 1, 1]}
        position={[7.9, 1.6, 2.5]}
        rotation={[0, -1.6, 0]}
        img="./textures/breaking.jpg"
      />

      <ImageWithFrame
        scale={[0.75, 1, 1]}
        position={[7.9, 1.6, 7.5]}
        rotation={[0, -1.6, 0]}
        img="./textures/nika.jpg"
      />

      <Desk
        castShadow
        receiveShadow
        rotation={[0, 0, 0]}
        scale={[2.3, 2, 1.5]}
        position={[3.6, -0.75, 3.98]}
      ></Desk>

      <MousePad
        castShadow
        receiveShadow
        rotation={[0, 0.2, 0]}
        scale={[0.5, 0.5, 0.5]}
        position={[2.9, -0.55, 5]}
      ></MousePad>

      <Mouse
        castShadow
        receiveShadow
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
        position={[2.7, -1.65, 1]}
      ></Mouse>

      <Kindred
        castShadow
        receiveShadow
        rotation={[0, -1, 0]}
        scale={0.25}
        position={[3.5, -0.54, 2]}
      ></Kindred>

      <Zoro
        castShadow
        receiveShadow
        rotation={[0, -1.5, 0]}
        scale={0.35}
        position={[3.5, -0.56, 1.3]}
      ></Zoro>

      <GamingKeyboard
        castShadow
        receiveShadow
        rotation={[0, -1.55, 0]}
        scale={[0.05, 0.05, 0.05]}
        position={[2.7, -0.5, 3.3]}
      ></GamingKeyboard>

      <Pc
        transparent
        rotation={[0, 0, 0]}
        scale={[0.01, 0.01, 0.01]}
        position={[5.5, -0.55, 0.7]}
      ></Pc>

      <Monitor
        castShadow
        receiveShadow
        transparent
        rotation={[0, 1.6, 0]}
        scale={[1.3, 1.3, 1.3]}
        position={[4, -0.55, 3]}
      ></Monitor>

      <Monitor
        castShadow
        receiveShadow
        transparent
        rotation={[0, 1.6, 0]}
        scale={[1.3, 1.3, 1.3]}
        position={[4, -0.55, 4.7]}
      ></Monitor>

      <Headset
        castShadow
        receiveShadow
        rotation={[1.6, 0, -0.5]}
        scale={[4, 4, 4]}
        position={[2.6, -0.49, 5.9]}
      ></Headset>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// 
      Right Wall (Window)*/}
      <Image
        scale={[0.6, 0.75, 0.5]}
        position={[3.4, 1.6, 9.9]}
        rotation={[0, -3.2, 0]}
        img="./textures/luffyPoster.jpg"
      />

      <Blinds
        castShadow
        receiveShadow
        scale={[0.0345, 0.043, 0.05]}
        position={[-2.92, -0.95, 6.4]}
        rotation={[0, 0, 0]}
      ></Blinds>

      <Windows
        castShadow
        receiveShadow
        scale={[0.0275, 0.026, 0.0275]}
        position={[0, -0.24, 9.3]}
        rotation={[0, 1.57, 0]}
      ></Windows>

      <Bed
        castShadow
        receiveShadow
        scale={[0.014, 0.016, 0.019]}
        position={[2, -2, 8.58]}
        rotation={[0, 4.75, 0]}
      ></Bed>

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// 
      Back Wall (Closet) */}
      <Barrel
        castShadow
        receiveShadow
        rotation={[0, 3, 0]}
        scale={[1.9, 1.6, 1.9]}
        position={[-4.2, -1.9, 0.7]}
      ></Barrel>

      <Closet
        castShadow
        receiveShadow
        rotation={[0, 1.32, 0]}
        scale={[4, 1.6, 3]}
        position={[-6, -1.9, 9.4]}
      ></Closet>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////
      Roof */}
      <Celling
        castShadow
        receiveShadow
        scale={[1, 0.7, 1]}
        position={[0, 0.4, 5]}
      ></Celling>

      <Bulb
        rotation={[0, 0, 3.1]}
        scale={0.023}
        position={[0, 2.1, 5.54]}
      ></Bulb>
    </>
  );
}
