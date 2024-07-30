import {
  SealCheck,
  SealQuestion,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'

import Button from '../../../components/ui/button'
import { ReactNode } from 'react'
import { FeatureDesktop } from './feature-desktop'
import { FeatureMobile } from './feature-mobile'

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
    <div className="flex w-full flex-col items-center gap-4 md:max-w-[500px]">
      <div className="flex gap-2">
        <div className="pt-1">{icon}</div>
        <div className="flex flex-col">
          <div className="text-base font-medium text-[#EA580C]">{title}</div>
          <div className="font-semibold">{description}</div>
        </div>
      </div>
    </div>
  )
}

export default function Eletricista() {
  return (
    <>
      <FeatureDesktop />
      <FeatureMobile />
      <br />
      <section className="mx-auto flex max-w-screen-xl flex-col py-28">
        <div className="flex flex-col items-center justify-center gap-20 pb-10 lg:flex-row">
          <div className="max-height-[510px] flex max-w-[368px] flex-col items-center rounded-lg border-2 border-orange-500 px-12 py-16">
            <div className="flex flex-col items-center gap-2">
              <span className="h-20 w-20 rounded-md border bg-black"></span>
              <h1 className="text-2xl font-bold text-[#EA580C]">
                Sos Construir
              </h1>
            </div>
            <ul className="my-6 flex flex-col gap-3 font-medium text-gray-700">
              <div className="flex items-center gap-3">
                <span>
                  <SealCheck size={24} color="#EA580C" />
                </span>
                <li>Atendimento Personalizado</li>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <SealCheck size={24} color="#EA580C" />
                </span>
                <li>Melhor Custo-Benefício</li>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <SealCheck size={24} color="#EA580C" />
                </span>
                <li>Consultoria especializada em Reformas e Construção</li>
              </div>
              <div className="flex items-center gap-3">
                <span>
                  <SealCheck size={24} color="#EA580C" />
                </span>
                <li>Empresa com mais de 10 anos de experiência</li>
              </div>
            </ul>
            <Button href="#" target="_blank" size="large">
              Entrar em contato
            </Button>
          </div>
          <div className="flex max-w-[550px] flex-col gap-4">
            <div className="max-w-[400px] rounded-lg bg-orange-300 p-3">
              <p className="font-medium text-[#EA580C]">
                O melhor preço sem comprometer a qualidade!
              </p>
            </div>
            <h1 className="text-2xl font-bold text-[#EA580C]">
              Temos o Eletricista certo para você
            </h1>
            <div className="flex flex-col justify-between gap-20">
              <p>
                Contrate a SOS Construir e tenha a certeza de contar com os
                melhores profissionais, acompanhamento completo do projeto e a
                garantia de que qualquer problema será resolvido.
              </p>
              <Button href="#" target="_blank" size="medium">
                Solicitar orçamento
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto my-10 flex max-w-screen-lg flex-col gap-4 lg:flex-row lg:gap-8">
          <Feature
            icon={<SealQuestion size={24} color="#EA580C" />}
            title="Quais tipos de projetos elétricos a SOS Construir atende?"
            description="Atendemos a uma variedade de projetos elétricos, incluindo residenciais e prediais, seguindo o padrão Copel."
          />
          <Feature
            icon={<SealQuestion size={24} color="#EA580C" />}
            title="Nossos eletricistas são certificados?"
            description="Sim, todos os nossos eletricistas são profissionais certificados e qualificados, garantindo segurança e qualidade."
          />
        </div>
        <div className="mx-auto mb-28 flex max-w-screen-lg flex-col gap-4 lg:flex-row lg:gap-8">
          <Feature
            icon={<SealQuestion size={24} color="#EA580C" />}
            title="O que é o padrão Copel?"
            description="O padrão Copel se refere às regulamentações e normas elétricas da Companhia Paranaense de Energia. Seguimos rigorosamente essas normas para garantir conformidade."
          />
          <Feature
            icon={<SealQuestion size={24} color="#EA580C" />}
            title="Como posso solicitar um orçamento para serviços elétricos?"
            description="Para obter um orçamento, preencha o formulário de contato em nosso site."
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-3xl font-bold text-[#EA580C]">
            Restou alguma dúvida?
          </h1>
          <p className="text-center font-semibold text-gray-700">
            Entre em contato <br /> agora mesmo
          </p>
          <div className="text-white">
            <WhatsappLogo size={24} color="#FFF" />
          </div>
          <Button
            href="#"
            target="_blank"
            size="small"
            icon={<WhatsappLogo size={24} color="#FFF" />}
          >
            Fale com a SOS
          </Button>
        </div>
      </section>
    </>
  )
}
