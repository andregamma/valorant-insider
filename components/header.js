import Link from 'next/link'

const links = [
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
]

export default function Nav() {
  return (
    <div className="hero">
      <div className="text-white hero-module">
        <div className="flex flex-col justify-end mx-4 text-justify md:mx-0 md:w-3/4 lg:justify-center">
          <h6 className="text-3xl font-bold leading-5 uppercase">Valorant Insider</h6>
          <p className="mt-4 text-sm font-semibold">O primeiro e maior portal de Valorant no Brasil!</p>
          <p className="mt-4 text-sm font-semibold">Encontre dicas, informações, vídeos e muito mais. Contribua com a comunidade criando suas próprias estratégias e compartilhando-as conosco.</p>
        </div>
      </div>
    </div>
  )
}
