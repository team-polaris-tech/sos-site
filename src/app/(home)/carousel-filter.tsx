import { useState, useEffect } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

const serviceImages = [
  { src: '/eletrecista.jpg', alt: 'Eletrecista' },
  { src: '/arquiteto-exemplo.jpg', alt: 'Arquiteto' },
  { src: '/pedreiro.jpg', alt: 'Pedreiro' },
  { src: '/pintor.jpeg', alt: 'Pintor' },
  {
    src: '/instalacao-ar-condicionado.jpg',
    alt: 'Instalação de ar condicionado',
  },
  { src: '/engenheiro.png', alt: 'Engenheiro' },
]

interface CarouselFilterProps {
  searchTerm: string
}

export function CarouselFilter({ searchTerm }: CarouselFilterProps) {
  const [filteredImages, setFilteredImages] = useState(serviceImages)

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase()
    const filteredData = serviceImages.filter((item) =>
      item.alt.toLowerCase().includes(lowercasedFilter),
    )
    setFilteredImages(filteredData)
  }, [searchTerm])

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 6, spacing: 0 },
    loop: true,
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 2, spacing: 0 },
      },
    },
  })

  return (
    <div className="relative mx-auto lg:max-w-screen-xl">
      <div className="keen-slider relative w-full" ref={sliderRef}>
        {filteredImages.map((feature, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center p-4 lg:p-2"
          >
            <Image
              src={feature.src}
              alt={feature.alt}
              width={200}
              height={200}
              quality={100}
              priority
              className="rounded-lg border border-orange-500 object-cover"
            />
          </div>
        ))}
        <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 transform lg:block">
          <button onClick={() => instanceRef.current?.prev()}>
            <CaretLeft className="text-orange-500" size={32} />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 transform lg:block">
          <button onClick={() => instanceRef.current?.next()}>
            <CaretRight className="text-orange-500" size={32} />
          </button>
        </div>
      </div>
    </div>
  )
}
