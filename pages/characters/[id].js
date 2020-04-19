import { useRouter } from 'next/router'

const Character = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <section className="antialiased char-cover relative">
      <div className="absolute bottom-0 ml-8 mt-4">
        <img src="https://valorantstats.one/img/characters/Raze_v2.png" alt="" className="h-40 border border-primary rounded" />
      </div>
    </section>
  )
}

export default Character