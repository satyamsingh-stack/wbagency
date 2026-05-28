import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'Trend Zomedia',
      category: 'Business',
      categoryColor: 'cyan',
      description: 'Modern digital agency website with animated elements',
      tech: ['React', 'GSAP', 'TailwindCSS', 'Framer Motion'],
      gradient: 'from-cyan-500 to-blue-600',
      image: '/images/trend-zomedia.png',
      link: 'https://trendzomedia.com/',
    },
    {
      title: 'Idea Institute',
      category: 'Research',
      categoryColor: 'teal',
      description: 'Idea Institute is an independent legal research institute',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      gradient: 'from-teal-500 to-green-500',
      image: '/images/secondPage.webp',
      link: 'https://ideainstitute.ch/',
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
                <div className="absolute inset-0 bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>

                {/* Content */}
<div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
                   <div className="relative z-10">
                     <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 w-fit ${
                      project.categoryColor === 'cyan' 
                        ? 'text-black bg-cyan-400' 
                        : 'text-black bg-teal-400'
                    }`}>
                      {project.category}
                    </span>
                     <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                    <p className="text-white text-sm mb-4 font-medium drop-shadow">{project.description}</p>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full transition-all ${
                        project.categoryColor === 'cyan'
                          ? 'bg-white/30 hover:bg-cyan-500/50'
                          : 'bg-white/30 hover:bg-teal-500/50'
                      }`}
                    >
                      <ExternalLink size={20} className="text-white" />
                    </motion.a>
                   </div>
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