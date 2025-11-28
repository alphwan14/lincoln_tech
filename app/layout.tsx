import type { Metadata } from 'next'
import { Inter, Poppins, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Lincoln Tech - Leading Software Company in Kenya & Mombasa | Web Design & Development',
    template: '%s | Lincoln Tech Kenya'
  },
  description: 'Lincoln Tech: Premier software development company in Kenya. Custom web design, mobile apps, business automation & digital solutions in Mombasa. Get your free consultation today!',
  keywords: 'software company Kenya, web designers Mombasa, mobile app developers Kenya, business automation Kenya, digital transformation Nairobi, web development Kenya, software developers Mombasa, custom software Kenya, ecommerce solutions Kenya, IT company Kenya',
  authors: [{ name: 'Lincoln Tech' }],
  creator: 'Lincoln Tech',
  publisher: 'Lincoln Tech',
  metadataBase: new URL('https://lincoln-tech.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lincoln Tech - Leading Software Company in Kenya & Mombasa',
    description: 'Premier software development and web design company in Kenya. Custom solutions for businesses in Mombasa, Nairobi, and nationwide.',
    url: 'https://lincoln-tech.vercel.app',
    siteName: 'Lincoln Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lincoln Tech - Software Company Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lincoln Tech - Software Company Kenya',
    description: 'Leading software development and web design company in Mombasa, Kenya',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'D9h8qRAfBDA-dhJpE62Mgp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Lincoln Tech',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Any',
    'description': 'Leading software development company in Kenya providing web design, mobile apps, and business automation solutions',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'KES'
    },
    'provider': {
      '@type': 'Organization',
      'name': 'Lincoln Tech',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Mombasa',
        'addressCountry': 'KE'
      }
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable}`}>
      <head>
        <meta name="google-site-verification" content="D9h8qRAfBDA-dhJpE62Mgp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}