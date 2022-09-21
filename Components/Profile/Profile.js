// import { Traveller } from "../Traveller/Traveller";
import classes from "./profile.module.css";
// import Image from "next/image";

// import profileicon from '../../styles/icons/profileicon.png';
// import loginicon from '../../styles/icons/loginicon.png';
// import travelicon from '../../styles/icons/travelicon.png';
import RightContainer from "./right-container";
import LeftContainer from "./left-container";

export function Profile() {
 const travellers=[{
    name:'Sahil Bhardwaj',
    mobile:'9867452365',
    icon:'icon',
    email:'ghgedcd@gmail.com'
 },
{
    name:'Aniruth Hariharan',
    mobile:'9867452365',
    icon:'icon',
    email:'abfgdtd@gmail.com'
},
{
    name:'John kelly',
    mobile:'9867452365',
    icon:'icon',
    email:'ab233@gmail.com'
},
{
    name:'Jordan kelly',
    mobile:'9867452365',
    icon:'icon',
    email:'abdfsfsdd@gmail.com'
},
{
    name:'Aniruth Hariharan',
    mobile:'9867452365',
    icon:'icon',
    email:'abfgdtd@gmail.com'
}
]
 
 
    return (
    <>
      <div className={classes.container}>
        <RightContainer/>
        <LeftContainer/>
        </div>
      
    </>
  );
}
