import { motion } from 'framer-motion'
import { CheckCircle, Zap, Code, Shield, Cpu, Smartphone } from 'lucide-react'

export default function WhyChooseMe() {
  const features = [
    { icon: Zap, title: 'Schnelle Lieferung', description: 'Schnelle Abwicklung ohne Qualitätseinbußen' },
    { icon: Code, title: 'Skalierbare Architektur', description: 'Gebaut für das Wachstum Ihres Unternehmens' },
    { icon: CheckCircle, title: 'Sauberer und wartbarer Code', description: 'Best Practices der Branche werden befolgt' },
    { icon: Shield, title: 'SEO-freundliche Entwicklung', description: 'Optimiert für Suchmaschinen' },
    { icon: Smartphone, title: 'Responsives Design', description: 'Perfekt auf allen Geräten' },
    { icon: Cpu, title: 'Moderner Tech-Stack', description: 'Neueste Technologien & Frameworks' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="why" className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Warum <span className="gradient-text">mich wählen</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Erfahren Sie, was uns in der Webentwicklungsbranche besonders macht
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all"
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Animated Gradient Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-cyan-500/30 opacity-50"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border border-purple-500/30 opacity-50"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-3xl flex items-center justify-center"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-2 sm:mb-4">100%</div>
                  <p className="text-sm sm:text-base text-white/60">Engagement für Exzellenz</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '24h', label: 'Antwortzeit' },
            { value: '24/7', label: 'Support' },
            { value: '100%', label: 'Zufriedenheit' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
