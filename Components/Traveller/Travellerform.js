import { useRef, useState } from "react";
import ProfilePage from "../../pages/profilei";
import classes from "./Travellerform.module.css";
import axios from 'axios';
import { useRouter } from "next/router";
import { useAuthContext } from "../../hooks/useAuthContext";
function Travellerform() {
  const inputFnameref =useRef();
  const inputMnameref =useRef();
  const inputLnameref =useRef();
  const inputGenderref =useRef();
  const inputCountrycoderef =useRef();
  const inputMobilenoref =useRef();
  const inputEmailref =useRef();
  const inputDocumentnumberref =useRef();

    const router=useRouter();
    const {auth}=useAuthContext();
    const pax=JSON.parse(auth)
  const Postdatfun=async(formdata)=>{
  const axiosConfig={headers:{firstName:pax.fname,paxId:pax.body,}}
  try{
    const res= await axios.post('https://pax-poc.herokuapp.com/api/v1/add-saved-traveller',formdata,
        axiosConfig, 
        );
    console.log(res.data.status);

    if(res.data.status === true){
     router.push('/profilei')
    }
    
    }catch(err){
      
    }
}

 function formHandler (event){
    event.preventDefault();
    
    const formdata = {
    firstName : inputFnameref.current.value,
    middleName :inputMnameref.current.value,
    lastName: inputLnameref.current.value,
    gender: inputGenderref.current.value.toUpperCase(),
    countryCode :inputCountrycoderef.current.value,
    mobileNumber: inputMobilenoref.current.value,
    emailId: inputEmailref.current.value,
    documentNumber: inputDocumentnumberref.current.value
}

Postdatfun(formdata);
 

// console.log(formdata)
    
    
 }


  return (


<>

    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form} onSubmit={formHandler}>
          <div className={classes.controls}>
            <h1>Traveller details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="FirstName">First Name</label>
              </div>
              <div>
                <input type="text" id="firstname" required ref={inputFnameref} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="MiddleName">Middle Name</label>
              </div>
              <div>
                <input type="text" id="middlename"  ref={inputMnameref} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="LastName">Last Name</label>
              </div>
              <div>
                <input type="text" id="lastname"  ref={inputLnameref} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="Gender">Gender</label>
              </div>
              <div>
                <input type="text" id="gender" required ref={inputGenderref} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                
                <label htmlFor="CountryCode">Country Code</label>
              </div>
              <div>
                <input type="text" id="countrycode" required ref={inputCountrycoderef} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="Mobileno">Mobile no</label>
              </div>
              <div>
                
                <input type="text" id="mobileno" required ref={inputMobilenoref} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="EmailID">Email ID</label>
              </div>
              <div>
                <input type="email" id="emailid" required  ref={inputEmailref}/>
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="DocumentNumber">Document Number</label>
              </div>
              <div>
                
                <input type="text" id="documentnumber" required  ref={inputDocumentnumberref}/>
              </div>
            </div>
            <div className={classes.button1}>
              <button>Submit</button>
            </div>
          </div>
        </form>
        

      </section>
    </div>
    
    
    
    </>
  );
}

export default Travellerform;
