import React from 'react'
import NavBar from '../components/NavBar'
import HomePg from '../components/HomePg'

export default function index() {
  return (
    // <div>index</div>
    <div className="flex-col">
      <NavBar />
      <HomePg />
    </div>
  )
}
