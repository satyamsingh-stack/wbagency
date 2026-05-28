import { motion } from 'framer-motion'

export default function TechStack() {
  const technologies = [
    { name: 'React', color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', color: 'from-white to-gray-300' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
    { name: 'Express.js', color: 'from-yellow-400 to-orange-400' },
    { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
    { name: 'PostgreSQL', color: 'from-blue-600 to-blue-400' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-400' },
    { name: 'TypeScript', color: 'from-blue-500 to-purple-500' },
    { name: 'Firebase', color: 'from-yellow-500 to-orange-500' },
    { name: 'AWS', color: 'from-orange-500 to-red-500' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
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
    <section id="tech" className="relative section-spacing overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Cutting-edge technologies for powerful web solutions
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
              }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-6 h-32 flex items-center justify-center cursor-pointer overflow-hidden">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
                />

                {/* Content */}
                <motion.div
                  className="relative z-10 text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}>
                    {tech.name}
                  </p>
                </motion.div>

                {/* Glowing Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden glass rounded-2xl p-6"
        >
          <div className="marquee">
            <motion.div
              className="marquee-content"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...technologies, ...technologies].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-4 py-2 bg-white/5 rounded-lg text-white/70 font-medium"
                >
                  {tech.name}
                </div>
              ))}
            </motion.div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent" />
        </motion.div>

        {/* Skills Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { category: 'Frontend', skills: 'React, Next.js, Tailwind CSS, TypeScript' },
            { category: 'Backend', skills: 'Node.js, Express, MongoDB, PostgreSQL' },
            { category: 'DevOps & Cloud', skills: 'AWS, Firebase, Docker, CI/CD' },
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-bold text-cyan-400 mb-3">{skill.category}</h3>
              <p className="text-white/60 text-sm">{skill.skills}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
