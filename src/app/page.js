import Title from '@/components/Title'
import Image from 'next/image'

export default function Home() {
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

      <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        <img className='rounded' src="https://place-hold.it/150x220/666" alt="" />
        <span className='font-bold text-center line-clamp-1'>titulo do filme do card</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className='bg-pink-600 py-2 w-full rounded text-center'>
          detalhes
        </a>
      </div>

     <Title>lançamentos</Title>
     <Title>favoritos</Title>
   
    </>
   
  )
}
