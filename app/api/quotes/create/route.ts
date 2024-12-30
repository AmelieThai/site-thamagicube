import { NextRequest, NextResponse } from 'next/server'
import { authMiddleware, createQuote } from '@/lib/auth'

async function handler(req: NextRequest, userId: number) {
  const { service, details, price, email } = await req.json()

  if (!service || !details || typeof price !== 'number' || !email) {
    return NextResponse.json({ success: false, message: 'Invalid quote data' }, { status: 400 })
  }

  const quote = createQuote(userId, service, details, price, email)
  return NextResponse.json({ success: true, quote })
}

export const POST = authMiddleware(handler)

