import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Header = () => {
  const navStyles = {
    "font-weight": "bold",
    "text-decoration": "underline",
    "color": "#161616",
  }
  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <NavLink style={({isActive})=>isActive ? navStyles : null } to="/host">Host</NavLink>
        <NavLink style={({isActive})=>isActive ? navStyles : null } to="/about">About</NavLink>
        <NavLink style={({isActive})=>isActive ? navStyles : null } to="/vans">Vans</NavLink>
      </nav>
    </header>
  )
}

export default Header