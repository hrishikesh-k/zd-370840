import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = await fetch(`https://www.netlify.com/${req.nextUrl.pathname.replace('/-/media/', '')}`)
  const headers = new Headers(res.headers)
  headers.set('x-robots-tag', 'follow, index')
  return new NextResponse(res.body, {
    headers,
    status: res.status
  })
}

export const config = {
  matcher: '/-/media/:path*'
}
