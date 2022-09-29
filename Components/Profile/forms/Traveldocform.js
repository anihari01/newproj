import classes from "./Traveldocform.module.css";
import { useRef } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
function Traveldocform() {


  // const { auth } = useAuthContext();
  // const pax = JSON.parse(auth);

  const inputDoctyperef =useRef();
  const inputDocnumberref =useRef();


  async function formHandler (event) { 
    event.preventDefault();
    const formdata={
      paxID: 'a214e156-5041-47c9-b241-6011f6128392',
      travelDocuments:[{
        documentType:inputDoctyperef.current.value,
        documentNumber:inputDocnumberref.current.value,
       
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
        
        <form className={classes.form}  onSubmit={formHandler} >
          <div className={classes.controls}>
            <h1>Traveller details</h1>
             <div className={classes.control}>
              <div>
                <label htmlFor="document-type">Document type</label>
                
              </div>
              <div>
              <select id="hotelBed" ref={inputDoctyperef}>
                  <option>AADHAR_CARD</option>
                  <option>DRIVING_LICENSE</option>
                  <option>PASSPORT</option>
                </select>
              </div>
            </div>
            <div className={classes.control}>
              <div>
                <label htmlFor="adhar">Enter Adhar</label>
              </div>
              <div>
                <input type="text" id="adhar" required  ref={inputDocnumberref}/>
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

export default Traveldocform;
