import React from 'react'
import {Navbar,Nav, Container, NavDropdown} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
export default function Header() {


  let user = JSON.parse(localStorage.getItem('userData'));
  const history = useNavigate();
     function logOut (){
      localStorage.clear()
      history('/register')
   }
  
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
       
          <Container  >
          <Navbar.Brand href="/">P-Place</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
          {
          localStorage.getItem('userData') ?
          <>
          <Nav.Item>
          <Link to="/"> Product List</Link>
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
          {
            localStorage.getItem('userData')?
          <Nav>
          <NavDropdown title={user && user.name}>
          <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          :
          null}
          </Container>
      </Navbar>
    </div>
  )
}
