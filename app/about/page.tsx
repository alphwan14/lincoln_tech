'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and best practices.',
    icon: '💡',
  },
  {
    title: 'Integrity',
    description: 'Honest communication and transparent processes in everything we do.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in every project, no matter the size.',
    icon: '⭐',
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our success by yours.',
    icon: '🎯',
  },
]

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
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
              About <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Lincoln Tech</span>
            </h1>
            <p className="text-xl text-gray-300">
              We're a team of problem-solvers dedicated to helping businesses thrive through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Story</span>
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                Lincoln Tech was founded with a simple mission: to solve real business problems with technology. 
                We noticed that many companies were struggling with outdated systems, inefficient processes, and 
                a lack of digital presence.
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                Instead of just offering services, we focus on understanding your challenges and delivering 
                solutions that make a real difference. We believe technology should work for you, not against you.
              </p>
              <p className="text-gray-300 text-lg">
                Today, we've helped hundreds of businesses transform their operations, increase efficiency, 
                and achieve their growth goals. We're not just developers—we're your partners in success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary-light">Our Mission</h3>
              <p className="text-gray-300 text-lg mb-6">
                To empower businesses with technology solutions that solve real problems, drive growth, 
                and create lasting value.
              </p>
              <h3 className="text-2xl font-semibold mb-6 text-primary-light">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To be the trusted technology partner that businesses turn to when they need solutions 
                that actually work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6 text-center hover:border-primary-light/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary-light">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
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
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to solve your business problems? Get in touch and let's discuss how we can help.
            </p>
            <Button href="/contact" variant="primary">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

