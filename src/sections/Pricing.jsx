import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-scroll'

export default function Pricing() {
    const plans = [
    {
      name: 'Starter-Website',
      price: '€500 – €800',
      description: 'Perfekt für kleine Unternehmen, um online zu starten',
      features: [
        'Bis zu 5 Seiten',
        'Mobiloptimiertes Design',
        'WhatsApp-Integration',
        'Kontaktformular',
        'Grundlegende SEO-Einrichtung',
      ],
      highlighted: false,
      period: 'one-time',
    },
    {
      name: 'Business-Website',
      price: '€800 – €1200',
      description: 'Vollständige Lösung für wachsende Unternehmen',
      features: [
        'Integration eines Buchungssystems',
        'SEO-Optimierung',
        'Einrichtung des Google-Unternehmensprofils',
        'Galerie- / Portfolio-Bereich',
        'Mobiloptimiertes Design',
      ],
      highlighted: true,
      period: 'one-time',
    },
    {
      name: 'Monatliche Wartungspakete',
      price: 'Ab €49',
      description: 'Kontinuierliche Unterstützung und Updates',
      features: [
        'Website-Aktualisierungen',
        'Technische Wartung',
        'Kleine Inhaltsänderungen',
        'Sicherheit & Support',
      ],
      highlighted: false,
      period: 'monthly',
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
            Transparente <span className="gradient-text">Preise</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Wählen Sie das perfekte Paket für Ihre Anforderungen
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
                    Beliebteste Lösung ⚠️
                  </div>
                </motion.div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 mb-6 text-sm">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-white/60 ml-2">
                    {plan.period === 'monthly' ? '/month' : ''}
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`w-full mb-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center inline-block cursor-pointer ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  Jetzt starten
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-white/60 text-sm font-semibold uppercase tracking-wide">
                    Inklusive:
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
          <h3 className="text-xl font-bold text-white mb-4">Benutzerdefinierte Anforderungen?</h3>
<p className="text-white/60 mb-6 max-w-2xl mx-auto">
             Wir können jedes Paket anpassen, um Ihre spezifischen Anforderungen zu erfüllen. Lassen Sie uns Ihre Projektanforderungen besprechen und eine maßgeschneiderte Lösung entwickeln.
           </p>
           <Link
             to="contact"
             smooth={true}
             duration={500}
             className="btn-secondary inline-block cursor-pointer"
           >
             Kontaktieren Sie uns für ein individuelles Angebot
           </Link>
         </motion.div>
      </div>
    </section>
  )
}
