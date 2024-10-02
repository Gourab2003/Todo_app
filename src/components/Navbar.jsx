import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';

function NavScrollExample({ toggleTheme, isDarkMode }) {
  return (
    <Navbar expand="lg" bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} className="mb-4">
      <Container fluid>
        <Navbar.Brand>
          <img
            src="https://via.placeholder.com/30" 
            alt="Logo"
            className="d-inline-block align-top"
            style={{ marginRight: '10px' }}
          />
          Do it Now
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Button variant="outline-secondary" onClick={toggleTheme}>
            {isDarkMode ? <BsSun /> : <BsMoon />} 
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
