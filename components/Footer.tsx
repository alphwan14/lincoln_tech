import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark border-t border-primary-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-secondary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-dark font-bold text-xl">LT</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                Lincoln Tech
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Solving business problems with cutting-edge technology. We help businesses grow, automate, and transform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-light transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary-light transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-light transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-primary-light transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">Business Automation</li>
              <li className="text-gray-400 text-sm">Digital Transformation</li>
              <li className="text-gray-400 text-sm">Tech Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:alphwan14@gmail.com" className="hover:text-primary-light transition-colors">
                  alphwan14@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254 756 528219" className="hover:text-primary-light transition-colors">
                +254 756 528 219
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
                >
                  Send Message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Lincoln Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

