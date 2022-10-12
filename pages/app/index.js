import Head from 'next/head'
import SideBar from '../../components/SideBar'
import ChannelBar from '../../components/ChannelBlock'
import styles from '../../styles/Home.module.css'
import ContentContainer from '../../components/Content'
import TopNavigation from '../../components/TopNavigation'

import { useSession } from "next-auth/react"

export default function Home() {

  // if(session)
  //   console.log(session);
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
