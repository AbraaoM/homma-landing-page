import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Hero from '../components/hero'
import Feature from '../components/feature'
import HIW from '../components/hiw'
import Signup from '../components/signup'
import Footer from '../components/footer'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Homma.tech</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="We help you get your idea out of the paper, 
          be it an indicator, robot, script, graphic panel or any other useful tool to 
          help you in the day-to-day of the financial market using Metatrader. 
          We use MQL4 and MQL5."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

      </Head>
      <Header/>
      <Hero/>
      <Feature/>
      {/* <HIW/> */}
      <Signup/>
      <Footer/>
    </main>
  )
}
