import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Fetured from './Components/Fetured'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full text-white bg-zinc-900'>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Eyes/>
      <Fetured/>
      <Cards/>
      <Footer/>
    </div>
  )
}
