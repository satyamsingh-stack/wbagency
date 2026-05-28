import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechVenture',
      company: 'TechVenture',
      rating: 5,
      content: 'WebAgency transformed our outdated website into a modern masterpiece. The attention to detail and technical expertise exceeded our expectations.',
      avatar: 'from-blue-500 to-cyan-500',
      project: 'SaaS Platform',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Founder, DataSync',
      company: 'DataSync',
      rating: 5,
      content: 'From concept to launch, they delivered exceptional quality. Our conversion rates increased by 150% after the redesign.',
      avatar: 'from-purple-500 to-pink-500',
      project: 'E-commerce Platform',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandFlow',
      company: 'BrandFlow',
      rating: 5,
      content: 'The team understood our vision perfectly. The new website elevated our brand presence and user engagement dramatically.',
      avatar: 'from-green-500 to-teal-500',
      project: 'Brand Redesign',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'CTO, CloudWorks',
      company: 'CloudWorks',
      rating: 5,
      content: 'Outstanding development work. They built a robust platform that handles our scale flawlessly with 99.9% uptime.',
      avatar: 'from-orange-500 to-red-500',
      project: 'Cloud Platform',
    },
    {
      id: 5,
      name: 'Jessica Lee',
      role: 'Product Manager, E-Shop Co',
      company: 'E-Shop Co',
      rating: 5,
      content: 'Incredible speed and performance improvements. Our site loads 5x faster and customers love the seamless experience.',
      avatar: 'from-indigo-500 to-blue-500',
      project: 'Performance Optimization',
    },
    {
      id: 6,
      name: 'Robert Smith',
      role: 'Director, API Solutions',
      company: 'TechFlow',
      rating: 5,
      content: 'Professional, responsive, and technically brilliant. They integrated complex APIs with ease and precision.',
      avatar: 'from-amber-500 to-yellow-500',
      project: 'API Integration',
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
    <section id="testimonials" className="relative section-spacing overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="glass px-4 py-2 rounded-full inline-block mb-4">
            <span className="text-cyan-400 text-sm font-semibold">⭐ CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Real stories from businesses we've helped transform. Their success is our greatest achievement.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden glass-dark border border-white/10 transition-all duration-300 hover:border-cyan-500/50 p-8"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
<div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-white/90 mb-6 leading-relaxed line-clamp-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar} flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="glass px-3 py-1 rounded-full text-xs text-cyan-400">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Join Our Success Stories?</h3>
            <p className="text-white/70 mb-6 max-w-2xl">
              Let's discuss how we can transform your business with exceptional web development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary magnetic-hover"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}