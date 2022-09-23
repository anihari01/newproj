import classes from './left-container.module.css';
import { Traveller } from "../Traveller/Traveller";
import { useState , useEffect} from "react";

export default function LeftContainer
() { 
  //  useEffect(()=>{
  //   Setloading(true)
  //   apiGEt();
  //   apiGEt();
  //   Setloading(false)
  // },[])
  // const [record, SetRecord]=useState();
  // const [loading,Setloading]=useState(false);
  

  // const apiGEt= async ()=>{
    
  //   console.log('hi')
  //   try{
  //     const data = await axios.get(
      
  //     "https://pax-poc.herokuapp.com/api/v1/get-pax",
      
      
      
  //     { headers: { paxId: "46588159-12a1-414f-89c6-3e92db6424f2", firstName: "ram" } })
      
      
  //     console.log(data.data.dob);
  //     SetRecord(data.data)
  //   }
  //   catch(err){
      
  //   };
  //   // Setloading(false)
  // } 
  

  
  
  const travellers=[{
        id:'11',
        name:'Sahil Bhardwaj',
        mobile:'9867452365',
        icon:'icon',
        email:'ghgedcd@gmail.com'
     },
    {
        id:'12',
        name:'Aniruth Hariharan',
        mobile:'9867452365',
        icon:'icon',
        email:'abfgdtd@gmail.com'
    },
    {
        id:'13',
        name:'John kelly',
        mobile:'9867452365',
        icon:'icon',
        email:'ab233@gmail.com'
    },
    {
       id:'14', 
       name:'Jordan kelly',
        mobile:'9867452365',
        icon:'icon',
        email:'abdfsfsdd@gmail.com'
    },
    {
        id:'15',
        name:'Aniruth Hariharan',
        mobile:'9867452365',
        icon:'icon',
        email:'abfgdtd@gmail.com'
    }
    ]
     





  return (
    <>
    <div className={classes.container2}>
          <div div className={classes.container21}>
            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Profile</h1>
                <h3>Basic info, for a faster booking experience</h3>
              </div>
              <div className={classes.infosection}>
                <label>Name</label>
                <span>Sahil</span>
              </div>
              <div className={classes.infosection}>
                <label>Email</label>
                <span>sdf@gmail.com</span>
              </div>
              <div className={classes.infosection}>
                <label>Mobile No</label>
                <span>435394353</span>
              </div>
              <div className={classes.infosection}>
                <label>Gender</label>
                <span>Male</span>
              </div>
              <div className={classes.infosection}>
                <label>D.O.B</label>
                <span>17/08/1998</span>
              </div>
              <div className={classes.infosection}>
                <label>Nationality</label>
                <span>Indian</span>
              </div>
            </div>
            {/* // */}
            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Login Details</h1>
                <h3>Manage your email address, password and mobile number</h3>
              </div>
              <div className={classes.infosection}>
                <label>Mobile No.</label>
                <span>Sahil</span>
              </div>
              <div className={classes.infosection}>
                <label>Email-id</label>
                <span>Sahil</span>
              </div>
              <div className={classes.infosection}>
                <label>Password</label>
                <span>Sahil</span>
              </div>
            </div>
            {/* details cointainer */}
            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Passport Details</h1>
                <h3>Your Passport's details</h3>
              </div>
              <div className={classes.infosection}>
                <label>Passport No.</label>
                <span>2234</span>
              </div>
              <div className={classes.infosection}>
                <label>Place of Birth</label>
                <span>Ranchi</span>
              </div>
              <div className={classes.infosection}>
                <label>Place of Issue</label>
                <span>Ranchi</span>
              </div>
              <div className={classes.infosection}>
                <label>Date of Issue</label>
                <span>11/09/99</span>
              </div>
              <div className={classes.infosection}>
                <label>Date of Expiry</label>
                <span>09/09/99</span>
              </div>
            </div>

            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Travel Documents</h1>
                <h3>Your travel documents</h3>
              </div>
              <div className={classes.infosection}>
                <label>AADHAR CARD</label>:
                <span>1234-5674-1234</span>
              </div>
            </div>


            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Flight Preferences</h1>
                <h3>Your flight preferences</h3>
              </div>
              <div className={classes.infosection}>
                <label>Seat Section Position</label>:
                <span>FORWARD</span>
              </div>
              <div className={classes.infosection}>
                <label>Seat Row Position</label>:
                <span>WINDOW</span>
              </div>
              <div className={classes.infosection}>
                <label>Seat-type</label>:
                <span>Economy</span>
              </div>
              <div className={classes.infosection}>
                <label>Meal-type</label>:
                <span>VEG</span>
              </div>
            </div>

          
            <Traveller travellers={travellers}/>
            {/* // */}
          </div>
        </div>

    </>
  )
}
