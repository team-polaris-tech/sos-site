import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  href: string
  target?: string
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
}

const sizeClasses = {
  small: 'w-full sm:w-1/4 px-4 py-3',
  medium: 'w-full sm:w-1/2 px-4 py-3',
  large: 'w-full px-4 py-3', // Mantendo w-full para todos os tamanhos por padrão
}

export default function Button({
  children,
  className,
  href,
  target,
  size = 'medium',
  icon,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`flex items-center justify-center gap-2 rounded-md bg-orange-500 text-center text-white hover:bg-orange-600 ${sizeClasses[size]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </Link>
  )
}
