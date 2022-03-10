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

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


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
