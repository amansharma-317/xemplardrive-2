import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ScreenshotSection from './components/ScreenshotSection';
import Cta from './components/Cta';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rich-black">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <ScreenshotSection />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;