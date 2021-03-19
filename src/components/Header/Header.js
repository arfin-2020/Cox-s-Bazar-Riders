import React from 'react';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import './Header'
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">Cox's Bazar Riders</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/login">Destination</Nav.Link>
              <Nav.Link href="/">Blogs</Nav.Link>
              <Nav.Link href="/login">login</Nav.Link>
              <Nav.Link href="/login">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default Header;