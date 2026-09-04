import React from 'react'
import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Metrics from './components/statistics'
import Projects from './components/projects'
import Experiences from './components/experiences'
import About from './components/about'

function App() {
  return (
    <div className='min-h-screen'>
      <Navbar />

      <main>
        <Hero />
        <hr className='w-10/12 mx-auto text-slate-300' />
        <Metrics />
        <hr className='w-10/12 mx-auto text-slate-300' />
        <Projects />
        <hr className='w-10/12 mx-auto text-slate-300' />
        <Experiences />
        <hr className='w-10/12 mx-auto text-slate-300' />
        <About />
      </main>
    </div>
  );
}

export default App;
