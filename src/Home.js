import React from 'react'
import Navbaar from './Navbaar'
import Header from './Header'
import Howitworks from './Howitworks'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Navbaar/>
      <Header />
      <Howitworks/>
      <About/>
      <Service />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;