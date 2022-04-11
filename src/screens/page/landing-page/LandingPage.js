import React from 'react'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { Stat } from './components/stat/Stat'
import { AboutUs } from './components/about/AboutUs'
import { Content } from './components/content/Content'
import { FaQ } from './components/faq/FaQ'
import { News } from './components/news/News'
import { ContactUs } from './components/contact us/ContactUs'
import { Footer } from './components/footer/Footer'


export const LandingPage = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Stat/>
        <AboutUs/>
        <Content/>
        <FaQ/>
        <News/>
        <ContactUs/>
        <Footer/>
    </>
  )
}
