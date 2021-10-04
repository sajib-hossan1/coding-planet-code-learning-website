import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle ={
        border : "1px solid white"
      };
    return (
        <div>
            <Navbar expand="lg">
              <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt="Web site logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="toogle" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ms-auto">
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/pricing">Courses</NavLink>
                        <NavLink className="nav-link" activeStyle={activeStyle} to="/about-us">About Us</NavLink>
                      </Nav>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;