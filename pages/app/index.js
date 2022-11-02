import Head from 'next/head'
import { useState, useEffect } from 'react';
import SideBar from '../../components/Sidebar'
import ChannelBar from '../../components/ChannelBlock'
import styles from '../../styles/Home.module.css'
import ContentContainer from '../../components/Content'
import TopNavigation from '../../components/TopNavigation'
import InfiniteScroll from "react-infinite-scroll-component";
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'


export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [Tasks, setTasks] = useState(null);
  const fetchTasks = () => {
    fetch(`/api/getTasks?email=${session?.user?.email}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => (setTasks(data?.tasks)))
  };
  let today = new Date()
  let { $ } = router.query
  if ($) {
    today = new Date($)
  }
  fetchTasks()
  // listen for scroll event and load more images if we reach the bottom of window

  return (
    <div>
      <div className='appview'>
        <TopNavigation />
        <SideBar />
        {/* <ContentContainer /> */}
      </div>
      <div className='flex flex-row ml-20' >
        <div>
          <hr />
          <InfiniteScroll
            dataLength={100}
            next={() => { return (<ChannelBar date={today} inc={11} />) }}
            hasMore={true}
            loader={<h4>View</h4>} className='flex flex-row'
          >
            <ChannelBar date={today} inc={0} task={Tasks} />
            <ChannelBar date={today} inc={1} task={Tasks} />
            <ChannelBar date={today} inc={2} task={Tasks} />
            <ChannelBar date={today} inc={3} task={Tasks} />
            <ChannelBar date={today} inc={4} task={Tasks} />
            <ChannelBar date={today} inc={5} task={Tasks} />
            <ChannelBar date={today} inc={6} task={Tasks} />
            <ChannelBar date={today} inc={7} task={Tasks} />
            <ChannelBar date={today} inc={8} task={Tasks} />
            <ChannelBar date={today} inc={9} task={Tasks} />
            <ChannelBar date={today} inc={10} task={Tasks} />
            <ChannelBar date={today} inc={11} task={Tasks} />
            <ChannelBar date={today} inc={12} task={Tasks} />
            <ChannelBar date={today} inc={13} task={Tasks} />
            <ChannelBar date={today} inc={14} task={Tasks} />
            <ChannelBar date={today} inc={15} task={Tasks} />
            <ChannelBar date={today} inc={16} task={Tasks} />
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
