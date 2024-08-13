import Image from 'next/image'
import Link from 'next/link'
import { CaretRight, SealCheck } from '@phosphor-icons/react/dist/ssr'
import Eletricista from './eletrecistas/page'
import { ServiceCarousel } from '../../components/carousel/service-carousel'

const serviceImages = [
  { src: '/eletrecista.jpg', alt: 'Service 1' },
  { src: '/eletrecista.jpg', alt: 'Service 2' },
  { src: '/eletrecista.jpg', alt: 'Service 3' },
  { src: '/eletrecista.jpg', alt: 'Service 4' },
]

export default function Servicos() {
  return (
    <>
      <section className="sm:px-8 lg:mx-0 lg:px-0">
        <div className="mb-14 flex flex-col items-center justify-center gap-14 p-6 lg:flex-row">
          <Image
            src="/servico.jpg"
            alt="serviço"
            width={400}
            height={400}
            quality={100}
            priority
          />
          <div className="flex max-w-md flex-col gap-4 overflow-y-auto">
            <p className="font-medium text-[#EA580C]">
              <Link href="#" target="_blank">
                Precisa de um eletrecista?
              </Link>
            </p>
            <h1 className="text-2xl font-bold">
              Soluções Residenciais, Prediais e Padrão Copel para Sua
              Tranquilidade
            </h1>
            <p>
              Quando se trata de serviços elétricos, a SOS Construir é a escolha
              certa para você. Nossos eletricistas são profissionais
              certificados e altamente qualificados, prontos para atender às
              suas necessidades. Além disso, estamos comprometidos em seguir os
              rigorosos padrões da Copel, garantindo a segurança e conformidade
              em cada projeto.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <SealCheck size={24} color="#EA580C" />
                <span className="font-semibold text-[#192132]">
                  Profissionais certificados e qualificados
                </span>
              </div>
              <div className="flex gap-4">
                <SealCheck size={24} color="#EA580C" />
                <span className="font-semibold text-[#192132]">
                  Conformidade com os padrões da Copel
                </span>
              </div>
              <div className="flex gap-4">
                <SealCheck size={24} color="#EA580C" />
                <span className="font-semibold text-[#192132]">
                  Soluções para residências e edifícios
                </span>
              </div>
              <div className="flex gap-4">
                <SealCheck size={24} color="#EA580C" />
                <span className="font-semibold text-[#192132]">
                  Segurança e tranquilidade garantidas
                </span>
              </div>
            </div>
            <div className="flex justify-between pt-5">
              <p className="font-medium text-[#EA580C]">
                <Link href="#" target="_blank">
                  Solicitar um orçamento
                </Link>
              </p>
              <span>
                <CaretRight size={24} color="#EA580C" />
              </span>
            </div>
          </div>
        </div>

        <ServiceCarousel
          items={serviceImages}
          type="service"
          showArrows
          perView={4}
        />
        <Eletricista />
      </section>
    </>
  )
}
