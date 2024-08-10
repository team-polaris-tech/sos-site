'use client'
import {
  CaretRight,
  Certificate,
  SealCheck,
  ShieldCheck,
  Tree,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { Feature } from '../../components/feature'
import Button from '../../components/ui/button'
import FeatureServices from '../../components/feature-services'
// import SearchInput from '../../components/ui/search-input'

export default function Produtos() {
  return (
    <>
      <section className="sm:px-8 lg:mx-0 lg:px-0">
        <div className="mb-14 flex flex-col items-center justify-center gap-14 p-6 lg:flex-row">
          <Image
            src="/produtos.jpg"
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
            <h1 className="text-3xl font-bold">
              Encontre o tijolo ideal para você
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              voluptatibus.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <SealCheck size={24} color="#EA580C" />
                <span className="font-semibold text-[#192132]">
                  Variedade de tijolos e blocos <br /> para sua contrução
                </span>
              </div>
              <div className="flex gap-4">
                <SealCheck size={24} color="#EA580C" />
                <span className="font-semibold text-[#192132]">
                  Qualidade garantida
                </span>
              </div>
            </div>
            <div className="flex justify-between pt-20">
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
        {/* Desktop Desktop Desktop */}
        <section className="mb-16 hidden flex-col bg-slate-800 px-52 py-16 text-white lg:flex lg:gap-16">
          <div className="w-full lg:flex lg:justify-center">
            {/* <SearchInput /> */}
          </div>
          <div className="flex flex-col items-center justify-between gap-6 p-4 lg:flex-row">
            <div className="flex flex-col items-center gap-4 text-center">
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
              <FeatureServices
                title="Melhor preço"
                description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
                price="R$ 0,00"
                borderColor="orange"
                showLink
              />
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
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
              <FeatureServices
                title="Melhor preço"
                description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
                price="R$ 0,00"
                borderColor="orange"
                showLink
              />
            </div>
            <div className="flex flex-col items-center gap-4 text-center">
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
              <FeatureServices
                title="Melhor preço"
                description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
                price="R$ 0,00"
                borderColor="orange"
                showLink
              />
            </div>
          </div>
        </section>
        {/*  Mobile Mobile Mobile */}
        <section className="flex-col bg-slate-800 py-16 text-white lg:hidden">
          <div className="block pb-10 text-center lg:hidden">
            <Link href="#">
              Veja mais produtos <br /> como esse
            </Link>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 p-8">
            <div className="flex gap-2">
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={90}
                height={50}
                className="object-cover"
                quality={100}
                priority
              />
              <FeatureServices
                title="Melhor preço"
                description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
                price="R$ 5,00"
                showPriceIcon
                borderColor="transparent"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 p-8">
            <div className="flex gap-2">
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={90}
                height={50}
                className="object-cover"
                quality={100}
                priority
              />
              <FeatureServices
                title="Melhor preço"
                description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
                price="R$ 20,00"
                showPriceIcon
                borderColor="transparent"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 p-8">
            <div className="flex gap-2">
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={90}
                height={50}
                className="object-cover"
                quality={100}
                priority
              />
              <FeatureServices
                title="Melhor preço"
                description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
                price="R$ 10,00"
                showPriceIcon
                borderColor="transparent"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 p-8">
            <div className="flex gap-2">
              <Image
                src="/eletrecista.jpg"
                alt="tijolo"
                width={90}
                height={50}
                className="object-cover"
                quality={100}
                priority
              />
              <FeatureServices
                title="Melhor preço"
                description="Na SOS Construir, você encontra o melhor preço sem abrir mão da qualidade."
                price="R$ 39,90"
                showPriceIcon
                borderColor="transparent"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-between gap-8 text-wrap px-6 py-8 lg:flex-row lg:gap-8 lg:px-52 lg:py-16">
          <div className="max-w-[250px]">
            <Feature
              icon={<Tree size={32} />}
              title="Fabricação ecológica"
              description="A SOS dedica-se à constante capacitação e atualização de seus parceiros!"
            />
          </div>
          <div className="max-w-[250px]">
            <Feature
              icon={<ShieldCheck size={32} />}
              title="Padrão de qualidade"
              description="Elimine as preocupações com a execução do projeto."
            />
          </div>
          <div className="max-w-[250px]">
            <Feature
              icon={<Certificate size={32} />}
              title="Tijolo certificado"
              description="A SOS é reconhecida por oferecer serviços de alta qualidade a preços competitivos!"
            />
          </div>
        </section>
        <div className="flex flex-col items-center justify-center gap-1 p-8 lg:px-0 lg:py-0">
          <h1 className="text-center text-3xl font-bold text-[#EA580C]">
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
