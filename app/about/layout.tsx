import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Lincoln Tech',
  description: 'Learn about Lincoln Tech and our mission to solve business problems with technology',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

