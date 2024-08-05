'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import FeatureServices from '../feature-services'
import { FeatureData } from '../../app/types/interface'

interface CarouselProps {
  items: FeatureData[]
  perView: number
  spacing?: number
  loop?: boolean
  breakpoints?: {
    [key: string]: {
      slides: {
        perView: number
        spacing: number
      }
      mode?: 'snap' | 'free'
    }
  }
  showArrows?: boolean
}

export function Carousel({
  items,
  perView,
  spacing = 10,
  loop = true,
  breakpoints,
  showArrows = true,
}: CarouselProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView, spacing },
    loop,
    breakpoints,
  })

  const handlePrevClick = () => {
    slider.current?.prev()
  }

  const handleNextClick = () => {
    slider.current?.next()
  }

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center"
          >
            <FeatureServices
              iconPosition={item.iconPosition || 'column'}
              icon={item.icon}
              title={item.title}
              description={item.description}
              showLink={item.showLink}
            />
          </div>
        ))}
      </div>
      {showArrows && (
        <>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
            <button onClick={handlePrevClick}>
              <CaretLeft className="text-orange-500" size={32} />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
            <button onClick={handleNextClick}>
              <CaretRight className="text-orange-500" size={32} />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
