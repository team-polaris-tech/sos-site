import { IconProps } from '@phosphor-icons/react'
import { ComponentType } from 'react'
import { Icon } from './icon'

export interface FeatureProps {
  title: string
  description: string
  icon: ComponentType<IconProps>
}

export function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <div className="rounded-xl border-2 border-orange-500 p-6">
        <Icon className="size-9 text-orange-500" icon={icon} weight="light" />
      </div>
      <span className="text-base font-medium text-orange-500">{title}</span>
      <span className="text-sm text-neutral-500">{description}</span>
    </div>
  )
}
