import Image from 'next/image'
import FeatureServices from '../../../components/feature-services'
import Link from 'next/link'

export default function MaterialDeAcabamento() {
  return (
    <>
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
    </>
  )
}
