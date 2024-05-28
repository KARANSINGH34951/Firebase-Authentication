import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";
import Signin from './pages/Signin'
import {app} from './firebase'
const auth = getAuth(app);

function App() {
  const [user,setuser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid);
        setuser(user)
        // ...
      } else {
        // User is signed out
        // ...
        console.log("logout");
        setuser(null)
      }
    });
  },[])
 

  if(user==null){

    return (
      <>
        <Signin/>
      </>
    )
  }

  return (
    <>
    <div>Home page</div>
    <h1>{user.email}</h1>
    <button onClick={()=>signOut(auth)}>Log Out</button>
    
    </>
  )

  
}

export default App
