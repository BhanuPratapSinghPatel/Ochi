import React from 'react';
import About from './components/About';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import { Eyes } from './components/Eyes';
import { Features } from './components/Features';
function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white' style={{ fontFamily: 'FoundersGrotesk, Roboto, sans-serif' }}>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
    </div>
  )
}

export default App