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
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-8"
        >
          <div className="glass px-6 py-2 rounded-full">
            <span className="text-sm text-cyan-400 font-medium">
              🚀 Award-Winning Web Development Agency
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Building Digital{' '}
          <span className="gradient-text-alt">Futures</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          We create stunning, high-performance web experiences that drive growth and engagement. From concept to deployment, we're your partner in digital excellence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary magnetic-hover group flex items-center gap-2"
          >
            Hire Me
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary magnetic-hover"
          >
            View Services
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '40+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-4"
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
