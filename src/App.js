import React from 'react'
import { AboutUs } from './components/about/AboutUs'
import { Content } from './components/content/Content'
import { FaQ } from './components/faq/FaQ'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { New } from './components/news/New'
import { Stat } from './components/stat/Stat'

export const App = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Stat/>
        <AboutUs/>
        <Content/>
        <FaQ/>
        <New/>

    </>



    
  )
}
