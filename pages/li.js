import { useContext } from "react"
import noteContext from "../Context/NoteContext"

export default function Li() {
    const a=useContext(noteContext)
  return (
    <div>
        THid is {a.gender}
    </div>
  )
}
