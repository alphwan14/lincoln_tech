'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'

const services = [
  {
    title: 'Web Development',
    description: 'We build modern, responsive websites and web applications that are fast, secure, and optimized for conversions. From simple landing pages to complex web platforms.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Loading Times',
      'Mobile-First Approach',
      'Custom Web Applications',
      'CMS Development',
    ],
    icon: '💻',
    priority: true,
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android devices. From concept to deployment.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'App Store Optimization',
      'Push Notifications',
      'UI/UX Design',
    ],
    icon: '📱',
    priority: true,
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
      'CRM Automation',
    ],
    icon: '⚡',
    priority: true,
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
      'Digital Workflows',
    ],
    icon: '🚀',
    priority: true,
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
      'Backup Solutions',
    ],
    icon: '🔧',
    priority: true,
  },
  {
    title: 'Custom Business Software',
    description: 'Tailored software solutions designed specifically for your business needs. Scalable, secure, and built to streamline your unique processes.',
    features: [
      'Custom CRM Systems',
      'Inventory Management',
      'Accounting Software',
      'Enterprise Solutions',
      'Reporting Dashboards',
      'Custom Integrations',
    ],
    icon: '🛠️',
    priority: false,
  },
  {
    title: 'E-commerce & POS Systems',
    description: 'Complete e-commerce solutions with integrated POS systems. Sell online and in-person with seamless inventory and customer management.',
    features: [
      'Online Store Development',
      'POS Integration',
      'Payment Gateway Setup',
      'Inventory Management',
      'Order Processing',
      'Multi-channel Sales',
    ],
    icon: '🛒',
    priority: false,
  },
  {
    title: 'Website Maintenance & Security',
    description: 'Keep your website secure, updated, and performing at its best. Regular maintenance, security monitoring, and performance optimization.',
    features: [
      'Security Audits',
      'Malware Removal',
      'Performance Optimization',
      'Regular Backups',
      'SSL Certificates',
      'Content Updates',
    ],
    icon: '🛡️',
    priority: false,
  },
  {
    title: 'Social Media Management',
    description: 'Comprehensive social media management services to grow your online presence, engage your audience, and drive business results.',
    features: [
      'Content Strategy',
      'Post Scheduling',
      'Audience Engagement',
      'Analytics & Reporting',
      'Ad Campaign Management',
      'Brand Management',
    ],
    icon: '📢',
    priority: false,
  },
  {
    title: 'Bulk SMS Services',
    description: 'Reach your customers directly with our reliable bulk SMS services. Perfect for promotions, alerts, notifications, and customer communication.',
    features: [
      'Mass Messaging',
      'SMS Marketing',
      'Appointment Reminders',
      'Two-way Messaging',
      'Delivery Reports',
      'API Integration',
    ],
    icon: '💬',
    priority: false,
  },
]

export default function ServicesPage() {
  const priorityServices = services.filter(service => service.priority)
  const additionalServices = services.filter(service => !service.priority)

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

      {/* Priority Services */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Core <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our flagship services that form the foundation of digital excellence and business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priorityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-dark to-secondary-dark border-2 border-primary-light/30 rounded-xl p-8 hover:border-primary-light/70 transition-all duration-300 hover:transform hover:scale-105 group relative"
              >
                <div className="absolute -top-3 -right-3 bg-primary-light text-primary-dark text-sm font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
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

      {/* Additional Services */}
      <section className="py-20 bg-secondary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Additional <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Specialized services to complement your digital strategy and enhance your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-secondary-dark to-primary-dark border border-primary-light/20 rounded-xl p-8 hover:border-primary-light/50 transition-all duration-300 hover:transform hover:scale-105 group"
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
              Let&apos;s discuss how we can solve your business problems and help you grow with the right technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Get Started Today
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