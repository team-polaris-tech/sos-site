import {
  Speedometer,
  CurrencyCircleDollar,
  Target,
  Tag,
  Cloud,
  Users,
} from '@phosphor-icons/react/dist/ssr'
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
    <div className="flex w-[300px] flex-col items-center gap-4">
      <div>{icon}</div>
      <div className="text-center text-base font-medium">{title}</div>
      <div className="text-center text-base">{description}</div>
    </div>
  )
}

export function Features() {
  return (
    <section className="flex flex-col bg-slate-800 py-16 text-white lg:gap-16">
      <div className="flex flex-col items-center justify-between gap-6 p-4 lg:flex-row">
        <Feature
          icon={<CurrencyCircleDollar className="size-12" strokeWidth={1} />}
          title="Melhor preço"
          description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
        />
        <Feature
          icon={<Speedometer className="size-12" strokeWidth={1} />}
          title="Entrega no Prazo"
          description="SOS Construir: pontualidade é nosso compromisso."
        />
        <Feature
          icon={<Target className="size-12" strokeWidth={1} />}
          title="Melhor preço"
          description="SOS Construir: Resultados perfeitos, sua satisfação garantida."
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-6 p-4 lg:flex-row">
        <Feature
          icon={<Tag className="size-12" strokeWidth={1} />}
          title="Compromisso"
          description="SOS Construir: Compromisso com excelência em cada projeto."
        />
        <Feature
          icon={<Cloud className="size-12" strokeWidth={1} />}
          title="Melhor preço"
          description="SOS Construir: Excelência do começo ao fim."
        />
        <Feature
          icon={<Users className="size-12" strokeWidth={1} />}
          title="Profissionais Experientes"
          description="SOS Construir: Equipe com ampla experiência, qualidade assegurada."
        />
      </div>
    </section>
  )
}
