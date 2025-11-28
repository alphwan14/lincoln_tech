import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 inline-block text-center'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-light to-secondary-light text-primary-dark hover:shadow-lg hover:shadow-primary-light/50',
    secondary: 'bg-primary-dark border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-primary-dark',
    outline: 'border-2 border-primary-light text-primary-light hover:bg-primary-light hover:text-primary-dark',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

