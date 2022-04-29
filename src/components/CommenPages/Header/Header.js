import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../logophone.webp';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className='home'>Home</Nav.Link>
              <Nav.Link href="/blog" className='blog'>Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login"><button className='btn btn-danger'>Login</button></Nav.Link>
              <Nav.Link eventKey={2} href="#">
               <button className='btn btn-danger'>Sign Out</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;