import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Nav.css";
import { Link } from "react-scroll";
export default function NavBar() {
  return (

    <Navbar expand="md" sticky="top" className="nav-container" >
      <Container fluid>
        <Navbar.Brand><h2 style={{ fontFamily: "karla", fontWeight: "600", fontSize: "40px" }}>MANIKANDAN</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <div className="link">
            <Link to="Home" smooth offset={-200} duration={100}><span>Home</span></Link>
            <Link to="About" smooth offset={-100} duration={100}><span>About</span></Link>
            <Link to="Projects" smooth offset={-100} duration={100}><span>Projects</span></Link>
            <Link to="skills" smooth offset={-100} duration={100}><span>Skills</span></Link>
            <Link to="contact" smooth offset={-100} duration={100}><span>Contact</span></Link>
            </div>
            
          </Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}