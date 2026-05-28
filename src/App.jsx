import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WhyChooseMe from './sections/WhyChooseMe'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import Legal from './sections/Legal'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollProgress from './components/ScrollProgress'
import ParticleEffect from './components/ParticleEffect'
import WhatsApp from './components/WhatsApp'

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <ParticleEffect />
      <ScrollProgress />
      <WhatsApp />
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Legal />
      <Footer />
    </div>
  )
}
