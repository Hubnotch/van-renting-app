import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../api/utils"

export default function Vans() {
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  // console.log(typeFilter)
  const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans


  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVans(data)
      }
      catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    }
    loadVans();
  }, [])



  const vanElements = displayedVans.map(van => (
    <div key={van.id} className="van-tile">
      <Link to={`${van.id}`}
        state={{
        search: `?${searchParams.toString()} `,
        type: typeFilter
      }}>
        <img src={van.imageUrl} alt="" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))
  if (loading) {
  return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>There was error: {error.message}</h1>
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button onClick={() => setSearchParams({ type: "simple" })} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
        <button onClick={() => setSearchParams({ type: "luxury" })} className={`van-type luxury ${typeFilter === 'luxury' ? "selected" : ""}`}>Luxury</button>
        <button onClick={() => setSearchParams({ type: "rugged" })} className={`van-type rugged ${typeFilter === 'rugged' ? "selected" : ""}`}>Rugged</button>
        {typeFilter && <button onClick={() => setSearchParams({})} className="van-type clear-filters">Clear</button>}

      </div>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}