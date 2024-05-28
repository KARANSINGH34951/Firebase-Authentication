import { useState } from 'react'
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {app} from '../firebase'
const auth = getAuth(app);

const SignIn = () => {
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const signinuser= () =>{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  return (
    <div>
      <label htmlFor="email">Email : </label>
      <input type="text" id="email" onChange={e=> setemail(e.target.value)} value={email}/>
      <br/>
      <label htmlFor="password">Password : </label>
      <input type="password" id="password" onChange={e => setpassword(e.target.value)} value={password} />

      <button onClick={signinuser}>Sign In</button>

    </div>
  )
}

export default SignIn