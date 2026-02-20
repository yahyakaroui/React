import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="top-nav">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Esprit Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-2">
            <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about/nour" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/events" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Events
            </NavLink>
            <NavLink to="/events/new" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
              Add New Event
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
