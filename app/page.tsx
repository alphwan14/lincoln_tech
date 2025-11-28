'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/Button'

const dynamicWords = ['Build', 'Fix', 'Automate', 'Improve', 'Transform']

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % dynamicWords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-secondary-dark opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,224,255,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
  transition={{ duration: 0.8 }}
  className="text-center max-w-4xl mx-auto"
>
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
    <span className="block">We </span>
    <span className="inline-block min-w-[200px] text-left">
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent"
      >
        {dynamicWords[currentWord]}
      </motion.span>
    </span>
    <span className="block">Digital Solutions</span>
  </h1>
  <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
    Lincoln Tech is your trusted software development partner. Based in Kenya with global reach, 
    we build custom web solutions, mobile apps, and automation systems that drive business growth worldwide.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link
      href="/contact"
      className="px-8 py-4 bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-light/50 transition-all duration-300 transform hover:scale-105 text-lg"
    >
      Get Free Consultation
    </Link>
    <Link
      href="/services"
      className="px-8 py-4 border-2 border-primary-light text-primary-light font-semibold rounded-lg hover:bg-primary-light hover:text-primary-dark transition-all duration-300 text-lg"
    >
      Our Services
    </Link>
  </div>
</motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary-light rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-primary-light rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Problems We Solve Section */}
      <ProblemsSection />

      {/* How We Help Section */}
      <HowWeHelpSection />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  )
}

function ProblemsSection() {
  const problems = [
    {
      icon: '📈',
      title: 'Slow Business Growth?',
      description: 'Struggling to scale? We identify bottlenecks and implement solutions that drive real growth.',
    },
    {
      icon: '🌐',
      title: 'Missing Online Presence?',
      description: 'No website or outdated digital presence? We build modern, high-converting web solutions.',
    },
    {
      icon: '⚙️',
      title: 'Need Automation?',
      description: 'Wasting time on repetitive tasks? We automate workflows to free up your team.',
    },
    {
      icon: '💼',
      title: 'Outdated Systems?',
      description: 'Legacy systems holding you back? We modernize your tech stack for better performance.',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Problems We <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Solve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every business faces challenges. We turn your problems into opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-dark/50 backdrop-blur-sm border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary-light">{problem.title}</h3>
              <p className="text-gray-300">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowWeHelpSection() {
  const steps = [
    {
      number: '01',
      title: 'Understand Your Challenge',
      description: 'We listen to your problems and analyze your business needs thoroughly.',
    },
    {
      number: '02',
      title: 'Design a Solution',
      description: 'We create a tailored strategy that addresses your specific pain points.',
    },
    {
      number: '03',
      title: 'Implement & Deploy',
      description: 'We build and deploy solutions with minimal disruption to your operations.',
    },
    {
      number: '04',
      title: 'Support & Optimize',
      description: 'We provide ongoing support and continuously optimize for better results.',
    },
  ]

  return (
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
            How We Help <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Businesses Grow</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A proven process that delivers results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300">
                <div className="text-6xl font-bold text-primary-light/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesOverview() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      icon: '💻',
    },
    {
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      icon: '⚡',
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions.',
      icon: '🚀',
    },
    {
      title: 'Tech Consulting',
      description: 'Expert guidance to make the right technology decisions.',
      icon: '🎯',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary-dark to-primary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-dark/50 backdrop-blur-sm border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    {
      title: 'Proven Track Record',
      description: 'Years of experience delivering successful projects for businesses of all sizes.',
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We use the latest tools and technologies to build future-proof solutions.',
    },
    {
      title: 'Client-Focused Approach',
      description: 'Your success is our priority. We work closely with you every step of the way.',
    },
    {
      title: 'Fast Turnaround',
      description: 'We deliver results quickly without compromising on quality.',
    },
  ]

  return (
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
            Why Choose <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We don't just provide services—we solve problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-primary-light">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Lincoln Tech transformed our business operations. Their automation solutions saved us 20 hours per week!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, Digital Solutions',
      content: 'Professional, reliable, and results-driven. They built us a website that increased our leads by 300%.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Manager, Growth Co.',
      content: 'The team at Lincoln Tech understood our challenges and delivered exactly what we needed. Highly recommended!',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-primary-dark to-secondary-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-dark/50 backdrop-blur-sm border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

