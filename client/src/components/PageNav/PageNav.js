import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';

const navLinkActive = {
    "color": "#e50914",
    "text-decoration": "none",
    "border-bottom": "1px solid #e50914",
}

const PageNav = () => {
    return (
            <Navbar style={{"background-color": "#f5f5f1"}} expand="md">
                    <Navbar.Brand className="brand"><Link className="link" exact to="/">Fino's</Link></Navbar.Brand>                        
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center"> 
                        <Nav>
                            <Nav.Item className="nav__item">
                                <Nav.Link>
                                    <NavLink className="nav--link" activeStyle={navLinkActive} exact to="/">Home</NavLink>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav__item">
                                <Nav.Link>
                                    <NavLink className="nav--link" activeStyle={navLinkActive} exact to="/gallery">Gallery</NavLink>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav__item">    
                                <Nav.Link>
                                    <NavLink className="nav--link" activeStyle={navLinkActive} exact to="/about">About</NavLink>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
    )
}

export default PageNav;