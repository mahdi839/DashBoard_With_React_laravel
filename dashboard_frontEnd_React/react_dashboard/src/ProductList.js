import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Button, Table } from 'react-bootstrap';

export default function ProductList() {
    const [data,setData] = useState([]);
    useEffect(() => {
      
          getData()
      
    }, []);
  async function deleteOperation (id){
   let result = await fetch('http://127.0.0.1:8000/api/delete/'+id,{
     method:"DELETE",
   })
   result = await result.json();
   console.log(result)
   getData()
  }

  async function getData(){
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Header />
      <h1 className='text-center mt-5'>Product List</h1>
     <div className='col-sm-6 offset-sm-3 mt-5'>
     <Table striped bordered hover className='my-5'>
     <thead>
     <tr>
     <th> Id </th>
     <th> Name </th>
     <th> Description </th>
     <th> Price </th>
     <th> Image </th>
     <th> Action </th>
     </tr>
     </thead>
     {
       data.map((item)=>
          <tbody>
       <tr>
       <td> {item.id} </td>
       <td>  {item.name} </td>
       <td>  {item.description} </td>
       <td>  {item.price} </td>
       <td> <img style={{ width:100,height:100 }} src={'http://127.0.0.1:8000/'+ item.file_path} /> </td>
       <td> <Button className='btn btn-danger' onClick={()=>deleteOperation(item.id)}>Delete</Button> </td>
       </tr>
       </tbody>
       )
     }
     </Table>
     </div>
    </div>
  )
}
