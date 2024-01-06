import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';  
import './navbar.css';
import LogoImage from './JobBoard.png'
import Login from './login/Login';
// import Signup from './signup';
import { Nav, NavDropdown } from 'react-bootstrap';
import Signup from './signin/Signup';
const Navbar = (props) => {
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isSignupFormOpen, setSignupFormOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const openLoginForm = () => {
  //   setLoginFormOpen(true);
  // };

  const closeLoginForm = () => {
    setLoginFormOpen(false);
  };

  // const openSignupForm = () => {
  //   setSignupFormOpen(true);
  // };

  const closeSignupForm = () => {
    setSignupFormOpen(false);
  };

  return (
    <div  className={`navbar ${isSticky ? 'sticky' : ''}`}> 
        <img src={LogoImage} alt="Logo" className="logo" width="120" height="120"  />
        <Nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
      style={{backgroundColor:"#29ADB2"}}>
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
        <Nav.Item style={{color:"black"}}>
          <Link to="/" className="nav-link" style={{color:"black",fontSize:"20px"}}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="nav-link"style={{color:"black",fontSize:"20px"}}>
            Browse Job
          </Link>
        </Nav.Item>
        <NavDropdown title="Pages" id="basic-nav-dropdown" style={{color:"black"}}>
          <NavDropdown.Item>
            <Link to="/pages/action" className="nav-link" style={{color:"black"}}>
              Action
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/pages/another-action" className="nav-link" style={{color:"black"}}>
              Another Action
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/pages/something-else" className="nav-link" style={{color:"black"}}>
              Something Else Here
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Link to="/contact" className="nav-link" style={{color:"black",fontSize:"20px"}}>
            Contact
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/dashboard" className="nav-link" style={{color:"black",fontSize:"20px"}}>
            Dashboard

          </Link>
        </Nav.Item>
        
      </div>
      </div>
    </Nav>
      <div className="authButtons">
    <button><Link to="/login" className="navLink">Login</Link></button>
    <button><Link to="/signup" className="navLink">Signup</Link></button>
   </div>

      {isLoginFormOpen && <Login onClose={closeLoginForm} />}
      {isSignupFormOpen && <Signup onClose={closeSignupForm} />}
    </div>
  );
};

export default Navbar;
