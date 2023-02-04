import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand  href="#home">
        <img 
          alt=""
          src="https://i.pinimg.com/originals/65/ed/e5/65ede51b5fd0c065d954bfd8ca8eab80.gif"
          width="40"
          height="40"
          className="d-inline-block align-top headtext"
        />{' '}
        &nbsp; Making The Best.
      </Navbar.Brand>
      <Nav className="justify-content-end " activeKey="/home">
        <Nav.Item>
          <Nav.Link className='navs' href="/">Home</Nav.Link>
        </Nav.Item>
       
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header