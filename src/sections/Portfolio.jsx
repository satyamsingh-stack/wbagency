import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'Trend Zomedia',
      category: 'Business',
      description: 'Modern digital agency website with animated elements',
      tech: ['React', 'GSAP', 'TailwindCSS', 'Framer Motion'],
      gradient: 'from-cyan-500 to-blue-600',
      image: '/images/trend-zomedia.png',
    },
    {
      title: 'Idea Institute',
      category: 'Education',
      description: 'Professional education platform with course management',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      gradient: 'from-teal-500 to-green-500',
      image: '/images/idea-institute.png',
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
    <section id="portfolio" className="relative section-spacing">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Showcase of our recent work across different industries and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative h-80 rounded-2xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-500/20 rounded-full mb-3 w-fit">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 hover:bg-cyan-500/40 transition-all"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </motion.a>
                </div>

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}