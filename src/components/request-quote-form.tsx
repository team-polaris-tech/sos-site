'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const requestQuoteFormSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(1, 'Seu telefone é obrigatório'),
  address: z.string().min(1, 'Endereço é obrigatória'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  quote: z.string().min(1, 'Selecione uma opção'),
  description: z.string().min(1, 'Descreva seu orçamento'),
})
type RequestQuoteFormSchema = z.infer<typeof requestQuoteFormSchema>

export function RequestQuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestQuoteFormSchema>({
    resolver: zodResolver(requestQuoteFormSchema),
  })

  function handleSendQuote(data: RequestQuoteFormSchema) {
    console.log(data)
  }

  return (
    <section className="flex w-full items-start justify-between bg-slate-800 px-6 py-16 lg:bg-transparent">
      <form
        onSubmit={handleSubmit(handleSendQuote)}
        className="flex flex-col gap-3"
      >
        <h2 className="text-3xl font-medium text-orange-500">
          Solicite um orçamento
        </h2>
        <p className="text-xl text-white lg:text-zinc-600">
          Descubra as vantagens exclusivas <br />e economize ao contratar a SOS
          Construir!
        </p>

        <div className="flex w-full flex-col gap-1">
          <label htmlFor="name" className="text-white lg:text-zinc-800">
            Nome
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            placeholder="Digite seu nome"
            className="rounded-lg border border-zinc-700 px-4 py-2"
          />
          <span className="text-sm text-red-500">{errors.name?.message}</span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="name" className="text-white lg:text-zinc-800">
            E-mail
          </label>
          <input
            id="email"
            type="text"
            {...register('email')}
            placeholder="Digite seu e-mail"
            className="rounded-lg border border-zinc-700 px-4 py-2"
          />
          <span className="text-sm text-red-500">{errors.email?.message}</span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="phone" className="text-white lg:text-zinc-800">
            Telefone (WhatsApp)
          </label>
          <input
            id="phone"
            type="text"
            {...register('phone')}
            placeholder="Digite seu e-mail"
            className="rounded-lg border border-zinc-700 px-4 py-2"
          />
          <span className="text-sm text-red-500">{errors.phone?.message}</span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="city" className="text-white lg:text-zinc-800">
            Cidade
          </label>
          <select
            id="city"
            {...register('city')}
            className="rounded-lg border border-zinc-700 px-4 py-2"
          >
            <option value="Foz do Iguaçu">Foz do Iguaçu</option>
            <option value="Curitiba">Curitiba</option>
          </select>
          <span className="text-sm text-red-500">{errors.city?.message}</span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="address" className="text-white lg:text-zinc-800">
            Endereço
          </label>
          <input
            id="address"
            type="text"
            {...register('address')}
            placeholder="Digite seu e-mail"
            className="rounded-lg border border-zinc-700 px-4 py-2"
          />
          <span className="text-sm text-red-500">
            {errors.address?.message}
          </span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="quote" className="text-white lg:text-zinc-800">
            Orçamento para
          </label>
          <select
            id="quote"
            {...register('quote')}
            className="rounded-lg border border-zinc-700 px-4 py-2"
          >
            <option value="ar condicionado">Ar condicionado</option>
            <option value="eletricista">Eletricista</option>
          </select>
          <span className="text-sm text-red-500">{errors.quote?.message}</span>
        </div>
        <div className="flex w-full flex-col gap-1">
          <label htmlFor="description" className="text-white lg:text-zinc-800">
            Descreva seu orçamento
          </label>
          <textarea
            id="description"
            {...register('description')}
            placeholder="Descreva seu orçamento"
            className="h-40 rounded-lg border border-zinc-700 px-4 py-2"
          />
          <span className="text-sm text-red-500">
            {errors.description?.message}
          </span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 py-4 text-white transition-colors hover:bg-orange-600"
        >
          Solicitar orçamento
        </button>
      </form>
      <Image
        src="/orcamento.png"
        alt=""
        width={400}
        height={400}
        className="hidden lg:flex"
      />
    </section>
  )
}
