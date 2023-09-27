"use client"

import { useRouter } from 'next/navigation'
import { serverLogout } from '@/actions/user'

export default function NavBar(){
    const { push } = useRouter()
    
    function handleLogout(){
        serverLogout()
        push("/login")
    }

    return(
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

            <button onClick={handleLogout}>logout</button>
        
      </nav>
    )
}