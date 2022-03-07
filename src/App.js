import React from 'react'
import { AboutUs } from './components/about/AboutUs'
import { ContactUs } from './components/contact us/ContactUs'
import { Content } from './components/content/Content'
import { FaQ } from './components/faq/FaQ'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { News } from './components/news/News'
import { Stat } from './components/stat/Stat'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();


export const App = () => {
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
