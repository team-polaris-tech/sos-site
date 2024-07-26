import Link from 'next/link'
import { MenuLink } from './menu-link'

export function Header() {
  return (
    <header className="flex w-full max-w-screen-xl flex-col items-center justify-between p-6 lg:flex-row lg:px-8">
      <Link href="/">
        <h1 className="text-2xl text-orange-500">Sos Construir</h1>
      </Link>
      <nav className="flex flex-col items-center space-x-2 lg:flex-row lg:space-x-3">
        <MenuLink href="/services">Serviços</MenuLink>
        <MenuLink href="/products">Produtos</MenuLink>
        <MenuLink href="/orcamento">Orçamento</MenuLink>
        <MenuLink href="/contact">Contato</MenuLink>
      </nav>
    </header>
  )
}
