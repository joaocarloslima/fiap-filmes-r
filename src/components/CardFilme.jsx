"use client"

import { HeartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function CardFilme({filme}){
    const [favorito, setFavorito] = useState(true)

    return (
        <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
            { favorito ? 
                <HeartIcon onClick={() => setFavorito(false)} className="h-6 w-6 text-rose-600 cursor-pointer " />
            :
                <HeartIcon onClick={() => setFavorito(true)}  className="h-6 w-6 text-slate-100 cursor-pointer" />
            }
            <img className='rounded' src={filme.poster} alt="" />
            <span className='font-bold text-center line-clamp-1'>
                {filme.titulo}
            </span>
            <div>
                <span>{filme.nota}</span>
            </div>
            <a href="#" className='bg-pink-600 py-2 w-full rounded text-center'>
                detalhes
            </a>
        </div>
    )
}