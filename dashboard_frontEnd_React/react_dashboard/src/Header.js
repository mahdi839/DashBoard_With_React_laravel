import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
       
          <Container  >
          <Navbar.Brand href="">P-Place</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
          {
          localStorage.getItem('userData') ?
          <>
          <Nav.Item>
          <Link to="/add">Add Product</Link>
          </Nav.Item>
          <Nav.Item> <Link to="/update">Update Product</Link></Nav.Item>
          </>
            :
          <>
          <Nav.Item> <Link to="/login">Login</Link> </Nav.Item>
           
          <Nav.Item> <Link to="/register">Register</Link></Nav.Item>
          </>

         }
          
        
          </Nav>
          </Container>
      </Navbar>
    </div>
  )
}
