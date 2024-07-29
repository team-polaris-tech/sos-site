'use client'

import Image from 'next/image'
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

interface CarouselItem {
  src?: string
  alt?: string
  name?: string
  comment?: string
  stars?: number
}

interface CarouselProps {
  items: CarouselItem[]
  type: 'testimony' | 'service'
  showArrows?: boolean
  perView?: number
}

export function Carousel({
  items,
  type,
  showArrows = false,
  perView = 1,
}: CarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        '(min-width: 678px)': {
          slides: { perView: Math.min(perView, 2), spacing: 5 },
        },
        '(min-width: 1000px)': {
          slides: { perView: Math.min(perView, 3), spacing: 10 },
        },
      },
      slides: { perView },
      loop: true,
    },
    [
      (slider) => {
        let timeout: string | number | NodeJS.Timeout | undefined
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <div className="relative mx-auto max-w-screen-xl py-16">
      <div ref={sliderRef} className="keen-slider overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center justify-center gap-4"
          >
            {type === 'service' ? (
              <Image
                src={item.src!}
                alt={item.alt!}
                width={400}
                height={300}
                objectFit="cover"
                quality={100}
              />
            ) : (
              <>
                <span className="text-xl text-neutral-500">{item.comment}</span>
                <span className="text-neutral-600">{item.name}</span>
                <span className="flex items-center gap-1">
                  {Array.from({ length: item.stars! }).map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className="text-orange-500"
                      weight="fill"
                    />
                  ))}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      {showArrows && (
        <>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
            <button onClick={() => instanceRef.current?.prev()}>
              <CaretLeft size={64} color="#EA580C" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
            <button onClick={() => instanceRef.current?.next()}>
              <CaretRight size={64} color="#EA580C" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
