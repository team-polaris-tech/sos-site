import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

export default function SearchInput() {
  return (
    <div className="relative hidden w-full lg:block lg:w-1/4">
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-full rounded-md border py-2 pl-10 pr-4 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <MagnifyingGlass
        size={24}
        className="absolute left-2 top-1/2 -translate-y-1/2 transform text-black opacity-40"
      />
    </div>
  )
}
