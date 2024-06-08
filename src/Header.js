import React from 'react'
import { Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Header() {
    const linkStyle = {
        marginRight: '10px', // Adjust the spacing between links
        padding: '10px', // Add padding to the links
        color: 'white', // Text color
        textDecoration: 'none', // Remove underline from links
       
      };
     
  return (
    <div >
       <Navbar bg="dark" data-bs-theme="dark" >
        
        <Navbar.Brand href="#home">People-Place</Navbar.Brand>
        <Link to='/add' style={linkStyle}>Add Products</Link>
        <Link to='/update' style={linkStyle}>Update Products</Link>
        <Link to='/login' style={linkStyle}>Login</Link>
        <Link to='/register' style={linkStyle}>Register</Link> 
       
      </Navbar>
    </div>
  )
}
