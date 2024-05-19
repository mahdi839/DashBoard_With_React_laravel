import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'
export default function Login() {
  const history = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("userData")){
      history('/add');
    }
  },[]);
  return (
    <> 
    
    <Header />
    
    <div>
   
    <h1>This is Add Login Page</h1>
    </div>
    
    </>
   
  )
}
