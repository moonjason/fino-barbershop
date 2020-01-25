import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const PageNav = () => {
    return (
            <Navbar bg="light" expand="md">
                    <Navbar.Brand className="brand">Fino's</Navbar.Brand>                        
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center"> 
                        <Nav>
                            <Nav.Item className="nav__item">
                                <Nav.Link>Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav__item">
                                <Nav.Link>Gallery</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav__item">    
                                <Nav.Link>About</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
    )
}

export default PageNav;