'use client'

import { useState, FormEvent, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  time: string
}

interface ContactInfo {
  icon: string
  title: string
  content: string
  link: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    time: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateEmailJSConfig = (): boolean => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing. Please check your environment variables.')
      return false
    }

    const isDefault = serviceId === 'your_service_id' || 
                     templateId === 'your_template_id' || 
                     publicKey === 'your_public_key'

    if (isDefault) {
      console.error('EmailJS is not properly configured. Please set up your EmailJS credentials in .env.local')
      return false
    }

    return true
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Validate configuration before proceeding
      if (!validateEmailJSConfig()) {
        throw new Error('EmailJS configuration is invalid')
      }

      // Set current time
      const now = new Date().toLocaleString()
      
      // Update form data with current time
      const submissionData = {
        ...formData,
        time: now,
      }

      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      // Template parameters
      const templateParams = {
        name: submissionData.name,
        email: submissionData.email,
        phone: submissionData.phone || 'Not provided',
        time: submissionData.time,
        message: submissionData.message,
        reply_to: submissionData.email,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus('success')
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '', 
        time: '' 
      })

      // Track form submission with Plausible
      if (typeof window !== 'undefined' && (window as any).plausible) {
        (window as any).plausible('form_submission', { props: { page: 'contact' } })
      }

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: '📧',
      title: 'Email',
      content: 'alphwan14@gmail.com',
      link: 'mailto:alphwan14@gmail.com',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+254 756 528219',
      link: 'tel:+254756528219',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      content: '+254 756 528219',
      link: 'https://wa.me/+254756528219',
    },
  ]

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
              Get in{' '}
              <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Have a problem we can solve? Send us a message and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                  type="hidden" 
                  name="time" 
                  value={formData.time} 
                />
                
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Name <span className="text-primary-light">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-light/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-light transition-colors"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email <span className="text-primary-light">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-light/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-light transition-colors"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                    Phone <span className="text-gray-500 text-sm">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-light/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-light transition-colors"
                    placeholder="+254 123 456 789"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message <span className="text-primary-light">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-light/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-light transition-colors resize-none"
                    placeholder="Tell us about your problem or how we can help..."
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                  >
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                  >
                    ✗ There was an error sending your message. Please try again or contact us directly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-light/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Prefer to reach out directly? Use any of the methods below to get in touch with us.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="block bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300 group"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-primary-light">
                          {info.title}
                        </h3>
                        <p className="text-gray-300">{info.content}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary-light">
                  Response Time
                </h3>
                <p className="text-gray-300">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}