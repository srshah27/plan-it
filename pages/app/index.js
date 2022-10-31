import Head from 'next/head'
import SideBar from '../../components/Sidebar'
import ChannelBar from '../../components/ChannelBlock'
import styles from '../../styles/Home.module.css'
import ContentContainer from '../../components/Content'
import TopNavigation from '../../components/TopNavigation'

import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  console.log("a");
  console.log(session);
  let today = new Date();
  // if(session)
  return (
    <div>
      <div className='appview'>
        <SideBar />
        {/* <ContentContainer /> */}
        <TopNavigation />
      </div>
      <div className='flex flex-row ml-20' >
        <ChannelBar date={today} inc={0} />
        <ChannelBar date={today} inc={1} />
        <ChannelBar date={today} inc={2} />
        <ChannelBar date={today} inc={3} />
        <ChannelBar date={today} inc={4} />
      </div>
      {/* {
        window.addEventListener('scroll', () => {
          console.log("scrolled", window.scrollY) //scrolled from top
          console.log(window.innerHeight) //visible part of screen
          if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            loadImages();
          }
        })
      } */}
    </div>
  )
}
