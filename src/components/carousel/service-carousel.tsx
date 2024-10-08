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
  imageSize?: number
}

export function ServiceCarousel({
  items,
  type,
  showArrows = false,
  perView,
  imageSize = 200,
}: CarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      breakpoints: {
        '(max-width: 767px)': {
          slides: { perView: 1, spacing: 0 },
        },
        '(min-width: 769px)': {
          slides: { perView, spacing: 0 },
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
    <div className="relative mx-auto w-full max-w-screen-md py-16 lg:max-w-screen-xl">
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
                width={imageSize}
                height={imageSize}
                quality={100}
                priority
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
          <div className="absolute left-0 top-1/2 -translate-y-1/2 transform ">
            <button onClick={() => instanceRef.current?.prev()}>
              <CaretLeft
                className="md:size-16 lg:size-16"
                color="#EA580C"
                size={32}
              />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
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
