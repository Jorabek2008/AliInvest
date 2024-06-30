import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import absoluteImg from "./assets/absolute1.png"
import Team from './components/Team'
import Work from './components/Work'
import Platform from './components/Platform'
import Startup from './components/Startup'
import Investor from './components/Investor'
import Comments from './components/Comments'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative'>
    <img src={absoluteImg} className='absolute md:block hidden top-[159px] right-0' alt="absolute img" />
      <Navbar />
      <Main />
      <Team />
      <Work />
      <Platform />
      <Startup />
      <Investor />
      <Comments />
      <Content />
      <Footer />
    </div>
  )
}

export default App