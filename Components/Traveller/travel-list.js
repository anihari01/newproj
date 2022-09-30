import travellisticon from '../../styles/icons/travellisticon.png';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';

export function TravelList(){
  const user = (localStorage.getItem('user'))
 const [data, Setdata]=useState();
 const [listdata, SetListdata]=useState([]);
 const {auth}=useAuthContext();
 const pax=JSON.parse(user)

const headerCongif={headers:{firstName:pax.fname,paxId:pax.body}}

const DataFetch =async()=>{
    try{ const traveldata = await axios.get('https://pax-poc.herokuapp.com/api/v1/get-all-saved-traveller', headerCongif, );
    Setdata(traveldata);
    SetListdata(traveldata.data.basicTravellerDetails)}
    catch(err){
      console.log(err);
    }}
useEffect(()=>{DataFetch()},[])


    // console.log(data.data.basicTravellerDetails)
    // console.log(data)
    // console.log(listdata)
    const travels=listdata.map((traveler)=>{
    
    
    return<>
   
    <div>
    <ul className="travel-item">
        <li className="travel-items" key={traveler.basicTravellerId}>
        <div className="pax-icon"><Image src={travellisticon} width='25px' height='25px' /></div>
          <div>
            <p className="pax-data">
              <span className="pax-data-item">{traveler.firstName} {traveler.middleName} {traveler.lastName}</span>
              <span className="pax-data-item">{traveler.mobileNumber}</span>
              <span className="pax-data-item">{traveler.emailId}</span>
              <span className="pax-data-item">{traveler.documentNumber}</span>
            </p>
          </div> 
          </li>
          </ul>
          </div>
  {/* </div> */}
  <style jsx>{`
  .travel-item {
    list-style: none;
    display: flex;
    padding-inline-start: 0px;
    margin: 0px;
    padding-right: 10px;
    padding-left: 10px;
    flex-direction: column;
    // border: 2px solid green;
    width: 100%;
  }
  .travel-items {
    display: flex;
    // justify-content: space-between;
    
    align-items: center;
  }
  .pax-data {
    display: flex;
    justify-content: space-even;
  }
  .pax-data span {
    // border:2px solid red;
    // margin:2px;
  }
  .pax-data-item {
    margin-right:9px;
  }
  .pax-icon {
    margin-right:20px;
   
    // border:2px solid blue;
  }
  `}</style>
     </>
});

return<>
{travels} 
{/* <h1>fhnsd<button onClick={DataFetch}>frfrrsfs</button></h1> */}
</>



}

// export async function getServerSideProps(context){
//   const traveldata= await axios.get('https://pax-poc.herokuapp.com/api/v1/get-all-saved-traveller',{header:{firstName:'testname1',paxId:'testpax13'}})
// return{
//   props:{traveldata}
// }

// }