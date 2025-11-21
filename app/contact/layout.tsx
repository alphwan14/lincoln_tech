import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Lincoln Tech',
  description: 'Get in touch with Lincoln Tech. Send us a message and we will help solve your business problems.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

