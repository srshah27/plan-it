import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <>
    <Head>
      <title> App | Plan IT!</title>
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}

export default MyApp
