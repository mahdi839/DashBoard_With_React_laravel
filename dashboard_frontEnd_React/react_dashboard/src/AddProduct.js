import React,{useEffect, useState} from 'react'
import Header from './Header';
import {useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap';
export default function AddProduct() {

  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [file,setFile] = useState(null);

  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("userData")){
      navigate('/register');
    }
  },[navigate]);

 async function productAdd(){
    console.log(name,description,price,file);
    const formData = new FormData();
    formData.append('name', name)
    formData.append('description',description)
    formData.append('price', price)
    formData.append('file',file)
    try {
      let result = await fetch('http://127.0.0.1:8000/api/add_product', {
        method: 'POST',
        body: formData,
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      let response = await result.json();
      console.log(response);
      alert('Product has been saved');
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error saving the product');
    }
  }
  return (

  
  
    <> 
    
    <Header />
    
    <div className='col-sm-6 offset-sm-3 mt-5'>
    <h1 className='text-center'>Add Product</h1>
    <br/>
    <input type="text"  className='form-control' placeholder='name' onChange={(e)=>setName(e.target.value)} /> <br />
    <input type="text"  className='form-control' placeholder='description'onChange={(e)=>setDescription(e.target.value)} /> <br />
    <input type="text"  className='form-control' placeholder='price' onChange={(e)=>setPrice(e.target.value)} /> <br />
    <input type="file"  className='form-control' placeholder='image' onChange={(e)=>setFile(e.target.files[0])} /> <br />
    <Button onClick={productAdd}>Add Product</Button>
   
  </div>
    </>
   
  )
}
