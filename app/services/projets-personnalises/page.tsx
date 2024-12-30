import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cog } from 'lucide-react'
import Link from 'next/link'

export default function ProjetsPersonnalises() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Projets Personnalisés
      </h1>
      
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cog className="w-6 h-6 text-blue-500" />
            <span>Service de Projets Personnalisés</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Notre service de projets personnalisés est parfait pour les besoins uniques qui ne rentrent pas dans 
            les catégories standard. Notre équipe d'experts travaillera en étroite collaboration avec vous pour 
            comprendre vos exigences et livrer des résultats exceptionnels.
          </p>
          <p className="text-gray-300 mb-4">
            Ce que nous offrons :
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Consultation personnalisée</li>
            <li>Développement de solutions sur mesure</li>
            <li>Utilisation de matériaux spéciaux</li>
            <li>Suivi de projet dédié</li>
          </ul>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services/3">Commander maintenant</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

