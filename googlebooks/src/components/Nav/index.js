import React from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

function NavTabs(props) {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="/">Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">HOME</Nav.Link>
                    <Nav.Link href="/login">LOGIN</Nav.Link>
                    <Nav.Link href="/signup">SIGNUP</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavTabs;