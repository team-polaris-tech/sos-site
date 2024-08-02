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
  perView: number
}

export function ServiceCarousel({
  items,
  type,
  showArrows = false,
  perView,
}: CarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        '(max-width: 678px)': {
          slides: { perView: 1, spacing: 5 },
        },
        '(min-width: 679px)': {
          slides: { perView, spacing: 10 },
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
                quality={100}
                priority
                layout="responsive"
                className="object-cover"
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
          <div className="absolute -left-7 top-1/2 -translate-y-1/2 transform md:-left-20 lg:-left-28">
            <button onClick={() => instanceRef.current?.prev()}>
              <CaretLeft
                className="md:size-16 lg:size-16"
                color="#EA580C"
                size={32}
              />
            </button>
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 transform md:-right-20 lg:-right-28">
            <button onClick={() => instanceRef.current?.next()}>
              <CaretRight
                className="md:size-16 lg:size-16"
                color="#EA580C"
                size={32}
              />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
