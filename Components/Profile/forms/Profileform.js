import classes from "./Profileform.module.css";
import { useRef } from "react";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Profileform(event) {
  
  const inputFnameref =useRef();
  const inputMnameref =useRef();
  const inputLnameref =useRef();
  const inputGenderref =useRef();
  const inputDobref =useRef();
  const inputMobilenoref =useRef();
  const inputEmailref =useRef();
  const inputNationalityref =useRef();

  const { auth } = useAuthContext();
  

  async function  formHandler (event) { 
    event.preventDefault();
    const pax = JSON.parse(auth);
const  formdata ={
  paxId: '021ddc23-aeac-423c-a65c-7849e0a91b9c',
  nameDetails:{
    firstName: inputFnameref.current.value,
    middleName: inputMnameref.current.value,
    lastName: inputLnameref.current.value
  },
  gender: inputGenderref.current.value,
  dob:inputDobref.current.value,
  paxMobileNo:inputMobilenoref.current.value,
  paxEmailId:inputEmailref.current.value,
  paxNationality:inputNationalityref.current.value
};
const samdata={
  paxId:"a214e156-5041-47c9-b241-6011f6128392",
  nameDetails:{
      salutation: "Mr",
      firstName: "Aditya",
      middleName: "Kishor",
  },
}
console.log(formdata)
// try{const response=await axios.put('https://pax-poc.herokuapp.com/api/v1/update-paxdetails',samdata) ;
// console.log(response)}
// catch(err){console.log(err);
//   }
}
  
  
  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form} onSubmit={formHandler}>
          <div className={classes.controls}>
            <h1>Edit Profile</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="name">Firstname</label>
              </div>
              <div>
                <input type="text" id="name" required  ref={inputFnameref}/>
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="name">Middlename</label>
              </div>
              <div>
                <input type="text" id="name"   ref={inputMnameref}/>
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="name">Lastname</label>
              </div>
              <div>
                <input type="text" id="name"  ref={inputLnameref}/>
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="text" id="email" required ref={inputEmailref} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="mobileno">Mobile no</label>
              </div>
              <div>
                
                <input type="text" id="mobileno" required ref={inputMobilenoref} />
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="gender">Gender</label>
              </div>
              <div>
              <select id = "gender"  ref={inputGenderref}>  
                <option>MALE</option>  
                <option>FEMALE</option>  
                <option>OTHER</option>  
              </select>  
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="dob">Date of Birth</label>
              </div>
              <div>
                <input type="date" id="dob" required  ref={inputDobref}/>
              </div>
            </div>
            <div className={classes.control}>
              <div>
                
                <label htmlFor="nationality">Nationality</label>
              </div>
              <div>
                <input type="text" id="nationality" required ref={inputNationalityref} />
              </div>
            </div>
            
            
            <div className={classes.button1}>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Profileform;
