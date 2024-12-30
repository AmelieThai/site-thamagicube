import { NextResponse } from 'next/server'
import { createUser } from '@/lib/users'

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  if (!name || !email || !password) {
    return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
  }

  try {
    const user = await createUser(name, email, password)
    const response = NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } })
    response.cookies.set('userId', user.id.toString(), { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    return response
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json({ success: false, message: 'Error creating user' }, { status: 500 })
  }
}

