import React ,{useEffect}from 'react'
import Header from './Header'
import {useNavigate} from 'react-router-dom'
export default function Update() {
    const history = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("userData")){
      history('/register');
    }
  },[]);
  return (
    <>
    <div>
    <Header/>
  </div>
    </>
   
  )
}
