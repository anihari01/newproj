
import classes from './right-container.module.css';
import profileicon from '../../styles/icons/profileicon.png';
import loginicon from '../../styles/icons/loginicon.png';
import travelicon from '../../styles/icons/travelicon.png';
import Image from "next/image";




export default function RightContainer() {




  
  return (
    <>
     <div className={classes.container1}>
          <div className={classes.container11}>
        
            <div className={classes.container111}>SB</div>
            <div className={classes.container112}>
              <ul className={classes.listitems}>
                <li className={classes.listitem}><div className={classes.listitem1}><Image src={profileicon} width='30px' height='30px'/></div>
                <div className={classes.listitem2}><a>Profile</a></div></li>
                <li className={classes.listitem}><div className={classes.listitem1}><Image src={loginicon} width='30px' height='30px'/></div>
                <div className={classes.listitem2}><a>Login Details</a></div></li>
                <li className={classes.listitem} ><div className={classes.listitem1}><Image src={travelicon} width='30px' height='30px'/></div>
                <div className={classes.listitem2}><a>Save Travellers</a></div></li>
              </ul>
            </div>
          
          </div>
        </div>
    </>
  )
}
