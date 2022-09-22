import { useEffect } from "react";

import records from '../data/paxdata.json';
export default function Data () {



return<>
<div>
    {
        records.map(post =>{
            return<>
            <p>{post.gender}</p>
            </>
        })
    }
</div>
</>



//         const apiUrl='https://sa-123sd-default-rtdb.firebaseio.com/0/flightPreferences';
// function pulljson(){
//     fetch(apiUrl)
//     .then(response=> response.data)
//     .then(responseData =>{ console.log(responseData)})


// }


// useEffect(()=>
// {pulljson();},[])

//   return (
//     <><div>
        
//         </div></>
//   )
}
