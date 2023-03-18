import React from 'react';
import { Routes, Route,  } from "react-router-dom"
import { About, Home, VanDetail, Vans, } from './pages'
import {Layout }from './components'

import "./server"

export default function App() {
  return (
      <Routes element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
  )
}
