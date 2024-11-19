import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../Images/logo.png';

function Header()
{
    return(
        <Navbar className="navbar" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} style={{marginTop:'-10px'}} width={80}></img>                
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="link mr-auto">
                        <Nav.Link as={Link} to="/">HOME</Nav.Link>
                        
                        <Nav.Link as={Link} to="/menu">MENU</Nav.Link>
                        {/* <Nav.Link as={Link} to="/orders">ORDERS</Nav.Link> */}
                        <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
                        {/* <Nav.Link as={Link} to="/signup">SIGN UP</Nav.Link> */}
                        <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header