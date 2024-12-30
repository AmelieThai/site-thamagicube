import { NextRequest, NextResponse } from 'next/server'
import { authMiddleware, getQuotesByUserId } from '@/lib/auth'

async function handler(req: NextRequest, userId: number) {
  const quotes = getQuotesByUserId(userId)
  return NextResponse.json({ success: true, quotes })
}

export const GET = authMiddleware(handler)

