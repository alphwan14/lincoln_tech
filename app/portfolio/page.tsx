'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Built a high-performance e-commerce platform that increased sales by 250% and reduced load times by 60%.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '🛒',
  },
  {
    title: 'Business Automation System',
    category: 'Automation',
    description: 'Automated workflow processes for a manufacturing company, saving 30 hours per week and reducing errors by 95%.',
    technologies: ['Python', 'API Integration', 'Cloud Services'],
    image: '⚙️',
  },
  {
    title: 'Digital Transformation',
    category: 'Digital Transformation',
    description: 'Migrated legacy systems to modern cloud infrastructure, improving performance and reducing costs by 40%.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Microservices'],
    image: '☁️',
  },
  {
    title: 'Mobile App',
    category: 'Mobile Development',
    description: 'Developed a cross-platform mobile app that reached 50K+ downloads in the first month.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    image: '📱',
  },
  {
    title: 'SaaS Platform',
    category: 'Web Development',
    description: 'Created a scalable SaaS platform serving 10,000+ active users with 99.9% uptime.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis'],
    image: '💼',
  },
  {
    title: 'Analytics Dashboard',
    category: 'Data Solutions',
    description: 'Built a real-time analytics dashboard that provides actionable insights for business decisions.',
    technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
    image: '📊',
  },
]

const categories = ['All', 'Web Development', 'Automation', 'Digital Transformation', 'Mobile Development', 'Data Solutions']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300">
              See how we've helped businesses solve problems and achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-primary-dark border-b border-primary-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark'
                    : 'bg-primary-dark/50 border border-primary-light/20 text-gray-300 hover:border-primary-light/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {project.image}
                </div>
                <div className="text-sm text-primary-light mb-2 font-medium">
                  {project.category}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-dark/50 border border-primary-light/20 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help solve your business problems and achieve similar results.
            </p>
            <Button href="/contact" variant="primary">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

