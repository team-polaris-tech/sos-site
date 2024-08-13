import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

interface SearchInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Pesquisar"
        value={value}
        onChange={onChange}
        className="rounded-md border py-2 pl-10 pr-4 text-black placeholder-black focus:outline-none focus:ring-0"
      />
      <MagnifyingGlass
        size={24}
        className="absolute left-2 top-1/2 -translate-y-1/2 transform text-black opacity-40"
      />
    </div>
  )
}
