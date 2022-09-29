import classes from "./passportdetailsform.module.css";
import { useRef } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
function Passportdetailsform() {

// const { auth } = useAuthContext();
  // const pax = JSON.parse(auth);

  const inputPassnoref =useRef();
  const inputPlaceofbirthref =useRef();
  const inputPlaceofiisueref =useRef();
  const inputDateofissueref =useRef();
  const inputDateofexpiryref =useRef();
  


async function formHandler (event) { 
  event.preventDefault();
  const formdata={
    paxID: 'a214e156-5041-47c9-b241-6011f6128392',
    passports:[{
      passportNo:inputPassnoref.current.value,
      placeOfBirth:inputPlaceofbirthref.current.value,
      placeOfIssue:inputPlaceofiisueref.current.value,
      dateOfIssue:inputDateofissueref.current.value,
      dateOfExpiry:inputDateofexpiryref.current.value,
    }]
  }
  
  // try{const response=await axios.put('https://pax-poc.herokuapp.com/api/v1/update-paxdetails',samdata) ;
// console.log(response)}
// catch(err){console.log(err);
//   }
  console.log (formdata);
   
  
} 




  return (
    <div className={classes.container}>
      <section className={classes.contact}>
        
        <form className={classes.form} onSubmit={formHandler}>
          <div className={classes.controls}>
            <h1>Traveller details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="passportno">Passport NUmber</label>
              </div>{" "}
              <div>
                <input type="text" id="passportno" required  ref={inputPassnoref}/>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="placeofbirth">Place of Birth</label>
              </div>{" "}
              <div>
                <input type="text" id="placeofbirth" required  ref={inputPlaceofbirthref}/>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="placeofissue">Place of Issue</label>
              </div>{" "}
              <div>
                <input type="text" id="placeofissue" required  ref={inputPlaceofiisueref}/>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="dateofissue">Date of Issue</label>
              </div>{" "}
              <div>
                <input type="date" id="dateofissue" required ref={inputDateofissueref} />
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                {" "}
                <label htmlFor="dateofexpiry">Date of Expiry</label>
              </div>
              <div>
                <input type="date" id="dateofexpiry" required  ref={inputDateofexpiryref}/>
              </div>{" "}
            </div>
            <div className={classes.button1}>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </section>{" "}
    </div>
  );
}

export default Passportdetailsform;
