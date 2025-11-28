'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Get current timestamp
      const currentTime = new Date().toLocaleString('en-US', {
        timeZone: 'Africa/Nairobi',
        dateStyle: 'full',
        timeStyle: 'long',
      })

      // Prepare request payload
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        message: formData.message.trim(),
        time: currentTime,
      }

      // Send POST request to API route
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        // If not JSON, it's likely an error page
        const text = await response.text()
        console.error('Non-JSON response received:', text.substring(0, 200))
        throw new Error('Server returned an error. Please check your environment variables and try again.')
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Failed to send message')
      }

      // Success
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Log success for debugging (only in development)
      if (process.env.NODE_ENV === 'development') {
        console.log('Message sent successfully:', data)
      }
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error: any) {
      // Enhanced error logging
      console.error('Contact form error:', {
        error: error,
        message: error?.message,
        stack: process.env.NODE_ENV === 'development' ? error?.stack : undefined,
      })

      // Provide user-friendly error message
      const errorMsg = error?.message || 'There was an error sending your message. Please try again or contact us directly.'
      setErrorMessage(errorMsg)
      setSubmitStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
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
              Get in <span className="bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Have a problem we can solve? Send us a message and we'll get back to you as soon as possible.
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
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                  >
                    ✓ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                  >
                    <div className="font-semibold mb-1">✗ Error sending message</div>
                    <div className="text-sm">
                      {errorMessage || 'There was an error sending your message. Please try again or contact us directly at '}
                      {!errorMessage && (
                        <a href="mailto:alphwan14@gmail.com" className="underline hover:text-red-300">
                          alphwan14@gmail.com
                        </a>
                      )}
                    </div>
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
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="block bg-gradient-to-br from-primary-dark to-secondary-dark border border-primary-light/20 rounded-xl p-6 hover:border-primary-light/50 transition-all duration-300 group"
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

