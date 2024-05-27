import { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {app} from '../firebase'
const auth = getAuth(app)

const Signup = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const createuser=()=>{
    createUserWithEmailAndPassword(auth,email,password)
  }
  return (
    <div className='sign-up-page'>

      <label htmlFor='email'>Email:</label>
      <input type="email" placeholder='enter your email' id="email" />
        <br/>
      <label htmlFor='password'>Password:</label>
      <input type="password" placeholder='enter your password' id="password" />

    </div>
  )
}

export default Signup