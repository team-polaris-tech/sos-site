import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '../../components/ui/search-input'

function Features({
  price,
  description,
  title,
}: {
  price: string
  title: string
  description: string
}) {
  return (
    <div className="flex w-[300px] flex-col items-center gap-4">
      <div className="text-center text-base font-medium">{title}</div>
      <div className="text-center text-base">{description}</div>
      <div className="rounded-lg border border-orange-500 p-2">{price}</div>
      <div className="flex items-center gap-2">
        <button className="text-orange-500">
          <Link href="#">Ver produto</Link>
        </button>
        <span>
          <ArrowRight color="#f97316" size={24} />
        </span>
      </div>
    </div>
  )
}

export function FeatureProducts() {
  return (
    <>
      <section className="mb-16 hidden flex-col bg-slate-800 px-52 py-16 text-white lg:flex lg:gap-16">
        <div className="flex justify-center">
          <SearchInput />
        </div>
        <div className="flex flex-col items-center justify-between gap-6 p-4 lg:flex-row">
          <div className="flex flex-col items-center gap-4">
            <div>
              <Image
                src="/tijolo.jpg"
                alt="tijolo"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            <Features
              title="Melhor preço"
              description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
              price="R$ 0,00"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div>
              <Image
                src="/tijolo.jpg"
                alt="tijolo"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            <Features
              title="Melhor preço"
              description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
              price="R$ 0,00"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <div>
              <Image
                src="/tijolo.jpg"
                alt="tijolo"
                width={300}
                height={300}
                className="object-cover"
                priority
              />
            </div>
            <Features
              title="Melhor preço"
              description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
              price="R$ 0,00"
            />
          </div>
        </div>
      </section>
    </>
  )
}
