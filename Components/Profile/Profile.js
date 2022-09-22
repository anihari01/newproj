// import { Traveller } from "../Traveller/Traveller";
import classes from "./profile.module.css";
// import Image from "next/image";

// import profileicon from '../../styles/icons/profileicon.png';
// import loginicon from '../../styles/icons/loginicon.png';
// import travelicon from '../../styles/icons/travelicon.png';
import RightContainer from "./right-container";
import LeftContainer from "./left-container";

export function Profile() {

 


 
    return (
    <>
      <div className={classes.container}>
        <RightContainer/>
        <LeftContainer/>
        </div>
      
    </>
  );
}
