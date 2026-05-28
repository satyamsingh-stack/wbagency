import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      // role: 'CEO, TechVenture',
      // company: 'TechVenture',
      rating: 5,
      content: 'WebAgency transformed our outdated website into a modern masterpiece. The attention to detail and technical expertise exceeded our expectations.',
      avatar: 'from-blue-500 to-cyan-500',
      project: 'SaaS Platform',
    },
    {
      id: 2,
      name: 'Michael Chen',
      // role: 'Founder, DataSync',
      // company: 'DataSync',
      rating: 5,
      content: 'From concept to launch, they delivered exceptional quality. Our conversion rates increased by 150% after the redesign.',
      avatar: 'from-purple-500 to-pink-500',
      project: 'E-commerce Platform',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      // role: 'Marketing Director, BrandFlow',
      // company: 'BrandFlow',
      rating: 5,
      content: 'The team understood our vision perfectly. The new website elevated our brand presence and user engagement dramatically.',
      avatar: 'from-green-500 to-teal-500',
      project: 'Brand Redesign',
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      x: -100,
      opacity: 0,
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

        {/* Carousel */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[380px] flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="relative group cursor-pointer rounded-2xl overflow-hidden glass-dark border border-white/10 transition-all duration-300 hover:border-cyan-500/50 p-8 h-full flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-white/90 mb-6 leading-relaxed text-lg">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[currentIndex].avatar} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
                      <p className="text-white/60 text-sm">{testimonials[currentIndex].role}</p>
                      <span className="glass px-3 py-1 rounded-full text-xs text-cyan-400 inline-block mt-2">
                        {testimonials[currentIndex].project}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="p-3 rounded-full glass border border-white/20 hover:border-cyan-500/50 transition-all duration-300 text-white hover:text-cyan-400"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-cyan-500 w-8' : 'bg-white/30 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="p-3 rounded-full glass border border-white/20 hover:border-cyan-500/50 transition-all duration-300 text-white hover:text-cyan-400"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

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
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}