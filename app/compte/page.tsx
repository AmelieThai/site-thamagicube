'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { User, Package, CreditCard, FileText } from 'lucide-react'

interface Quote {
  id: number;
  service: string;
  details: string;
  price: number;
  date: string;
  email: string;
}

export default function Compte() {
  const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null)
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function fetchUserAndQuotes() {
      try {
        const userRes = await fetch('/api/user')
        const quotesRes = await fetch('/api/quotes')
        
        if (userRes.ok && quotesRes.ok) {
          const userData = await userRes.json()
          const quotesData = await quotesRes.json()
          setUser(userData.user)
          setQuotes(quotesData.quotes)
        } else {
          router.push('/login')
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchUserAndQuotes()
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' })
    router.push('/')
  }

  if (loading) {
    return <div>Chargement...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Mon Compte
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-6 h-6 text-blue-500" />
              <span>Informations du Profil</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input 
                  id="name" 
                  value={user.name} 
                  readOnly
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={user.email} 
                  readOnly
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <Button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700">
                Se déconnecter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-blue-500" />
                <span>Historique des Devis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {quotes.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Prix</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Email</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell>{quote.service}</TableCell>
                        <TableCell>À partir de {quote.price.toFixed(2)} €</TableCell>
                        <TableCell>{new Date(quote.date).toLocaleDateString()}</TableCell>
                        <TableCell>{quote.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-gray-300">Vous n'avez pas encore de devis.</p>
              )}
              <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                <Link href="/services">Demander un nouveau devis</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Package className="w-6 h-6 text-blue-500" />
                <span>Mes Commandes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Vous n'avez pas encore de commandes.</p>
              <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
                <Link href="/services">Découvrir nos services</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="w-6 h-6 text-blue-500" />
                <span>Méthodes de Paiement</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Aucune méthode de paiement enregistrée.</p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                Ajouter une méthode de paiement
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

