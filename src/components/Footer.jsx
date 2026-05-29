import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Schnelllinks', links: ['Leistungen', 'Pakete', 'Portfolio', 'Kontakt'] },
  ]

  return (
    <footer className="relative border-t border-white/10 glass py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                DD
              </div>
              <span className="font-bold text-lg gradient-text">Dreiland Digital Services</span>
            </motion.div>
            <p className="text-white/60 text-sm">
              Aufbau außerordentlicher digitaler Erlebnisse mit modernen Web-Technologien.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              {footerLinks[0].links.map((link, i) => {
                const linkId = link === 'Pakete' ? 'pricing' : link.toLowerCase()
                return (
                  <li key={i}>
                    <motion.a
                      href={`#${linkId}`}
                      whileHover={{ x: 5 }}
                      className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center items-center"
        >
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} Dreiland Digital Services. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
