import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Website',
      price: '999',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 Pages',
        'Mobile Responsive',
        'Basic SEO',
        'Contact Form',
        'SSL Certificate',
        '1 Month Support',
      ],
      highlighted: false,
    },
    {
      name: 'Custom Web App',
      price: '2,999',
      description: 'Full-featured web application',
      features: [
        'Unlimited Pages',
        'Advanced Features',
        'Database Integration',
        'User Authentication',
        'API Development',
        'Admin Dashboard',
        'Performance Optimization',
        '3 Months Support',
      ],
      highlighted: true,
    },
    {
      name: 'Monthly Maintenance',
      price: '499',
      description: 'Ongoing support & updates',
      features: [
        'Weekly Updates',
        'Bug Fixes',
        'Security Patches',
        'Performance Monitoring',
        'Backup Management',
        'Priority Support',
        '24/7 Monitoring',
        'Scalability Support',
      ],
      highlighted: false,
    },
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
    <section id="pricing" className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include dedicated support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 glass-dark border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20'
                  : 'glass'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular ⭐
                  </div>
                </motion.div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-6 text-sm">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                  <span className="text-white/60 ml-2">/month</span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mb-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  Get Started
                </motion.button>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-wide">
                    What's included:
                  </p>
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check size={20} className="text-cyan-500 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-4">Custom Requirements?</h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            We can tailor any package to meet your specific needs. Let's discuss your project requirements and create a custom solution.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Contact Us for Custom Quote
          </motion.button>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {[
            {
              q: 'What payment methods do you accept?',
              a: 'We accept all major credit cards, bank transfers, and PayPal.',
            },
            {
              q: 'Do you offer refunds?',
              a: 'We offer a 14-day satisfaction guarantee if you\'re not happy with the work.',
            },
            {
              q: 'Can I upgrade my plan?',
              a: 'Yes, you can upgrade or downgrade your plan at any time with prorated adjustments.',
            },
            {
              q: 'Is there a contract?',
              a: 'No long-term contracts required. Cancel anytime with 30 days notice.',
            },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass rounded-lg p-6"
            >
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-white/60 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
