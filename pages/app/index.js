import Head from 'next/head'
import SideBar from '../../components/Sidebar'
import ChannelBar from '../../components/ChannelBlock'
import styles from '../../styles/Home.module.css'
import ContentContainer from '../../components/Content'
import TopNavigation from '../../components/TopNavigation'
import InfiniteScroll from "react-infinite-scroll-component";
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  console.log("a");
  console.log(session);
  let today = new Date();

  // listen for scroll event and load more images if we reach the bottom of window

  // if(session)
  return (
    <div>
      <div className='appview'>
        <SideBar />
        {/* <ContentContainer /> */}
        <TopNavigation />
      </div>
      <div className='flex flex-row ml-20' >
        <div>
          <hr />
          <InfiniteScroll
            dataLength={100}
            next={() => {return(<ChannelBar date={today} inc={11} />)}}
            hasMore={true}
            loader={<h4>View</h4>} className='flex flex-row'
          >
            <ChannelBar date={today} inc={0} />
            <ChannelBar date={today} inc={1} />
            <ChannelBar date={today} inc={2} />
            <ChannelBar date={today} inc={3} />
            <ChannelBar date={today} inc={4} />
            <ChannelBar date={today} inc={5} />
            <ChannelBar date={today} inc={6} />
            <ChannelBar date={today} inc={7} />
            <ChannelBar date={today} inc={8} />
            <ChannelBar date={today} inc={9} />
            <ChannelBar date={today} inc={10} />
            <ChannelBar date={today} inc={11} />
            <ChannelBar date={today} inc={12} />
            <ChannelBar date={today} inc={13} />
            <ChannelBar date={today} inc={14} />
            <ChannelBar date={today} inc={15} />
            <ChannelBar date={today} inc={16} />
          </InfiniteScroll>
        </div>

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
