import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from 'lucide-react'
import Link from 'next/link'

export default function PrototypageRapide() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Prototypage Rapide
      </h1>
      
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-blue-500" />
            <span>Service de Prototypage Rapide</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Notre service de prototypage rapide offre des délais d'exécution courts pour vos besoins en prototypes. 
            Que vous développiez un nouveau produit ou itériez sur un design existant, nos imprimantes 3D de pointe 
            peuvent donner vie à vos idées en un rien de temps.
          </p>
          <p className="text-gray-300 mb-4">
            Avantages du prototypage rapide :
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Itération rapide des designs</li>
            <li>Réduction des coûts de développement</li>
            <li>Tests fonctionnels précoces</li>
            <li>Validation des concepts avant la production</li>
          </ul>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/services/1">Commander maintenant</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

