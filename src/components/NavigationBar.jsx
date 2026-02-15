import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
export default function NavigationBar() {
  return (
    <div>
       <Navbar className='navbar navbar-expand-lg bg-body-tertiary'>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about/nour">About</NavLink>
    <NavLink to="/events">Events</NavLink>
        </Navbar>
    </div>
  )
}
