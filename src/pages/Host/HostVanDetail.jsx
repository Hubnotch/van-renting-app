import React, { useState, useEffect } from 'react'
import { useParams, Link,Outlet, NavLink } from 'react-router-dom'

const HostVanDetail = () => {
  const [currentVan, setCurrentVan] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setCurrentVan(data.vans))
  }, [id])

  if (!currentVan) {
    return <h1>Loading...</h1>
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  return (
    <section>
      <Link
        to=".."
        relative='path'
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt='' />
          <div className="host-van-detail-info-text">
            <i
              className={`van-type van-type-${currentVan.type}`}
            >
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
      </div>
      <nav className="host-van-detail-nav">
        <NavLink end style={({ isActive }) => isActive ? activeStyles : null} to=".">Details</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="pricing">Pricing</NavLink>
        <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="photo">Photo</NavLink>
      </nav>
      <main>
        <Outlet/>
</main>
    </section>
  )
}

export default HostVanDetail