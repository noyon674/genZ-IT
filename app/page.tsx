"use client";
import React, { useEffect } from "react";
import Header from "./_components/header/Header";
import Home from "./_components/home/Home";
import About from "./_components/about/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./_components/services/Services";
import Portfolio from "./_components/portfolio/Portfolio";
import Banner from "./_components/banner/Banner";
import Skills from "./_components/skills/Skills";
import Blogs from "./_components/blogs/Blogs";
import Contact from "./_components/contact/Contact";
import Footer from "./_components/footer/Footer";

function Page() {
    useEffect(() => {
      function runAnimation(){
        AOS.init({ duration: 1000 });
      }
      runAnimation()
    }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
     {/*  <Services />
      <Portfolio />
      <Banner />
      <Blogs />
      <Skills />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default Page;
