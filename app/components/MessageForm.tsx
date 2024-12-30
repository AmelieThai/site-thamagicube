'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function MessageForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sendResult, setSendResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)
    setSendResult(null)

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (data.success) {
        setSendResult('Message envoyé avec succès!')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setSendResult('Erreur lors de l\'envoi du message. Veuillez réessayer.')
      }
    } catch (error) {
      setSendResult('Une erreur est survenue. Veuillez réessayer plus tard.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-white">Envoyez-nous un message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div>
            <Textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-gray-700 border-gray-600 text-white"
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isSending} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {isSending ? 'Envoi en cours...' : 'Envoyer'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {sendResult && (
          <p className={`text-center w-full ${sendResult.includes('succès') ? 'text-green-500' : 'text-red-500'}`}>
            {sendResult}
          </p>
        )}
      </CardFooter>
    </Card>
  )
}

