import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsApp() {
  const phoneNumber = '919137700478'
  const message = 'Hello! I would like to know more about your services.'

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppClick}
        className="relative group"
      >
        {/* Main Button */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-all duration-300">
          <MessageCircle size={28} className="text-white" />
        </div>

        {/* Notification Badge */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-lg"
        >
          1
        </motion.div>

        {/* Hover tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute bottom-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none border border-white/10"
        >
          Chat with us!
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          animate={{ boxShadow: ['0 0 20px rgba(34, 197, 94, 0.3)', '0 0 40px rgba(34, 197, 94, 0.5)', '0 0 20px rgba(34, 197, 94, 0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full pointer-events-none"
        />
      </motion.button>
    </motion.div>
  )
}
