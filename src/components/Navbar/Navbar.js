import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import "./mynavbar.style.css"
const MyNavbar = () => {
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="md"  variant="dark" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home">
        <img href="#home" className="logo"  alt='mylogo'></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link className="nav-title" href="/about">About</Nav.Link>
            <Nav.Link className="nav-title"href="/skills">Skills</Nav.Link>
            <Nav.Link className="nav-title"href="/experience">Experience</Nav.Link>
            <Nav.Link className="nav-title"href="#project">Project</Nav.Link>
            <Nav.Link className="nav-title"href="#contact">Contact</Nav.Link>
            <Nav.Link className="nav-title"href="https://drive.google.com/file/d/1TYQWcu3QIAlpmZVhNjXI_G9cqh5olbIE/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Nav.Link>


            
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}
export default MyNavbar