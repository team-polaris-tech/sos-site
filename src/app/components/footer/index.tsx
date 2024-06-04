import { Facebook, Instagram, MapPin, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex w-full max-w-screen-xl flex-col justify-between bg-slate-800 px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-6 py-16">
        <div className="col-span-3 flex flex-col gap-2 lg:col-span-1">
          <h3 className="text-2xl font-bold text-white">Sos Construir</h3>
          <span className="text-base text-white">
            Experimente o diferencial de escolher a Construtora SOS Construir
            para sua reforma e construção!
          </span>
          <div className="mt-2.5 flex items-center gap-2.5">
            <div className="rounded border p-1.5  text-white">
              <MessageCircle className="size-6" />
            </div>
            <div className="rounded border p-1.5  text-white">
              <Facebook className="size-6" />
            </div>
            <div className="rounded border p-1.5  text-white">
              <Instagram className="size-6" />
            </div>
            <div className="rounded border p-1.5  text-white">
              <MapPin className="size-6" />
            </div>
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-2xl font-bold text-white">Sos Construir</h3>
          <ul className="text-white">
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Orçamento</li>
          </ul>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <h3 className="text-2xl font-bold text-white">Sos Construir</h3>
          <span className="text-white">Foz do Iguaçu Paraná</span>
        </div>
      </div>
      <div className="pb-8 text-center text-white">
        &copy; {new Date().getFullYear()} SOS Construir todos os direitos
        reservados.
      </div>
    </footer>
  )
}
