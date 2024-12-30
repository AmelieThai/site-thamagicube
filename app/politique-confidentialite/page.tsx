import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield } from 'lucide-react'

export default function PolitiqueConfidentialite() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Politique de Confidentialité
      </h1>
      
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span>Politique de Confidentialité de Thamagicube</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Chez Thamagicube, nous prenons très au sérieux la protection de vos données personnelles. 
            Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Collecte d'informations</h2>
          <p className="text-gray-300 mb-4">
            Nous collectons les informations que vous nous fournissez lors de la création d'un compte, 
            de la passation d'une commande ou de l'utilisation de nos services.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Utilisation des informations</h2>
          <p className="text-gray-300 mb-4">
            Nous utilisons vos informations pour traiter vos commandes, améliorer nos services et 
            vous contacter concernant votre compte ou nos offres.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Protection des données</h2>
          <p className="text-gray-300 mb-4">
            Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations 
            contre tout accès non autorisé ou toute modification, divulgation ou destruction.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

