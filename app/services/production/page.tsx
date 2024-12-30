import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers } from 'lucide-react'
import Link from 'next/link'

export default function ProductionEnSerie() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Production en Série
      </h1>
      
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Layers className="w-6 h-6 text-blue-500" />
            <span>Service de Production en Série</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Notre service de production en série est conçu pour répondre à vos besoins de fabrication à grande échelle. 
            Nous offrons des capacités d'impression 3D à haut volume, assurant une qualité constante sur de grandes 
            quantités de pièces ou de produits.
          </p>
          <p className="text-gray-300 mb-4">
            Avantages de la production en série :
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Économies d'échelle</li>
            <li>Qualité constante</li>
            <li>Personnalisation de masse</li>
            <li>Délais de production réduits</li>
          </ul>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services/2">Commander maintenant</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

