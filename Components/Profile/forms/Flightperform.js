import classes from "./Flightperform.module.css";
import { useRef } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Flightperform() {

  // const { auth } = useAuthContext();
  // const pax = JSON.parse(auth);

  const inputSeatsecref =useRef();
  const inputRowposref =useRef();
  const inputSeattyperef =useRef();
  const inputmealref =useRef();


async function formHandler (event) { 
  event.preventDefault();
  const formdata={
    paxID: 'a214e156-5041-47c9-b241-6011f6128392',
  flightPreferences:[{
      seatingSectionPosition:inputSeatsecref.current.value,
      seatInterRowPosition:inputRowposref.current.value,
      seatType:inputSeattyperef.current.value,
      mealType:inputmealref.current.value,
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
            <h1>Flight preference details</h1>
            <div className={classes.control}>
              <div>
                <label htmlFor="seatsecpos">Seat Section Position</label>
              </div>{" "}
              <div>
                <select id="seatsecpos" ref={inputSeatsecref}>
                  <option> FORWARD </option>
                  <option> MIDDLE </option>
                  <option> BACK </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="seatrowpos">Seat Row Position</label>
              </div>{" "}
              <div>
                <select id="seatrowpos" ref={inputRowposref}>
                  <option> WINDOW </option>
                  <option> MIDDLE </option>
                  <option> AISLE </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="seattype">Seat Type</label>
              </div>{" "}
              <div>
                <select id="seattype" ref={inputSeattyperef}>
                  <option> Business </option>
                  <option> Economy </option>
                  <option> Student </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="mealtype">Meal Choice</label>
              </div>{" "}
              <div>
                <select id="mealtype" ref={inputmealref}>
                  <option> VEG </option>
                  <option> NON-VEG </option>
                  <option> MIX </option>
                </select>
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

export default Flightperform;
