'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Feature } from '@/components/feature'
import {
  HardHat,
  TrafficCone,
  MoneyWavy,
  Target,
  Ruler,
  Gear,
} from '@phosphor-icons/react/dist/ssr'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

const benefits = [
  {
    icon: <HardHat />,
    title: 'Profissionais capacitados',
    description:
      'A SOS dedica-se à constante capacitação e atualização de seus parceiros!',
  },
  {
    icon: <TrafficCone />,
    title: 'Projeto sem dor de cabeça',
    description: 'Elimine as preocupações com a execução do projeto.',
  },
  {
    icon: <MoneyWavy />,
    title: 'Os melhores preços',
    description:
      'A SOS é reconhecida por oferecer serviços de alta qualidade a preços competitivos!',
  },
  {
    icon: <Target />,
    title: 'Entrega no prazo',
    description:
      'A SOS prioriza a pontualidade e assegura o cumprimento dos prazos na entrega de projetos!',
  },
  {
    icon: <Ruler />,
    title: 'Planejamento do Projeto',
    description:
      'Oferecemos orientações para um planejamento cuidadoso do seu projeto, do início ao fim.',
  },
  {
    icon: <Gear />,
    title: 'Garantia',
    description:
      'Oferecemos uma garantia completa em todos os trabalhos realizados.',
  },
]

export function FeatureHomeMobile() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 1, spacing: 10 },
    loop: true,
  })

  const handlePrevClick = () => {
    instanceRef.current?.prev()
  }

  const handleNextClick = () => {
    instanceRef.current?.next()
  }

  return (
    <div className="keen-slider relative" ref={sliderRef}>
      {benefits.map((feature, index) => (
        <div
          key={index}
          className="keen-slider__slide flex items-center justify-center p-4"
        >
          <Feature
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
        <button onClick={handlePrevClick}>
          <CaretLeft
            className="md:size-16 lg:size-16"
            color="#EA580C"
            size={32}
          />
        </button>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
        <button onClick={handleNextClick}>
          <CaretRight
            className="md:size-16 lg:size-16"
            color="#EA580C"
            size={32}
          />
        </button>
      </div>
    </div>
  )
}
