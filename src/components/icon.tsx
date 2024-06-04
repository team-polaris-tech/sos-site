import { IconProps } from '@phosphor-icons/react'
import { ComponentType } from 'react'

interface Props extends IconProps {
  icon: ComponentType<IconProps>
}

export function Icon({ icon: Icon, ...props }: Props) {
  return <Icon weight="light" {...props} />
}
