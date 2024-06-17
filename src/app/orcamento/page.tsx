import { RequestQuoteForm } from '@/components/request-quote-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orçamento',
}

export default function Orcamento() {
  return <RequestQuoteForm />
}
