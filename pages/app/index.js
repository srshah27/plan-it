import Head from 'next/head'
import SideBar from '../../components/SideBar'
import ChannelBar from '../../components/ChannelBlock'
import styles from '../../styles/Home.module.css'
import ContentContainer from '../../components/Content'

import { useSession } from "next-auth/react"

export default function Home() {
  
  // if(session)
  //   console.log(session);
  return (
    <div className="flex flex-row">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}
