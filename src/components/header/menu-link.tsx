import { ComponentProps } from 'react'

import { NavLink } from '../nav-link'

export function MenuLink(props: ComponentProps<typeof NavLink>) {
  return (
    <NavLink
      shouldMatchExact
      className="flex items-center px-3 py-1.5 text-sm font-medium transition-colors hover:text-orange-500 data-[current=true]:text-orange-500"
      {...props}
    />
  )
}
