'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import {
  Speedometer,
  CurrencyCircleDollar,
  Target,
  Tag,
  Cloud,
  Users,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { ReactNode } from 'react'

function Feature({
  icon,
  description,
  title,
}: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div>{icon}</div>
      <div className="text-center text-base font-medium">{title}</div>
      <div className="text-center text-base">{description}</div>
      <div className="flex items-center gap-2">
        <button className="text-orange-500">
          <Link href="#">Acessar</Link>
        </button>
        <span>
          <CaretRight color="#f97316" size={24} />
        </span>
      </div>
    </div>
  )
}

export function FeatureMobile() {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(max-width: 800px)': {
        slides: { perView: 1, spacing: 10 },
        mode: 'snap',
      },
    },
    slides: { perView: 1, spacing: 10 },
    loop: true,
  })

  const handlePrevClick = () => {
    slider.current?.prev()
  }

  const handleNextClick = () => {
    slider.current?.next()
  }

  return (
    <section className="bg-slate-800 py-16 text-white lg:hidden">
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <Feature
              icon={
                <CurrencyCircleDollar className="size-12" strokeWidth={1} />
              }
              title="Melhor preço"
              description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
            />
          </div>
          <div className="keen-slider__slide">
            <Feature
              icon={<Speedometer className="size-12" strokeWidth={1} />}
              title="Entrega no Prazo"
              description="SOS Construir: pontualidade é nosso compromisso."
            />
          </div>
          <div className="keen-slider__slide">
            <Feature
              icon={<Target className="size-12" strokeWidth={1} />}
              title="Resultados Perfeitos"
              description="SOS Construir: Resultados perfeitos, sua satisfação garantida."
            />
          </div>
          <div className="keen-slider__slide">
            <Feature
              icon={<Tag className="size-12" strokeWidth={1} />}
              title="Compromisso"
              description="SOS Construir: Compromisso com excelência em cada projeto."
            />
          </div>
          <div className="keen-slider__slide">
            <Feature
              icon={<Cloud className="size-12" strokeWidth={1} />}
              title="Excelência"
              description="SOS Construir: Excelência do começo ao fim."
            />
          </div>
          <div className="keen-slider__slide">
            <Feature
              icon={<Users className="size-12" strokeWidth={1} />}
              title="Profissionais Experientes"
              description="SOS Construir: Equipe com ampla experiência, qualidade assegurada."
            />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
          <button onClick={handlePrevClick} className=" text-black">
            <CaretLeft
              className="md:size-16 lg:size-16"
              color="#EA580C"
              size={32}
            />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
          <button onClick={handleNextClick} className=" text-black">
            <CaretRight
              className="md:size-16 lg:size-16"
              color="#EA580C"
              size={32}
            />
          </button>
        </div>
      </div>
    </section>
  )
}
