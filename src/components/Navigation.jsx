import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Startseite', href: '#' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Pakete', href: '#pricing' },
    { name: 'Kontakt', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
              DD
            </div>
            <span className="font-bold text-xl hidden sm:block gradient-text">Dreiland Digital Services</span>
          </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white/70 hover:text-white transition-colors text-sm font-medium inline-block"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Jetzt starten
              </motion.a>
            </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

             {/* Mobile Menu */}
             {isOpen && (
               <motion.div
                 initial={{ opacity: 0, height: 0 }}
                 animate={{ opacity: 1, height: 'auto' }}
                 exit={{ opacity: 0, height: 0 }}
                 className="md:hidden pb-4 border-t border-white/10"
               >
                 {navItems.map((item, index) => (
                   <motion.a
                     key={index}
                     href={item.href}
                     onClick={() => setIsOpen(false)}
                     initial={{ x: -20 }}
                     animate={{ x: 0 }}
                     transition={{ delay: index * 0.1 }}
                     className="block py-2 text-white/70 hover:text-white transition-colors"
                   >
                     {item.name}
                   </motion.a>
                 ))}
                 <motion.a
                   href="#contact"
                   whileHover={{ scale: 1.05 }}
                   className="btn-primary w-full mt-4"
                 >
                   Jetzt starten
                 </motion.a>
               </motion.div>
             )}
      </div>
    </motion.nav>
  )
}
