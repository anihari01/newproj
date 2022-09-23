
import NoteSate from '../Context/NoteContext'
import Data from '../Components/data'
// import { NavBar } from '../Components/Navbar/Navbar'
// import { Profile } from '../Components/Profile/Profile'
import styles from '../styles/Home.module.css'
import Li from './li'
import AuthForm from '../Components/auth/auth-form'
import { useEffect, useState } from 'react'
import FetchAPI from '../test/test'



export default function Home() {

  return (
    <>
    {/* <FetchAPI/> */}
    <AuthForm/>
   {/* <NoteSate> <Li/></NoteSate> */}
   

    </>
  )
}
