import React from "react";
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";
import { useRouter } from "next/router";



export default function CreatePAX() {
    const route = useRouter();

 const {auth}=useAuthContext();

    const inputFnameref =useRef();
    const inputMnameref =useRef();
    const inputLnameref =useRef();
    const inputGenderref =useRef();
    const inputDobref =useRef();
    const inputMobilenoref =useRef();
    const inputEmailref =useRef();
    const inputNationalityref =useRef();

    const inputPassnoref =useRef();
    const inputPlaceofbirthref =useRef();
    const inputPlaceofiisueref =useRef();
    const inputDateofissueref =useRef();
    const inputDateofexpiryref =useRef();
    
    const inputDoctyperef =useRef();
    const inputDocnumberref =useRef();
 
    const inputSeatsecref =useRef();
    const inputRowposref =useRef();
    const inputSeattyperef =useRef();
    const inputmealref =useRef();
 
    const inputBedtyperef =useRef();
    const inputHotelstartyperef =useRef();
    const inputLHotelratingref =useRef();

 
 










    async function formHandler (event) { 
        event.preventDefault();
        const user = (localStorage.getItem('user'))
        const pax= JSON.parse(user);
        
        // console.log(pax)
        const formdata={
            
            nameDetails: {
              firstName:inputFnameref.current.value,
              middleName:inputMnameref.current.value,
              lastName: inputLnameref.current.value
              
            },
            paxEmailId: inputEmailref.current.value  ,
            paxMobileNo:inputMobilenoref.current.value  ,
            gender:inputGenderref.current.value  ,
            dob:inputDobref.current.value ,
           paxNationality:inputNationalityref.current.value  ,
           
            passports: [
              {
                passportNo:inputPassnoref.current.value  ,
               placeOfBirth:inputPlaceofbirthref.current.value ,
                placeOfIssue:inputPlaceofiisueref.current.value  ,
                dateOfIssue:inputDateofissueref.current.value ,
                dateOfExpiry:inputDateofexpiryref.current.value 
              }
            ],
            travelDocuments: [
              {
                documentType:inputDoctyperef.current.value  ,
                documentNumber: inputDocnumberref.current.value 
              }
            ],
          
            flightPreferences:[ {
          
              seatingSectionPosition:inputSeatsecref.current.value,
              seatInterRowPosition:inputRowposref.current.value,
              seatType:inputSeattyperef.current.value,
              mealType: inputmealref.current.value 
          
            }],
            hotelPreferences: [{
            
              hotelBed:inputBedtyperef.current.value  ,
              hotelStar: inputHotelstartyperef.current.value ,
              hotelRating: inputLHotelratingref.current.value 
            }]
            
          }
        

          if (pax.body === "null") {
            try{
                const response= await axios.post('https://pax-poc.herokuapp.com/api/v1/create-pax' ,formdata);  
            console.log(response.data) 
             
            // console.log(response);
            const pax_id = {body:response.data.body,fname:pax.fname,status:response.data.status};
            console.log(pax_id);
            localStorage.setItem('user',JSON.stringify(pax_id));
            route.push('./profilei')
        

         }catch(err){console.log(err)
        }
       
    }
    else{
        try{
            const response= await axios.put('https://pax-poc.herokuapp.com/api/v1/update-paxdetails',formdata,{headers:{paxId:pax.body}});  
            
            route.push('./profilei')

        }catch(err){console.log(err)
    }
}
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    return (
    <>
      <div className="contianer">
      <h1>Welcome to Neu TRavEL !!</h1>
        <form className="form" onSubmit={formHandler}>
            <div className="controls-container">
          <div className='controls'>
          <h3>Fill your details</h3>
            <div className='control'>
            <div>
              <label htmlFor="name">Firstname</label>
            </div>
            <div>
              <input type="text" id="name" required ref={inputFnameref} />
            </div>
            </div>
            <div className='control'>
              <div>
                <label htmlFor="name">Middlename</label>
              </div>
              <div>
                <input type="text" id="name" ref={inputMnameref} />
              </div>
            </div>
            <div className='control'>
              <div>
                <label htmlFor="name">Lastname</label>
              </div>
              <div>
                <input type="text" id="name" ref={inputLnameref} />
              </div>
            </div>
            <div className='control'>
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input type="text" id="email" d ref={inputEmailref}/>
              </div>
            </div>
            <div className='control'>
              <div>
                <label htmlFor="mobileno">Mobile no</label>
              </div>
              <div>
                
                <input type="text" id="mobileno"  ref={inputMobilenoref} />
              </div>
            </div>
            <div className='control'>
              <div>
                <label htmlFor="gender">Gender</label>
              </div>
              <div>
              <select id = "gender" className='dropdown' ref={inputGenderref}>  
                <option>MALE</option>  
                <option>FEMALE</option>  
                <option>OTHER</option>  
              </select>  
              </div>
            </div>
            <div className='control'>
              <div>
                <label htmlFor="dob">Date of Birth</label>
              </div>
              <div>
                <input type="date" id="dob"  ref={inputDobref}/>
              </div>
            </div>
            <div className='control'>
              <div>
                
                <label htmlFor="nationality">Nationality</label>
              </div>
              <div>
                <input type="text" id="nationality"  ref={inputNationalityref} />
              </div>
            </div>
            </div>

            <div className='controls'>
            <h3>Your Passport details</h3>
            <div className='control'>
              <div>
                <label htmlFor="passportno">Passport NUmber</label>
              </div>{" "}
              <div>
                <input type="text" id="passportno"  ref={inputPassnoref} />
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="placeofbirth">Place of Birth</label>
              </div>{" "}
              <div>
                <input type="text" id="placeofbirth"  ref={inputPlaceofbirthref}/>
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="placeofissue">Place of Issue</label>
              </div>{" "}
              <div>
                <input type="text" id="placeofissue"  ref={inputPlaceofiisueref}/>
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="dateofissue">Date of Issue</label>
              </div>
              <div>
                <input type="date" id="dateofissue"  ref={inputDateofissueref} />
              </div>
            </div>
            <div className='control'>
              <div>
                
                <label htmlFor="dateofexpiry">Date of Expiry</label>
              </div>
              <div>
                <input type="date" id="dateofexpiry"   ref={inputDateofexpiryref} />
              </div>
            </div>
            </div>
{/* Travellerform */}
            <div className='controls'>
            <h3 className="'subheading">Your Travel documents</h3>
             <div className='control'>
              <div>
                <label htmlFor="document-type">Document type</label>
                
              </div>
              <div>
              <select id="hotelBed"className='dropdown' ref={inputDoctyperef}>
                  <option>AADHAAR_CARD</option>
                  <option>DRIVING_LICENSE</option>
                  <option>PASSPORT</option>
                </select>
              </div>
            </div>
            <div className='control'>
              <div>
                <label htmlFor="adhar">Enter Adhar</label>
              </div>
              <div>
                <input type="text" id="adhar"  ref={inputDocnumberref} />
              </div>
            </div>
           
           
          </div>
{/* flightPreferences */}

<div className='controls'>
            <h3 className="'subheading">Your Flight preferences</h3>
            <div className='control'>
              <div>
                <label htmlFor="seatsecpos">Seat Section Position</label>
              </div>{" "}
              <div>
                <select id="seatsecpos" className='dropdown'ref={inputSeatsecref}>
                  <option> FORWARD </option>
                  <option> MIDDLE </option>
                  <option> BACK </option>
                </select>
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="seatrowpos">Seat Row Position</label>
              </div>{" "}
              <div>
                <select id="seatrowpos"className='dropdown'ref={inputRowposref}>
                  <option> WINDOW </option>
                  <option> MIDDLE </option>
                  <option> AISLE </option>
                </select>
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="seattype">Seat Type</label>
              </div>{" "}
              <div>
                <select id="seattype"className='dropdown'ref={inputSeattyperef} >
                  <option> Business </option>
                  <option> Economy </option>
                  <option> Student </option>
                </select>
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="mealtype">Meal Choice</label>
              </div>{" "}
              <div>
                <select id="mealtype"className='dropdown'ref={inputmealref}>
                  <option> VEG </option>
                  <option> NON-VEG </option>
                  <option> MIX </option>
                </select>
              </div>{" "}
            </div>


          </div>

{/* hotelPreferences */}

<div className='controls'>
            <h3 className="'subheading">Your Hotel preferences</h3>
            <div className='control'>
              <div>
                <label htmlFor="hotelBed">Hotel Bed Type</label>
              </div>{" "}
              <div>
              <select id="hotelBed" className='dropdown'ref={inputBedtyperef}>
                  <option> King </option>
                  <option> Queen </option>
                  <option> Single</option>
                </select>
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="hotelstar">Hotel Star</label>
              </div>{" "}
              <div>
              <select id="hotestar"className='dropdown' ref={inputHotelstartyperef}>
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
                </select>
                
              </div>{" "}
            </div>
            <div className='control'>
              <div>
                <label htmlFor="hotelrating">Hotel Rating </label>
              </div>{" "}
              <div>
              <select id="hotelstar"className='dropdown'ref={inputLHotelratingref}>
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
                </select>
              </div>{" "}
            </div>
           
          </div>












           <div className="btn"><button>Next</button>
         {/* <button>Cancel</button> */}
          </div> 

         </div>
        
        </form>
      </div>

<style jsx>{`  

.contianer{
    border: 1px solid black;
    background-color: #f6f6f6;
    padding:20px;
}

.controls-container{
// border: 2px solid grey;    
padding:10px;
// box-shadow:0 1px 9px #000000;
// background-color: #c5b5b554;
border-radius:8px;
display:flex;
flex-direction:column;
}


.controls{
    border: 2px solid grey;   
 display:flex;
 flex-wrap: wrap;
 margin:10px;
 flex-direction: column;
 justify-content: center;  
 align-items: center;
 background:#f6f6f6;
 border-radius:8px;
//  box-shadow:0 1px 9px #000000;
 
}
.control{
    margin-right: 5px;
    margin-left: 5px;
    margin:5px;
    // border: 2px solid red;
    display:flex;
    align-items: center;
    margin-bottom:1rem;
    
}

label {
    margin:0.5rem;
    self-align: left;
    margin-right:20px;
    margin-right:20px;
    padding:0.25rem;
    padding-left:0.4rem;
    padding-right:0.4rem;
    width:20%;
    // border: 2px solid blue;
    font-size:17px;
    font-weight:bold;
}

input{
    padding:0.5rem;
    font-weight:500;
    // border: 2px solid blue;
    border-radius:10px;
    font-size:15px;
    outline:none;
}
.dropdown{
    padding:0.4rem;
    // padding-left:0.3rem;
    // padding-right:0.3rem;
    font-weight:500;
    border: 2px solid blue;
    border-radius:10px;
    width:200px;
}
.dropdown option {
    padding:0.4rem;

    border: 2px solid blue;
}
.btn{
    align-self:flex-end;
}

button {
   
    padding:0.5rem;
    padding-left:3rem;
    padding-right:3rem;
    font-weight:500;
    display: inline-block;
    margin:10px;
    font-size:15px;
    border-radius:10px;
    outline:none;
}
button:hover{
    background-color:black;
    color:white;
    font-size:17px;
}

`}</style>


    </>
  );
}
