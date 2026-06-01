import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WhyChooseMe from './sections/WhyChooseMe'
import Portfolio from './sections/Portfolio'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollProgress from './components/ScrollProgress'
import ParticleEffect from './components/ParticleEffect'
import WhatsApp from './components/WhatsApp'
import CursorFollower from './components/CursorFollower'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'

export default function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'datenschutz' || hash === 'impressum') {
        setPage(hash)
      } else {
        setPage('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const goHome = () => {
    window.location.hash = '#'
    setPage('home')
  }

  if (page === 'datenschutz') {
    return <Datenschutz onBack={goHome} />
  }

  if (page === 'impressum') {
    return <Impressum onBack={goHome} />
  }

  return (
    <div className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <ParticleEffect />
      <ScrollProgress />
      <CursorFollower />
      <WhatsApp />
      <Navigation />
      <Hero />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
