
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Header from './Header';
export default function Register() {


  useEffect(()=>{
    if(localStorage.getItem("userData")){
      history('/add');
    }
  },[]);

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const history = useNavigate();
   async function signUp (){
        let items = {name,email,password}
        let result = await fetch("http://127.0.0.1:8000/api/register",{
          method: "POST",
          body: JSON.stringify(items),
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
        });

       result = await result.json();
       localStorage.setItem("userData",JSON.stringify(result));
       history('/add');
    }
  return (
    <>
    <Header />
    <div className='col-sm-6 offset-sm-3 mt-5'>
   
    <h1 className='text-center'> Registration Form</h1>
    <br/>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Enter Your Name' />
     <br/>
     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Enter Your email' />
      <br/>
     <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Enter Your password' />
     <br/>
     <Button onClick={signUp}>Sign Up</Button>
    </div>
    </>
  )
}
