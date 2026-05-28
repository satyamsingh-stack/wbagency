import { motion } from 'framer-motion'
import { Globe, Code, Database, Zap, Shield, Cpu, Smartphone, Palette, TrendingUp, ShoppingCart } from 'lucide-react'

export default function Services() {
  const services = [
    { title: 'Full Stack Website Development', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { title: 'Frontend Development', icon: Code, color: 'from-purple-500 to-pink-500' },
    { title: 'Backend Development', icon: Database, color: 'from-green-500 to-teal-500' },
    { title: 'Custom Web Application Development', icon: Cpu, color: 'from-orange-500 to-red-500' },
    { title: 'Monthly Website Maintenance', icon: Shield, color: 'from-indigo-500 to-blue-500' },
    { title: 'API Development & Integration', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { title: 'Website Redesign & Optimization', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { title: 'Performance & SEO Optimization', icon: TrendingUp, color: 'from-emerald-500 to-green-500' },
    { title: 'Admin Dashboard Development', icon: Smartphone, color: 'from-cyan-500 to-blue-500' },
    { title: 'E-Commerce Website Development', icon: ShoppingCart, color: 'from-amber-500 to-yellow-500' },
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your unique business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
                }}
                className="group relative overflow-hidden rounded-2xl p-6 glass magnetic-hover cursor-pointer"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 flex items-center justify-center`}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>

                  <h3 className="font-semibold text-white mb-3 text-sm group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 5, opacity: 1 }}
                    className="text-cyan-400"
                  >
                    →
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 blur-xl`}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary magnetic-hover"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
