import CardFilme from '@/components/CardFilme'
import Title from '@/components/Title'

export default function Home() {
  const filmes = [
    {
      titulo: "Megatubarão 2",
      nota: 6.2,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
    },
    {
      titulo: "Barbie",
      nota: 7.5,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ]

  return ( //JSX
    <>
      <nav className="bg-slate-900 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">Fiap Filmes</h1></a></li>
        </ul>
        <ul>
          <li><a href="#">favoritos</a></li>
        </ul>
        <ul>
          <li><a href="#">filmes</a></li>
        </ul>
        
      </nav>

     <Title>em alta</Title>

      <section className='flex flex-wrap'>
        {filmes.map(filme => <CardFilme filme={filme} /> )}
      </section>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}
