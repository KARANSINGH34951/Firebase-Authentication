// import {getDatabase,ref,set} from 'firebase/database';
// import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';  
// import {app} from './firebase'
import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
// const db= getDatabase(app)
// const auth= getAuth(app)

function App() {

  // const signup=()=>{
  //  createUserWithEmailAndPassword(auth,"ceitkaransingh2026@gmail.com","12345678")
  //   .then((value)=>console.log(value));
  // }

  // const putdata= ()=>{
  //   set(ref(db,"users/karan"),{
  //     id:24,
  //     name:"karan singh",
  //     age:20,
  //     email:"ceitkaransingh2026@gmail.com"

  //   })
  // }



  return (
    <>
      <h2>FIRE BASE TUTORIAL</h2>
      {/* <button onClick={putdata}>Upload Your Data</button> */}
      {/* <button onClick={signup}>sign up</button> */}
      <h1>SIGN UP</h1>
      <Signup/>

      <h2>SIGN IN</h2>
      <SignIn />
    </>
  )
}

export default App
