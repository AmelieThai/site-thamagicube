'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '../contexts/CartContext'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Image from 'next/image'

export default function Paiement() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [adresse, setAdresse] = useState('')
  const [isRevolutPaymentInProgress, setIsRevolutPaymentInProgress] = useState(false)

  const { getCartTotal, clearCart } = useCart()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler un paiement réussi
    toast({
      title: "Paiement réussi",
      description: "Votre commande a été traitée avec succès.",
    })
    clearCart()
    router.push('/confirmation-commande')
  }

  const handleRevolutPayment = async () => {
    setIsRevolutPaymentInProgress(true)
    // Simuler une requête à l'API Revolut
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsRevolutPaymentInProgress(false)
    toast({
      title: "Paiement Revolut réussi",
      description: "Votre paiement via Revolut a été traité avec succès.",
    })
    clearCart()
    router.push('/confirmation-commande')
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Paiement
      </h1>

      <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Informations de paiement</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="nom">Nom</Label>
              <Input id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required className="bg-gray-700 border-gray-600 text-white" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-gray-700 border-gray-600 text-white" />
            </div>
            <div>
              <Label htmlFor="adresse">Adresse</Label>
              <Input id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} required className="bg-gray-700 border-gray-600 text-white" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch space-y-4">
          <div className="text-2xl font-bold text-blue-500 text-center">
            Total: {getCartTotal().toFixed(2)} €
          </div>
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700">
            Payer par carte bancaire
          </Button>
          <Button 
            onClick={handleRevolutPayment} 
            className="bg-[#0075EB] hover:bg-[#005bb8] flex items-center justify-center space-x-2"
            disabled={isRevolutPaymentInProgress}
          >
            <Image src="/revolut-logo.svg" alt="Revolut Logo" width={20} height={20} />
            <span>{isRevolutPaymentInProgress ? 'Traitement en cours...' : 'Payer avec Revolut'}</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

