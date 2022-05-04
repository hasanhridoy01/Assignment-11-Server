import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import logo from '../../../logophone.webp';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  //logout
  const logout = e => {
    e.preventDefault();
    signOut(auth);
    navigate('/login')
  }
  return (
    <div>
      <Navbar className='mb-5' collapseOnSelect fixed="top" expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className='img-mr' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className='home'>Home</Nav.Link>
              <Nav.Link href="/blog" className='blog'>Blog</Nav.Link>
              {
                user ? 
                <>
                <Nav.Link href="/addproduct" className='addproduct'>Add Product</Nav.Link>
                <Nav.Link href="/myitems" className='addproduct'>My Items</Nav.Link>
                </> : ""
              }
            </Nav>
            <Nav>
              {
                user ? <Nav.Link eventKey={2} href="#">
                <button onClick={logout} className='btn btn-danger'>Sign Out</button>
               </Nav.Link> : <Nav.Link href="/login"><button className='btn btn-danger'>Login</button></Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;