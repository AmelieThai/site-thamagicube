import { NextRequest, NextResponse } from 'next/server'
import { authMiddleware, getUserById } from '@/lib/auth'

async function handler(req: NextRequest, userId: number) {
  const user = getUserById(userId)
  if (!user) {
    return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 })
  }
  return NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email } })
}

export const GET = authMiddleware(handler)

