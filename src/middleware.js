import { NextResponse } from "next/server";

export function middleware(request) {
    if (!request.cookies.has("usuario"))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: '/:path',
}