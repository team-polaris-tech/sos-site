import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

function Features({
  price,
  description,
  title,
  image,
}: {
  price: string
  title: string
  description: string
  image: ReactNode
}) {
  return (
    <div className="flex gap-6">
      <div>{image}</div>
      <div className="flex flex-col gap-2">
        <div className="text-left text-base font-medium">{title}</div>
        <div className="text-left">{description}</div>
        <div className="flex items-center justify-between gap-2">
          <div className="text-3xl font-bold">{price}</div>
          <span>
            <ArrowRight color="#f97316" size={24} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default function FeatureMobile() {
  return (
    <>
      <section className="flex-col bg-slate-800 py-16 text-white lg:hidden">
        <div className="block pb-10 text-center lg:hidden">
          <Link href="#">
            Veja mais produtos <br /> como esse
          </Link>
        </div>
        <div className="flex flex-col items-start justify-between gap-6 p-8">
          <Features
            image={
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={300}
                height={300}
                className="object-cover"
                quality={100}
                priority
              />
            }
            title="Melhor preço"
            description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
            price="R$ 0,00"
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-6 p-8">
          <Features
            image={
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={300}
                height={300}
                className="object-cover"
                quality={100}
                priority
              />
            }
            title="Melhor preço"
            description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
            price="R$ 0,00"
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-6 p-8">
          <Features
            image={
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={300}
                height={300}
                className="object-cover"
                quality={100}
                priority
              />
            }
            title="Melhor preço"
            description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
            price="R$ 0,00"
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-6 p-8">
          <Features
            image={
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={300}
                height={300}
                className="object-cover"
                quality={100}
                priority
              />
            }
            title="Melhor preço"
            description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
            price="R$ 0,00"
          />
        </div>
      </section>
    </>
  )
}
