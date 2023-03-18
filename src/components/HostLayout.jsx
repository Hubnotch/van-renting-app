import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }
  return (
    <div>
      <h1>HostLayout Main page</h1>
      <header>
        <nav>
          <NavLink end style={({isActive})=>isActive ? activeStyles : null} to="/host">Dashboard</NavLink>
          <NavLink style={({isActive})=>isActive ? activeStyles : null} to="/host/income">Income</NavLink>
          <NavLink style={({isActive})=>isActive ? activeStyles : null} to="/host/vans">Vans</NavLink>
          <NavLink style={({isActive})=>isActive ? activeStyles : null} to="/host/reviews">Reviews</NavLink>
        </nav>
      </header>
      <Outlet/>
    </div>
  )
}

export default HostLayout