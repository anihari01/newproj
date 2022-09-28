import classes from "./left-container.module.css";
import { Traveller } from "../Traveller/Traveller";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";


import { useAuthContext } from "../../hooks/useAuthContext";
import CircularColor from "../../utils/loading";

export default function LeftContainer() {
  const { auth } = useAuthContext();
  const pax = JSON.parse(auth);
 

  const [profiledata, Setprofiledata] = useState();
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    FetchProfile();
  }, []);

  const FetchProfile = async () => {
    try {
      const data = await axios.get(
        "https://pax-poc.herokuapp.com/api/v1/get-pax",
        { headers: { firstName: pax.fname, paxId: pax.body } }
      );
      // console.log(data.data);
      Setprofiledata(data.data);
    } catch (err) {
      console.log(err);
    }
    Setloading(false);
  };

  return (
    <>
      {!loading ? (
        <div className={classes.container2}>
          <div div className={classes.container21}>
            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                {/* <button onClick={FetchProfile}>Fetchhhh</button> */}
                <h1>Profile</h1>
                <h3>Basic info, for a faster booking experience</h3>
                <Link href="./profiledetials">Add profile Details</Link>
              </div>
              <div className={classes.infosection}>
                <label>Name</label>
                <span>
                  {profiledata.nameDetails.firstName}{" "}
                  {profiledata.nameDetails.middleName}{" "}
                  {profiledata.nameDetails.lastName}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Email</label>
                <span>{profiledata.paxEmailId}</span>
              </div>
              <div className={classes.infosection}>
                <label>Mobile No</label>
                <span>{profiledata.paxMobileNo}</span>
              </div>
              <div className={classes.infosection}>
                <label>Gender</label>
                <span>{profiledata.gender}</span>
              </div>
              <div className={classes.infosection}>
                <label>D.O.B</label>
                <span>{profiledata.dob}</span>
              </div>
              <div className={classes.infosection}>
                <label>Nationality</label>
                <span>{profiledata.paxNationality}</span>
              </div>
            </div>

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
                <h3></h3>
              </div>
              <div className={classes.infosection}>
                <label>Passport No.</label>
                <span>
                  {profiledata.passports.map((pass) => {
                    return pass.passportNo;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Place of Birth</label>
                <span>
                  {profiledata.passports.map((pass) => {
                    return pass.placeOfBirth;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Place of Issue</label>
                <span>
                  {profiledata.passports.map((pass) => {
                    return pass.placeOfIssue;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Date of Issue</label>
                <span>
                  {profiledata.passports.map((pass) => {
                    return pass.dateOfIssue;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Date of Expiry</label>
                <span>
                  {profiledata.passports.map((pass) => {
                    return pass.dateOfExpiry;
                  })}
                </span>
              </div>
            </div>

            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Travel Documents</h1>
                <h3>Your travel documents</h3>
              </div>
              <div className={classes.infosection}>
                <label>
                  {profiledata.travelDocuments.map((pass) => {
                    return pass.documentType;
                  })}
                </label>
                :
                <span>
                  {profiledata.travelDocuments.map((pass) => {
                    return pass.documentNumber;
                  })}
                </span>
              </div>
            </div>

            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Flight Preferences</h1>
                <h3>Your flight preferences</h3>
              </div>
              <div className={classes.infosection}>
                <label>Seat Section Position</label>:
                <span>
                  {profiledata.flightPreferences.map((pass) => {
                    return pass.seatingSectionPosition;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Seat Row Position</label>:
                <span>
                  {profiledata.flightPreferences.map((pass) => {
                    return pass.seatInterRowPosition;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Seat-type</label>:
                <span>
                  {profiledata.flightPreferences.map((pass) => {
                    return pass.seatType;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Meal-type</label>:
                <span>
                  {profiledata.flightPreferences.map((pass) => {
                    return pass.mealType;
                  })}
                </span>
              </div>
            </div>

            <div className={classes.contianerbox}>
              <div className={classes.headingsection}>
                <h1>Hotel Preferences</h1>
                <h3>Your hotel preferences</h3>
              </div>
              <div className={classes.infosection}>
                <label>Hotel Bed</label>:
                <span>
                  {profiledata.hotelPreferences.map((pass) => {
                    return pass.hotelBed;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Hotel Rating</label>:
                <span>
                  {profiledata.hotelPreferences.map((pass) => {
                    return pass.hotelRating;
                  })}
                </span>
              </div>
              <div className={classes.infosection}>
                <label>Hotel Star</label>:
                <span>
                  {profiledata.hotelPreferences.map((pass) => {
                    return pass.hotelStar;
                  })}
                </span>
              </div>
            </div>

            <Traveller />
          </div>
        </div>
      ) : (
        <div className={classes.loading}><CircularColor color='grey'/></div>
      )}
    </>
  );
}

// export async function getServerSideProps(){

//   // try{
//     // let data = await axios.get('https://pax-poc.herokuapp.com/api/v1/get-pax',{headers:{firstName:'John',paxId:'7f918e87-dcdd-45e6-8a5d-dd3c23c99d86'}});
//     // console.log(data.data);
//     // Setprofiledata(data.data)
//     // }
//     // catch(err){
//     //   console.log(err);
//     // }
// const alldata={name:'harryy'};
//   return {props:{alldata}}

// }

// const travellers=[{
//   id:'11',
//   name:'Sahil Bhardwaj',
//   mobile:'9867452365',
//   icon:'icon',
//   email:'ghgedcd@gmail.com'
// },
// {
//   id:'12',
//   name:'Aniruth Hariharan',
//   mobile:'9867452365',
//   icon:'icon',
//   email:'abfgdtd@gmail.com'
// },
// {
//   id:'13',
//   name:'John kelly',
//   mobile:'9867452365',
//   icon:'icon',
//   email:'ab233@gmail.com'
// },
// {
//  id:'14',
//  name:'Jordan kelly',
//   mobile:'9867452365',
//   icon:'icon',
//   email:'abdfsfsdd@gmail.com'
// },
// {
//   id:'15',
//   name:'Aniruth Hariharan',
//   mobile:'9867452365',
//   icon:'icon',
//   email:'abfgdtd@gmail.com'
// }
// ]
