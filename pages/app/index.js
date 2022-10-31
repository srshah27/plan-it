import Head from 'next/head'
import SideBar from '../../components/SideBar'
import ChannelBar from '../../components/ChannelBlock'
import styles from '../../styles/Home.module.css'
import ContentContainer from '../../components/Content'
import TopNavigation from '../../components/TopNavigation'

import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  console.log("a");
  console.log(session);
  // if(session)
  return (
    <div>
      <div className='appview'>
        <SideBar />
        {/* <ContentContainer /> */}
        <TopNavigation />
      </div>
      <ChannelBar />
      
    </div>
  )
}
