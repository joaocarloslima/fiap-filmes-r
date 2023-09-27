"use server"

import { cookies } from 'next/headers'

export async function serverLogin(){ 
    cookies().set("usuario", "joao", {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
    })
}

export async function serverLogout(){
    cookies().delete("usuario")
}