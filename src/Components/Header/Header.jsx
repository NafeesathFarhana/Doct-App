import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar className="bg-dark ">
    <Container>
      <Navbar.Brand href="/">
    <div className='text-light'>
    <i class="fa-solid fa-suitcase-medical fa-flip me-3"></i>
     DoctoLib
    </div>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header