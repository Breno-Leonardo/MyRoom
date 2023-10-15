
import { LightsRoom } from "./LightsRoom";
import { ObjectsRoom } from "./ObjectsRoom";
import { WallsRoom } from "./WallsRoom";

const Room = (props) => {

  
  return (
    <>
      
      <LightsRoom timeOfDay={props.timeOfDay}/>

      <WallsRoom/>

      <ObjectsRoom/>
    </>
  );
};
export default Room;
