import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Product', links: ['Services', 'Pricing', 'Portfolio'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers'] },
    { title: 'Resources', links: ['Documentation', 'API Docs', 'Support'] },
  ]

  return (
    <footer className="relative border-t border-white/10 glass py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
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
                WA
              </div>
              <span className="font-bold text-lg gradient-text">WebAgency</span>
            </motion.div>
            <p className="text-white/60 text-sm">
              Building digital futures with passion, innovation, and excellence.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx + 1) * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-white/60 text-sm">
            © {currentYear} WebAgency. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ color: '#0ea5e9' }}
                className="text-white/60 hover:text-cyan-400 transition-colors text-sm"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Made with Love */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1 text-white/60 text-sm"
          >
            Made with
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500 fill-red-500" />
            </motion.div>
            by WebAgency
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
