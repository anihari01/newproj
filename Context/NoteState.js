import { useEffect, useState } from "react";
import NoteContext from "./NoteContext";
// import records from '../data//paxdata.json'
const NoteSate=(props)=>{
    const [paxdata,Setpaxdata]=useState({uid:'fsdsd'});

    useEffect(()=>{},[])
        const GetData=async ()=>{
        try{
            const data=await axios.get(
                'https://pax-poc.herokuapp.com/api/v1/get-pax',
                {headers:{paxId:"805ca477-6711-4699-b6a6-0ca83bc7e22c",firstName:"Aditya"},}
            )

            // Setpaxdata(data)
        }
        catch(err){
            console.log('errr')
        }


    }


    return(
        <NoteContext.Provider value={{fname:'dfdfs'}}>
            <button onClick={GetData} >dataaaaa</button>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteSate;