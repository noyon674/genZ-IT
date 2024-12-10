'use client'
import React, { useEffect } from 'react'
import Header from './_components/header/Header'
import Home from './_components/home/Home'
import About from './_components/about/About'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './_components/services/Services'

function page() {
  useEffect(()=>{
    AOS.init({duration:1000});
  }, [])
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  )
}

export default page