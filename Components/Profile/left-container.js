import classes from './left-container.module.css';
import { Traveller } from "../Traveller/Traveller";

export default function LeftContainer
() {

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
                <label>Birthday</label>
                <span>Sahil</span>
              </div>
              <div className={classes.infosection}>
                <label>Gender</label>
                <span>Sahil</span>
              </div>
              <div className={classes.infosection}>
                <label>Martial Status</label>
                <span>Sahil</span>
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
            <Traveller travellers={travellers}/>
            {/* // */}
          </div>
        </div>

    </>
  )
}
