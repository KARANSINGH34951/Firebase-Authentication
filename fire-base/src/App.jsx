// import {getDatabase,ref,set} from 'firebase/database';
// import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';  
import {app} from './firebase'
import { getAuth, GoogleAuthProvider , signInWithPopup} from 'firebase/auth';
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

  const auth= getAuth();
  const provider = new GoogleAuthProvider();

  const handlesigningoogle=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      // ...
    });
  }

  return (
    <>
      <h2>FIRE BASE TUTORIAL</h2>
      {/* <button onClick={putdata}>Upload Your Data</button> */}
      {/* <button onClick={signup}>sign up</button> */}

      <button onClick={handlesigningoogle}>Login with Google</button>
      <br/>
      <br/>
      <h1>SIGN UP</h1>
      <Signup/>

      <h2>SIGN IN</h2>
      <SignIn />
    </>
  )
}

export default App
