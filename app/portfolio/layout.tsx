import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - Lincoln Tech',
  description: 'View our portfolio of successful projects and client solutions',
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

