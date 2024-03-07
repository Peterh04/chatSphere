import React from 'react'
import'./style.css'
import { CiImageOn } from "react-icons/ci";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';



const Login = () => {

  const [err, setErr] = useState(false)
const navigate = useNavigate()


const handleSubmit = async (e)=>{
  e.preventDefault()

const email= e.target[0].value;
const  password= e.target[1].value;


try{
 await signInWithEmailAndPassword(auth, email, password)
 navigate("/")

}catch(err){
  setErr(true)
}



};
  return (
    <div className='formContainer'>
      <div className='formwrapper'>
        <span className='logo'>chatSphere</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
         
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
         

         <button>Sign in</button>
         {err && <span>Something wrong occured</span>}
        </form>
        <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
      </div>
      
    </div>
  )
}

export default Login
