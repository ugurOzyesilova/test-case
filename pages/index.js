import Head from 'next/head'
import Image from 'next/image'
import Intro from "./intro.js" 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test Case of Mallconomy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro/>
        
    </div>
  )
}
