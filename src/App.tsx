import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deepdark via-dark to-accent">
      <Header />
      <Hero />
      <About className="section-gradient-1" />
      <Skills className="section-gradient-2" />
      <Portfolio className="section-gradient-1" />
      <Experience className="section-gradient-2" />
      <Testimonials className="section-gradient-1" />
      <Blog className="section-gradient-2" />
      <Contact className="section-gradient-1" />
    </div>
  );
}

export default App;