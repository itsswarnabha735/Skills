import { NextRequest, NextResponse } from 'next/server'

// Password for investor access - in production, use environment variable
const SITE_PASSWORD = process.env.SITE_PASSWORD || 'butterpath2024'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (password === SITE_PASSWORD) {
      const response = NextResponse.json({ success: true })
      
      // Set HTTP-only cookie that expires in 7 days
      response.cookies.set('site_access', 'granted', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })

      return response
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}


