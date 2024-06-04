import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex  flex-col items-center ">
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
    </div>
  )
}
