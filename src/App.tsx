import React from 'react';
import Crosshair   from './components/Crosshair';
import Header      from './components/Header';
import Hero        from './components/Hero';
import About       from './components/About';
import Skills      from './components/Skills';
import Connect     from './components/Connect';
import Portfolio   from './components/Portfolio';
import Advisories  from './components/Advisories';
import Experience  from './components/Experience';
import Testimonials from './components/Testimonials';
import Blog        from './components/Blog';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

export default function App() {
  return (
    <>
      {/* Global crosshair cursor overlay — always on top */}
      <Crosshair />

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Connect />
        <Portfolio />
        <Advisories />
        <Experience />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}