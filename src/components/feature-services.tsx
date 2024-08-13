import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  icon?: ReactNode
  title: string
  description: string
  price?: string
  showLink?: boolean
  iconPosition?: 'column' | 'flex'
  showPriceIcon?: boolean
  borderColor?: 'orange' | 'transparent'
}

export default function FeatureServices({
  icon,
  title,
  description,
  price,
  showLink,
  iconPosition,
  showPriceIcon,
  borderColor,
}: Props) {
  return (
    <div className="flex w-full flex-col items-center gap-4 md:max-w-[500px]">
      {iconPosition === 'column' && (
        <div className="flex justify-center pt-1">{icon}</div>
      )}
      <div className="flex gap-2">
        {iconPosition === 'flex' && <div className="pt-1">{icon}</div>}
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-medium text-orange-500">{title}</div>
          <div className="max-w-[300px] text-base">{description}</div>
          {price && (
            <div
              className={`flex items-center gap-2 lg:justify-center ${
                showPriceIcon ? 'justify-between' : ''
              }`}
            >
              <span
                className={`text-2xl font-semibold ${
                  borderColor === 'orange'
                    ? 'rounded-lg border border-orange-500 p-2'
                    : ''
                }`}
              >
                {price}
              </span>
              {showPriceIcon && (
                <Link href="#">
                  <ArrowRight color="#f97316" size={24} />
                </Link>
              )}
            </div>
          )}

          {showLink && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <button className="text-orange-500">
                <Link href="#">Acessar</Link>
              </button>
              <span>
                <ArrowRight color="#f97316" size={24} />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
