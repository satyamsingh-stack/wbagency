import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('BplNyD2b98NgGNDzl')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_y37fk8p',
        'template_yv53b7w',
        {
          to_email: 'Satyam0478@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      )

      if (response.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: 'Nachricht erfolgreich versendet! Wir melden uns bald bei Ihnen.',
        })
        setFormData({ name: '', email: '', message: '' })
        
        // Auto-dismiss success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Nachricht konnte nicht versendet werden. Bitte versuchen Sie es später erneut.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'E-Mail', value: 'support@hornungdigital.ch', href: 'support@hornungdigital.ch' },
    { icon: Phone, label: 'Telefon', value: '+49 1575 8848625', href: 'tel:+49 1575 8848625' },
    { icon: MapPin, label: 'Adresse', value: 'Missionsstraße 24, 4055 Basel, Schweiz', href: '#' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section id="contact" className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nehmen Sie <span className="gradient-text">Kontakt auf</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Kontaktieren Sie Thomas Hornung von Dreiland Digital Services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all"
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">{info.label}</p>
                    <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass rounded-xl p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"
            >
              <p className="text-sm text-cyan-400 font-semibold mb-2">⚡ Schnelle Antwort</p>
              <p className="text-white/60 text-sm">
                Wir antworten auf Anfragen normalerweise innerhalb von 24 Stunden an Arbeitstagen.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <motion.input
                  whileFocus={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Ihr Name"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-white mb-2">E-Mail</label>
                <motion.input
                  whileFocus={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="ihre@email.com"
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-white mb-2">Nachricht</label>
                <motion.textarea
                  whileFocus={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Wird gesendet...' : 'Nachricht senden'}
                <Send size={20} className={isLoading ? '' : 'group-hover:translate-x-1 transition-transform'} />
              </motion.button>

              {/* Success Message */}
              {submitStatus?.type === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-green-500/20 border border-green-500/50"
                >
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm">{submitStatus.message}</p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus?.type === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-red-500/20 border border-red-500/50"
                >
                  <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{submitStatus.message}</p>
                </motion.div>
              )}

              {/* Privacy Notice */}
              <p className="text-xs text-white/40 text-center">
                Wir respektieren Ihre Privatsphäre. Ihre Informationen sind bei uns sicher.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
