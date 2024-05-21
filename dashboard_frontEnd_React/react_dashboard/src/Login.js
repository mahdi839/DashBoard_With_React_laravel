import React,{useEffect, useState} from 'react'
import {json, useNavigate} from 'react-router-dom'
import Header from './Header'
import { Button } from 'react-bootstrap';
export default function Login() {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const history = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("userData")){
      history('/add');
    }
  },[]);

  async function login(){
     let item = {
       email,password
     }
     let result = await fetch("http://127.0.0.1:8000/api/login",{
      method:"POST",
      headers:{
        "content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
     });
     result = await result.json();
     localStorage.setItem("userData",JSON.stringify(result));
     history('/add')
  }
  return (
    <> 
    
    <Header />
    
    <div>
   
    <h1 className='text-center'> Login Page</h1>
    <br />
     <div className='col-sm-6  offset-sm-3'>
     <input type="email" placeholder='email' className='form-control' onChange={(e)=>setEmail(e.target.value)} />
     <br />
     <input type="password" placeholder='password' className='form-control' onChange={(e)=>setPassword(e.target.value)} />
     <br />
     <Button onClick={login}>Submit</Button>
     </div>
    </div>
    
    </>
   
  )
}
