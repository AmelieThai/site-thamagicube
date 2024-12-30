import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube3d, Zap, Users, Globe } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        À Propos de Thamagicube
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cube3d className="w-6 h-6 text-blue-500" />
              <span>Notre Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Chez Thamagicube, notre mission est de démocratiser l'accès à l'impression 3D de haute qualité. 
              Nous croyons que cette technologie a le potentiel de révolutionner la façon dont nous concevons, 
              produisons et consommons les produits.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-blue-500" />
              <span>Notre Technologie</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Nous utilisons les dernières avancées en matière d'impression 3D, y compris la stéréolithographie (SLA), 
              le frittage sélectif par laser (SLS) et la modélisation par dépôt de fil en fusion (FDM). 
              Cela nous permet d'offrir une large gamme de matériaux et de finitions pour répondre à tous les besoins.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-blue-500" />
              <span>Notre Équipe</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Notre équipe est composée d'experts passionnés en impression 3D, d'ingénieurs en matériaux 
              et de designers créatifs. Ensemble, nous travaillons pour repousser les limites de ce qui est 
              possible avec l'impression 3D.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-blue-500" />
              <span>Notre Impact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Nous nous engageons à réduire notre empreinte environnementale en utilisant des matériaux 
              durables et en optimisant nos processus de production. Notre objectif est de contribuer à 
              un avenir plus durable grâce à l'innovation dans l'impression 3D.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

