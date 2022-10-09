import Head from 'next/head'
import SideBar from '../components/sidebar'
import ChannelBar from '../components/ChannelBlock'
import styles from '../styles/Home.module.css'
import ContentContainer from '../components/Content'

export default function Home() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}
