import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import HomePg from '../components/HomePg'
import { useSession } from "next-auth/react"
import Router from 'next/router';

export default function Index() {
  useEffect(() => {
    if(Notification.permission === 'granted'){
        
    }
    else{
      Notification.requestPermission().then((response) => {
        if(response === 'granted'){
          const notify = new Notification("Planned IT!")
        }
        else{
          console.log("Notification permission denied")
        }
      })
    }
  }, [])
  
  const notify = () => {const notify = new Notification("Planned IT!")}
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
