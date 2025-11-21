import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Lincoln Tech',
  description: 'Comprehensive technology services to solve your business problems',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

