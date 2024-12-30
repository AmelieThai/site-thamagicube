import { NextResponse } from 'next/server'
import { findUser } from '@/lib/auth'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
  }

  const user = findUser(email, password)

  if (!user) {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
  }
  
  const response = NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } })
  response.cookies.set('userId', user.id.toString(), { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
  
  return response
}

