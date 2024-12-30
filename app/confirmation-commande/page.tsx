import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function ConfirmationCommande() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-center flex flex-col items-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <span className="text-3xl">Commande Confirmée</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-300 mb-4">
            Merci pour votre achat ! Votre commande a été traitée avec succès.
          </p>
          <p className="text-center text-gray-300">
            Un email de confirmation a été envoyé à l'adresse que vous avez fournie.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/">Retour à l'accueil</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

