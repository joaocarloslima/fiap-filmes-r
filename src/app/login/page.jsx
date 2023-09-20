"use client"

import Image from "next/image";
import loginimage from "@/images/login.jpg"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { push } = useRouter()

    function login(e){
        e.preventDefault()
        if (email == "joao@fiap.com.br" && senha=="123"){
            push("/")
        }else{
            toast.error("dados inválidos")
        }
    }

    return(
        <div className="flex">
            <aside className="hidden lg:flex h-screen">
                <Image src={loginimage} className="h-auto w-auto object-cover" />
            </aside>
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2>Fiap Filmes</h2>
                <form onSubmit={login} className="flex flex-col gap-2">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-slate-600 p-1 rounded" 
                    />
                    
                    <label htmlFor="password">Senha</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="bg-slate-600 p-1 rounded"/>
                    
                    <button className="bg-pink-600 p-2 rounded mt-2">entrar</button>
                </form>
            </main>
        </div>
    )
}