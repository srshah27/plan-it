import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import HomePg from '../components/HomePg'

export default function index() {
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
  return (
    // <div>index</div>
    <div className="flex-col">
      <NavBar />
      <HomePg />
    </div>
  )
}
