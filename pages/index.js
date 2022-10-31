import React from 'react'
import NavBar from '../components/NavBar'
import HomePg from '../components/HomePg'
import { useSession } from "next-auth/react"
import Router from 'next/router';

export default function Index() {
  const { data: session, status } = useSession()
  if(session){
    console.log(session);
  }
  return (
    // <div>index</div>
    <div className="flex-col">
      <NavBar />
      <HomePg />
    </div>
  )
}
