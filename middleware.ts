import { type NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = await fetch(`https://www.netlify.com/${req.nextUrl.pathname.replace('/-/media/', '')}`)
  const headers = res.headers
  headers.set('x-robbots-tag', 'follow, index')
  return new NextResponse(res.body, {
    headers,
    status: res.status
  })
}

export const config = {
  matcher: '/-/media/:path*'
}