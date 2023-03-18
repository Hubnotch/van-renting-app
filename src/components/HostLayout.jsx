import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
      <h1>HostLayout Main page</h1>
      <header>
        <nav>
          <Link to="/host">Dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/reviews">Reviews</Link>
        </nav>
      </header>
      <Outlet/>
    </div>
  )
}

export default HostLayout