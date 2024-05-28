import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';
import { useState } from 'react';
const auth = getAuth(app);

const Signin = () => {

  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

 
  
  const createuser=()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    // ..
  });
  }
  return (
    <div>
        <input type="text" id="email" onChange={e=>setemail(e.target.value)} value={email} />
        <input type="password"  id="password" onChange={e=>setpassword(e.target.value)} value={password}/> 

        <button onClick={createuser}>SIGN IN </button>  
   </div>
  )
}

export default Signin