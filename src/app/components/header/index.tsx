import { MenuLink } from './menu-link'

export function Header() {
  return (
    <header className="flex h-16 w-full max-w-screen-xl items-center justify-between px-6 lg:h-20 lg:px-8">
      <h1 className="text-2xl text-orange-500">Sos Construir</h1>
      <nav className="flex items-center space-x-2 lg:space-x-3">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/services">Serviços</MenuLink>
        <MenuLink href="/products">Produtos</MenuLink>
        <MenuLink href="/contact">Contato</MenuLink>
      </nav>
    </header>
  )
}
