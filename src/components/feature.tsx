import { ReactNode } from 'react'

export interface FeatureProps {
  title: string
  description: string
  icon: ReactNode
}

export function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <div className="rounded-xl border-2 border-orange-500 p-6 text-orange-500">
        {icon}
      </div>
      <span className="text-base font-medium text-orange-500">{title}</span>
      <span className="text-sm text-neutral-500">{description}</span>
    </div>
  )
}
