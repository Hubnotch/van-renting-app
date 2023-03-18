import React from 'react';
import { Routes, Route, } from "react-router-dom"
import { About, Home, VanDetail, Vans, Dashboard, Income, Reviews } from './pages'
import { Layout,HostLayout } from './components'

import "./server"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  )
}
