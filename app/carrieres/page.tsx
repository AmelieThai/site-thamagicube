import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from 'lucide-react'

export default function Carrieres() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Carrières chez Thamagicube
      </h1>
      
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Briefcase className="w-6 h-6 text-blue-500" />
            <span>Rejoignez notre équipe</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Chez Thamagicube, nous sommes toujours à la recherche de talents passionnés par l'impression 3D et 
            l'innovation. Rejoignez-nous pour façonner l'avenir de la fabrication additive !
          </p>
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Postes ouverts</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Ingénieur en impression 3D</li>
            <li>Concepteur 3D</li>
            <li>Spécialiste en matériaux</li>
            <li>Technicien de maintenance</li>
            <li>Chargé de projet client</li>
          </ul>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Postuler maintenant
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

