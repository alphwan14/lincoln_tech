'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'

const services = [
  {
    title: 'Web Development',
    description: 'We build modern, responsive websites and web applications that are fast, secure, and optimized for conversions. From simple landing pages to complex e-commerce platforms.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading Times',
      'Mobile-First Approach',
      'E-commerce Solutions',
    ],
    icon: '💻',
  },
  {
    title: 'Business Automation',
    description: 'Streamline your operations with intelligent automation solutions. Reduce manual work, eliminate errors, and free up your team to focus on what matters.',
    features: [
      'Workflow Automation',
      'Process Optimization',
      'Integration Solutions',
      'Custom Scripts',
      'API Development',
    ],
    icon: '⚡',
  },
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions. Modernize legacy systems, migrate to the cloud, and embrace new technologies.',
    features: [
      'Cloud Migration',
      'Legacy System Modernization',
      'Digital Strategy',
      'Technology Consulting',
      'System Integration',
    ],
    icon: '🚀',
  },
  {
    title: 'Tech Consulting',
    description: 'Get expert guidance to make the right technology decisions. We help you choose the best tools, platforms, and strategies for your business.',
    features: [
      'Technology Assessment',
      'Architecture Planning',
      'Vendor Selection',
      'Best Practices',
      'Training & Support',
    ],
    icon: '🎯',
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'App Store Optimization',
      'Push Notifications',
    ],
    icon: '📱',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your systems running smoothly. We monitor, update, and optimize your solutions continuously.',
    features: [
      '24/7 Monitoring',
      'Regular Updates',
      'Security Patches',
      'Performance Optimization',
      'Technical Support',
    ],
    icon: '🔧',
  },
]

export default function ServicesPage() {
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
              Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive technology solutions designed to solve your business problems and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-8 hover:border-primary-light/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4 text-white">{service.title}</h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <span className="text-primary-light mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can solve your business problems and help you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Get Help Today
              </Button>
              <Button href="/about" variant="outline">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

