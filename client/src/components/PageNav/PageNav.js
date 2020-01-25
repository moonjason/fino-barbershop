import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const PageNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Fino's</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center mr-auto"> 
                    <Navbar.Text>Home</Navbar.Text>
                    <Navbar.Text>Gallery</Navbar.Text>
                    <Navbar.Text>About</Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PageNav;