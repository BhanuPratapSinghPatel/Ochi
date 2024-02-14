import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import About from './components/About';
function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white' style={{ fontFamily: 'FoundersGrotesk, Roboto, sans-serif' }}>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
    </div>
  )
}

export default App