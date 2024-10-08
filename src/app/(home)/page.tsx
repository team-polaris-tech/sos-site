'use client'
import { Feature } from '@/components/feature'

import Image from 'next/image'
import {
  HardHat,
  TrafficCone,
  MoneyWavy,
  Target,
  Ruler,
  Gear,
} from '@phosphor-icons/react/dist/ssr'

import { RequestQuoteForm } from '@/components/request-quote-form'
import SearchInput from '../../components/ui/search-input'
import { ServiceCarousel } from '../../components/carousel/service-carousel'
import { FeatureHomeMobile } from './carousel-benefits-mobile'
import { CarouselFilter } from './carousel-filter'
import { useState } from 'react'

const testimonyList = [
  {
    name: 'Denise PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Denise PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Denise PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Riad PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Laercio PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center ">
      <section className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-orange-500 lg:text-6xl">
            Sos Construir
          </h1>
          <SearchInput value={searchTerm} onChange={handleSearchChange} />
          <span>
            <h3 className="text-xl font-semibold lg:text-3xl">
              Encontre serviços
            </h3>
            <p className="text-sm lg:text-base">
              Para auxiliarem você no dia a dia
            </p>
          </span>
          <CarouselFilter searchTerm={searchTerm} />
          <span>
            <h1 className="text-xl font-semibold lg:text-3xl">Ou produtos</h1>
            <p className="text-sm lg:text-base">Que você precisa</p>
          </span>
          <CarouselFilter searchTerm={searchTerm} />
        </div>
        <div className="hidden lg:block">
          <Image
            src={'/arquiteto.jpg'}
            alt="serviço"
            width={500}
            height={500}
            quality={100}
            priority
            className="object-cover"
          />
        </div>
      </section>
      <section className="hidden items-center justify-between gap-8 py-16 lg:flex">
        <Feature
          icon={<HardHat size={32} />}
          title="Profissionais capacitados"
          description="A SOS dedica-se à constante capacitação e atualização de seus parceiros!"
        />
        <Feature
          icon={<TrafficCone size={32} />}
          title="Projeto sem dor de cabeça"
          description="Elimine as preocupações com a execução do projeto."
        />
        <Feature
          icon={<MoneyWavy size={32} />}
          title="Os melhores preços"
          description="A SOS é reconhecida por oferecer serviços de alta qualidade a preços competitivos!"
        />
        <Feature
          icon={<Target size={32} />}
          title="Entrega no prazo"
          description="A SOS prioriza a pontualidade e assegura o cumprimento dos prazos na entrega de projetos!"
        />
      </section>
      <section className="flex w-full justify-between gap-10 px-6 py-16">
        <Image
          src="/nosso-diferencial.jpg"
          alt=""
          width={400}
          height={400}
          className="hidden lg:flex"
        />
        <div className="flex-1">
          <h2 className="text-center text-3xl font-medium text-orange-500 lg:text-left">
            Nosso diferencial
          </h2>
          <p className="mt-2.5 text-neutral-500">
            A Sos Construir destaca-se em Foz do Iguaçu, sendo especializada em
            construção e reformas, com mais de 10 anos de experiência no setor.
            Operando em uma diversificada gama de mais de 100 segmentos,
            proporcionamos acesso a profissionais altamente qualificados e
            experientes em diversas áreas.
          </p>
          <p className="mt-2.5 text-neutral-500">
            Ao realizar o orçamento, dedicamo-nos a compreender minuciosamente
            as necessidades do cliente, proporcionando as melhores soluções para
            resolver o problema.
          </p>
          <p className="mt-2.5 text-neutral-500">
            Comprometidos com a qualidade, optamos por materiais de primeira
            linha, diretamente da fábrica.
          </p>
          <p className="mt-2.5 text-neutral-500">
            Além disso, oferecemos garantia integral em nossos serviços,
            assumindo a responsabilidade por todos os aspectos do projeto para
            que o cliente não tenha que se preocupar com nada. Em caso de
            eventualidades, nossa equipe está pronta para garantir a resolução
            dos problemas, reafirmando nosso compromisso com a satisfação do
            cliente.
          </p>
        </div>
      </section>
      <section className="relative w-full lg:hidden">
        <FeatureHomeMobile />
      </section>
      <section className="hidden items-center justify-between gap-8 py-16 lg:flex">
        <Feature
          icon={<Ruler size={32} />}
          title="Planejamento do Projeto"
          description="Oferecemos orientações para um planejamento cuidadoso do seu projeto, do início ao fim."
        />
        <Feature
          icon={<TrafficCone size={32} />}
          title="Reformas"
          description="Cuidamos de cada detalhe, desde pequenos ajustes até reformas completas, para um resultado final impecável."
        />
        <Feature
          icon={<HardHat size={32} />}
          title="Especialistas"
          description="Equipe de profissionais qualificados, prontos para soluções personalizadas para seu projeto."
        />
        <Feature
          icon={<Gear size={32} />}
          title="Garantia"
          description="Oferecemos uma garantia completa em todos os trabalhos realizados."
        />
      </section>
      <RequestQuoteForm />
      <section className="flex flex-col items-center gap-2.5 p-6 text-center lg:px-2">
        <h2 className="text-4xl font-bold text-orange-500">
          Depoimentos SOS Construir
        </h2>
        <p className="text-xl text-neutral-500">
          Na SOS Construir, nosso objetivo é garantir clientes felizes e
          satisfeitos.
        </p>
        <p className="text-xl text-neutral-500">
          Junte-se a nós e faça parte dessa experiência de sucesso!
        </p>
      </section>
      <ServiceCarousel items={testimonyList} type="testimony" perView={3} />
    </div>
  )
}
