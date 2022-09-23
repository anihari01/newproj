import axios from "axios";
import { useState , useEffect} from "react";

export default function FetchAPI() {

  const [record, SetRecord]=useState();
  
  const apiGEt= async ()=>{
    
    console.log('hi')
    try{const data = await axios.get(
      
      "https://pax-poc.herokuapp.com/api/v1/get-pax",
      
      
      
      { headers: { paxId: "46588159-12a1-414f-89c6-3e92db6424f2", firstName: "ram" } })
      SetRecord(data.data)
      if(!data){
        console.log('nodata')
      }
      console.log(data.data.dob);
      console.log(record.dob);
      
    }
    catch(err){
      
    };
  }
  // useEffect(()=>{
  //   apiGEt()
  // },[])
  
  return (
    <div>test<br/>
    <button onClick={apiGEt}></button>Fetch API</div>
  )
}
