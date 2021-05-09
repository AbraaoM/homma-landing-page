import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Hero from '../components/hero'
import Feature from '../components/feature'
import HIW from '../components/hiw'
import Signup from '../components/signup'
import Footer from '../components/footer'

import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Feature/>
      <HIW/>
      <Signup/>
      <Footer/>
    </div>
    
  )
}
