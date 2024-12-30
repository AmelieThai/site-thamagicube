import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Ici, vous implémenteriez la logique pour sauvegarder le message
  // Par exemple, l'envoyer à une base de données ou un service externe
  console.log('Message reçu:', data)

  // Simulons un délai pour imiter une opération asynchrone
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
}

