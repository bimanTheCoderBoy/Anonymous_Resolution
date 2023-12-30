import React from 'react'
import axios from "axios"
import { redirect } from 'react-router-dom'
export default function Login() {
    const loginwithgoogle = ()=>{
        window.open("http://localhost:8001/auth/google/callback","_self")
    }
    const logoutTest=async()=>{
       const v= await axios.post("http://localhost:8001/user/logout")
        // await axios.get("http://localhost:8001/")
        console.log(v);
        // redirect("#")
    }
  return (
    <div>
      <button onClick={()=>{loginwithgoogle()}}>join with google</button>
      <button onClick={()=>{logoutTest()}}>logoutTest</button>

    </div>
  )
}
