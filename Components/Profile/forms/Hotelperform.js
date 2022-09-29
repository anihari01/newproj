import classes from "./Hotelperform.module.css";
import { useRef } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";

function Hotelperform() {


  // const { auth } = useAuthContext();
  // const pax = JSON.parse(auth);

  const inputBedtyperef =useRef();
  const inputHotelstartyperef =useRef();
  const inputLHotelratingref =useRef();

  async function formHandler (event) { 
    event.preventDefault();
    const formdata={
      paxID: 'a214e156-5041-47c9-b241-6011f6128392',
      hotelPreferences:[{
        hotelBed:inputBedtyperef.current.value,
        hotelStar:inputHotelstartyperef.current.value,
        hotelRating:inputLHotelratingref.current.value,
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
                <label htmlFor="hotelBed">Hotel Bed Type</label>
              </div>{" "}
              <div>
              <select id="hotelBed" ref={inputBedtyperef}>
                  <option> KING </option>
                  <option> QUEEN </option>
                  <option> TWIN </option>
                </select>
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="hotelstar">Hotel Star</label>
              </div>{" "}
              <div>
              <select id="hotelstar" ref={inputHotelstartyperef}>
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
                </select>
                
              </div>{" "}
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="hotelrating">Hotel Rating </label>
              </div>{" "}
              <div>
              <select id="hotelstar" ref={inputLHotelratingref}>
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
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

export default Hotelperform;
