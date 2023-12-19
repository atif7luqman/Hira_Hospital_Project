import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="header" style={{ backgroundColor: '#BE2E3E' }}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-center align-items-center text-white">
            <Nav.Link href="#features" className='text-white'>
              <FacebookFilled />
            </Nav.Link>
            |
            <Nav.Link href="#features" className='text-white'>
              <YoutubeFilled />
            </Nav.Link>
            |
            <Nav.Link href="#features" className='text-white'>
              <InstagramFilled />
            </Nav.Link>
            |
            <Nav.Link href="#features" className='text-white'>
              <LinkedinFilled />
            </Nav.Link>
          </Nav>
          <Nav className='d-flex align-items-center text-white'>
            {/* Use the Link component to navigate to the ContactUs component */}
            <Link to="/footer2" className='text-white text-decoration-none'>
              Contact Us
            </Link>

            <Nav.Link href="#features" className='text-white'>
              Privacy Policy
            </Nav.Link>
  
            <Nav.Link href="#features" className='text-white'>
              Disclaimer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
