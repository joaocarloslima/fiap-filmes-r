"use client"

import useFavorito from '@/hooks/filmes'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function CardFilme({filme}){
    const { favorito, desfavoritar, favoritar } = useFavorito()
    
    const url_imagem = `https://image.tmdb.org/t/p/w200/${filme.poster_path}`

    return (
        <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
            { favorito ? 
                <HeartIcon onClick={() => desfavoritar(filme)} className="h-6 w-6 text-rose-600 cursor-pointer " />
            :
                <HeartIcon onClick={() => favoritar(filme)}  className="h-6 w-6 text-slate-100 cursor-pointer" />
            }
            <img className='rounded' src={url_imagem} alt="" />
            <span className='font-bold text-center line-clamp-1'>
                {filme.title}
            </span>
            <div>
                <span>{filme.vote_average.toFixed(1)}</span>
            </div>
            <a href="#" className='bg-pink-600 py-2 w-full rounded text-center'>
                detalhes
            </a>
        </div>
    )
}