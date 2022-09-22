import NoteContext from "./NoteContext";
import records from '../data//paxdata.json'
const NoteSate=(props)=>{


    return(
        <NoteContext.Provider value={records}>
            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteSate;