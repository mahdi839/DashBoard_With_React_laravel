import React,{useEffect} from 'react'
import Header from './Header';
import {useNavigate} from 'react-router-dom'
export default function AddProduct() {

  const history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("userData")){
      history('/register');
    }
  },[]);
  return (

  
  
    <> 
    
    <Header />
    
    <div>
   
    <h1>This is Add Product Page</h1>
  </div>
    </>
   
  )
}
