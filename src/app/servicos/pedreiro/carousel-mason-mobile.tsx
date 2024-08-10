'use client'
import {
  CurrencyCircleDollar,
  Speedometer,
  Target,
  Tag,
  Cloud,
  Users,
} from '@phosphor-icons/react/dist/ssr'
import { FeatureData } from '../../types/interface'
import { Carousel } from '../../../components/carousel/testimony-carousel'

const features: FeatureData[] = [
  {
    icon: <CurrencyCircleDollar className="size-12" strokeWidth={1} />,
    title: 'Melhor preço',
    description:
      'Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade.',
    iconPosition: 'column',
    showLink: true,
  },
  {
    icon: <Speedometer className="size-12" strokeWidth={1} />,
    title: 'Entrega no Prazo',
    description: 'SOS Construir: pontualidade é nosso compromisso.',
    iconPosition: 'column',
    showLink: true,
  },
  {
    icon: <Target className="size-12" strokeWidth={1} />,
    title: 'Resultados Perfeitos',
    description:
      'SOS Construir: Resultados perfeitos, sua satisfação garantida.',
    iconPosition: 'column',
    showLink: true,
  },
  {
    icon: <Tag className="size-12" strokeWidth={1} />,
    title: 'Compromisso',
    description: 'SOS Construir: Compromisso com excelência em cada projeto.',
    iconPosition: 'column',
    showLink: true,
  },
  {
    icon: <Cloud className="size-12" strokeWidth={1} />,
    title: 'Excelência',
    description: 'SOS Construir: Excelência do começo ao fim.',
    iconPosition: 'column',
    showLink: true,
  },
  {
    icon: <Users className="size-12" strokeWidth={1} />,
    title: 'Profissionais Experientes',
    description:
      'SOS Construir: Equipe com ampla experiência, qualidade assegurada.',
    iconPosition: 'column',
    showLink: true,
  },
]

export function CarouselMasonMobile() {
  return (
    <section className="bg-slate-800 py-16 text-center text-white lg:hidden">
      <Carousel
        items={features}
        perView={1}
        spacing={0}
        loop={true}
        showArrows={true}
        breakpoints={{
          '(max-width: 679px)': {
            slides: { perView: 1, spacing: 0 },
            mode: 'snap',
          },
        }}
      />
    </section>
  )
}
