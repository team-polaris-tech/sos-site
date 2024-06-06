'use client'

import { Star } from '@phosphor-icons/react/dist/ssr'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const testimonyList = [
  {
    name: 'Denise PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Denise PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Denise PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Riad PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
  {
    name: 'Laercio PC',
    comment: '"Atendimento muito bom!"',
    stars: 5,
  },
]

export function TestimonyCarousel() {
  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 678px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 1000px)': {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
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
    <div
      ref={sliderRef}
      className="keen-slider max-w-screen-xl overflow-hidden py-16"
    >
      {testimonyList.map((testimony, index) => {
        return (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center gap-4"
          >
            <span className="text-xl text-neutral-500">
              {testimony.comment}
            </span>
            <span className="text-neutral-600">{testimony.name}</span>
            <span className="flex items-center gap-1">
              <Star size={24} className="text-orange-500" weight="fill" />
              <Star size={24} className="text-orange-500" weight="fill" />
              <Star size={24} className="text-orange-500" weight="fill" />
              <Star size={24} className="text-orange-500" weight="fill" />
              <Star size={24} className="text-orange-500" weight="fill" />
            </span>
          </div>
        )
      })}
    </div>
  )
}
