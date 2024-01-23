import React, { useState } from 'react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';
import AddTask from '../components/AddTask';

export default function Tasks() {
  
  const [addTaskVisible, setAddTaskVisible] = useState(false);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Plan-it</title>
        <meta name='description' content='Assistant of your own!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <button onClick={() => { setAddTaskVisible(true) }}>Create Test</button>
        <AddTask modalIsOpen={addTaskVisible} toggleModal={ () => { setAddTaskVisible(false) } } ></AddTask>
      </main>

    </div>v>
  )
}
