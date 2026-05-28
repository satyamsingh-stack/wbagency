import { motion } from 'framer-motion'
import { ArrowRight, Code2, Zap, Layers } from 'lucide-react'

export default function Hero() {
  const floatingIcons = [
    { Icon: Code2, x: -100, y: 50, delay: 0 },
    { Icon: Zap, x: 100, y: -100, delay: 0.2 },
    { Icon: Layers, x: 50, y: 100, delay: 0.4 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, idx) => (
        <motion.div
          key={idx}
          className="absolute text-cyan-400/20"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: [0, x, 0],
            y: [0, y, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 6,
            delay: delay,
            repeat: Infinity,
          }}
        >
          <Icon size={60} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Dreiland Digital{' '}
          <span className="gradient-text-alt">Services</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Modern websites and digital solutions for local businesses. I help salons, beauty studios and local businesses strengthen their digital presence through modern websites and practical digital solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ }}
            whileTap={{ }}
            className="btn-primary-no-hover group flex items-center gap-2"
          >
            Hire Me
            <ArrowRight size={20} />
          </motion.a>
          <motion.button
            whileHover={{ }}
            whileTap={{ }}
            className="btn-secondary-no-hover"
          >
            View Packages
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
