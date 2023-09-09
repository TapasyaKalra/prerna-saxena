import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {NavLink,Link} from 'react-router-dom';
import '../css/Header.css'

function Navigation() {
  return (
    <div>
      <Navbar className="py-3" collapseOnSelect bg="primary" expand="lg" fixed="top">
        <Container>
          <Link to='/about'>
            <Navbar.Brand href="/about" className="text-secondary" id="navigation-title">
              {/* -<img src="assets/images/logo/TY-logo/1.png" alt="" className="header__logo me-3" /> */}
            Therapeutically Yours, Prerna</Navbar.Brand>
          </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-secondary ">
              <Nav.Link eventKey="1"><NavLink exact className="nav-link" to="/about" activeClassName="active" aria-current="page">About</NavLink ></Nav.Link>
              <Nav.Link eventKey="2"><NavLink className="nav-link" to="/testimonials">Testimonials</NavLink ></Nav.Link>
              <NavDropdown title="Services" id="servicesDropdown"    className='nav-link nav-dropdown' eventKey='3'>
                <div className="blur-effect">
                  <NavDropdown.Item href="/therapy" className='nav-dropdown-item '>Therapy</NavDropdown.Item >
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/community" className='nav-dropdown-item'>Community</NavDropdown.Item>
                </div>
                
              </NavDropdown>
              <Nav.Link eventKey="4"><NavLink className="nav-link" to="/newsletter">Newsletter</NavLink ></Nav.Link>
              <Nav.Link eventKey="5"><NavLink className="nav-link" to="/contact">Contact</NavLink ></Nav.Link>
              
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
