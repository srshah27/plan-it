import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import HomePg from '../components/HomePg'
import Head from 'next/head'
import { useSession } from "next-auth/react"
import Router from 'next/router';
import toast, { Toaster } from 'react-hot-toast';


const notify = () => toast.success('Welcome to PlanIT!');

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
  
  const check = () => {const notify = new Notification("Planned IT!")}
  const { data: session, status } = useSession()
  if(session){
    console.log(session);
  }
  return (
    <>
    <Head>
          <title>Home | Plan IT!</title>
    </Head>
    <div className="flex-col">
      <NavBar />
      <HomePg />
      <Toaster />
    <button onClick={() =>{notify(); check()}} > Notify</button>
    </div>
    </>
  )
}
