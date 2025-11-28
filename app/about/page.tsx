'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve with the latest technologies and best practices in software development.',
    icon: '💡',
  },
  {
    title: 'Integrity',
    description: 'Honest communication and transparent processes in everything we do, building trust globally.',
    icon: '🤝',
  },
  {
    title: 'Excellence',
    description: 'We strive for perfection in every project, delivering world-class software solutions.',
    icon: '⭐',
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our success by helping businesses grow through technology.',
    icon: '🎯',
  },
]

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '200+', label: 'Happy Clients Worldwide' },
  { number: '10+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction Rate' },
]

const teamExpertise = [
  {
    area: 'Web Development',
    description: 'Expert web designers and developers creating responsive, high-converting websites for global businesses.',
  },
  {
    area: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android, serving diverse markets worldwide.',
  },
  {
    area: 'Business Automation',
    description: 'Custom automation solutions that streamline operations and boost efficiency for businesses.',
  },
  {
    area: 'Digital Transformation',
    description: 'Helping businesses transition to digital-first operations with cutting-edge technology solutions.',
  },
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Lincoln Tech</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Global Software Solutions with Local Excellence
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              For over a decade, Lincoln Tech has been delivering cutting-edge software solutions from our base in Kenya 
              to clients worldwide. We combine global expertise with deep local understanding.
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
                Our Story: <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Bridging Technology Gaps Worldwide</span>
              </h2>
              <p className="text-gray-300 mb-4 text-lg">
                <strong>Lincoln Tech</strong> was founded with a clear vision: to provide world-class technology solutions 
                that are accessible, effective, and tailored to diverse business needs across the globe.
              </p>
              <p className="text-gray-300 mb-4 text-lg">
                Operating from our strategic location in Kenya, we bring a unique perspective to software development, 
                combining global best practices with cost-effective solutions that deliver exceptional value to our 
                international client base.
              </p>
              <p className="text-gray-300 text-lg">
                Today, we're proud to serve clients across multiple continents, having helped hundreds of businesses 
                transform their operations and achieve remarkable growth. We're more than just developers—we're your 
                strategic partners in digital success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-light">Our Mission</h3>
                <p className="text-gray-300 text-lg">
                  To empower businesses worldwide with innovative technology solutions that solve real problems, 
                  drive sustainable growth, and create lasting competitive advantage.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary-light">Global Reach, Local Excellence</h3>
                <ul className="text-gray-300 text-lg space-y-2">
                  <li>✓ Serving clients across Africa, Europe & Americas</li>
                  <li>✓ Proven track record with 500+ successful projects</li>
                  <li>✓ Expertise in latest web and mobile technologies</li>
                  <li>✓ 24/7 dedicated support for global timezones</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Trusted by <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Businesses Worldwide</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Delivering exceptional results for global clients with Kenyan innovation and excellence.
            </p>
          </motion.div>
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

      {/* Expertise Section */}
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
              Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Global Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive software development services for businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamExpertise.map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-light">{expertise.area}</h3>
                <p className="text-gray-300">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide our work with clients worldwide
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
                className="bg-gradient-to-br from-secondary-dark to-primary-dark border border-primary-light/20 rounded-xl p-6 text-center hover:border-primary-light/50 transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful businesses worldwide who trust Lincoln Tech for their software development, 
              web design, and digital transformation needs. Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Get Free Consultation
              </Button>
              <Button href="/services" variant="outline">
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}