import { NextRequest, NextResponse } from 'next/server'

// This is a simple in-memory store. In a real app, you'd use a database.
let users: { id: number; name: string; email: string; password: string }[] = []
let quotes: { id: number; userId: number; service: string; details: string; price: number; date: string; email: string }[] = []

export function createUser(name: string, email: string, password: string) {
  const id = users.length + 1
  users.push({ id, name, email, password })
  return { id, name, email }
}

export function findUser(email: string, password: string) {
  return users.find(user => user.email === email && user.password === password)
}

export function getUserById(id: number) {
  return users.find(user => user.id === id)
}

export function createQuote(userId: number, service: string, details: string, price: number, email: string) {
  const id = quotes.length + 1
  const date = new Date().toISOString()
  const quote = { id, userId, service, details, price, date, email }
  quotes.push(quote)
  return quote
}

export function getQuotesByUserId(userId: number) {
  return quotes.filter(quote => quote.userId === userId)
}

export function authMiddleware(handler: (req: NextRequest, userId: number) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const userId = req.cookies.get('userId')?.value ? parseInt(req.cookies.get('userId')!.value) : null

    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const user = getUserById(userId)
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    return handler(req, userId)
  }
}

