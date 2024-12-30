'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PiIcon, FunctionSquare, CuboidIcon as Cube } from 'lucide-react'

export default function MathematiquesEt3D() {
  const [quizAnswer, setQuizAnswer] = useState('')
  const [quizResult, setQuizResult] = useState<string | null>(null)

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const correctAnswer = '3.14159'
    if (quizAnswer === correctAnswer) {
      setQuizResult('Correct ! π est en effet approximativement égal à 3.14159.')
    } else {
      setQuizResult(`Désolé, ce n'est pas correct. La valeur approximative de π est 3.14159.`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Les Mathématiques et l'Impression 3D
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FunctionSquare className="w-6 h-6 text-blue-500" />
              <span>Géométrie et Topologie</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              La géométrie et la topologie sont essentielles à l'impression 3D. Elles nous permettent de décrire et de manipuler 
              des formes complexes dans l'espace tridimensionnel. Les concepts clés incluent :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Surfaces et volumes</li>
              <li>Transformations géométriques</li>
              <li>Maillages polygonaux</li>
              <li>Courbes de Bézier et splines</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Cube className="w-6 h-6 text-blue-500" />
              <span>Algèbre linéaire</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              L'algèbre linéaire est fondamentale pour la modélisation 3D et les transformations d'objets. Elle est utilisée pour :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Représenter et transformer des objets 3D</li>
              <li>Calculer des normales et des intersections</li>
              <li>Optimiser les trajectoires d'impression</li>
              <li>Résoudre des systèmes d'équations pour l'analyse structurelle</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700 mb-12">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <PiIcon className="w-6 h-6 text-blue-500" />
            <span>L'importance de π dans l'impression 3D</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            π (pi) joue un rôle crucial dans de nombreux aspects de l'impression 3D, notamment :
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Calcul des volumes et surfaces des objets cylindriques ou sphériques</li>
            <li>Détermination des trajectoires circulaires pour les buses d'impression</li>
            <li>Optimisation de la densité de remplissage des objets imprimés</li>
          </ul>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Quiz : Connaissez-vous π ?</h3>
            <form onSubmit={handleQuizSubmit} className="space-y-4">
              <div>
                <Label htmlFor="piValue">Quelle est la valeur approximative de π à 5 décimales près ?</Label>
                <Input 
                  id="piValue" 
                  value={quizAnswer} 
                  onChange={(e) => setQuizAnswer(e.target.value)}
                  className="bg-gray-700 border-gray-600"
                  placeholder="Entrez votre réponse"
                />
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Vérifier
              </Button>
            </form>
            {quizResult && (
              <p className="mt-4 text-gray-300">{quizResult}</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Application des mathématiques dans nos services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Chez Thamagicube, nous utilisons des concepts mathématiques avancés pour optimiser nos processus d'impression 3D :
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Algorithmes de tranchage basés sur des principes géométriques pour une qualité d'impression optimale</li>
            <li>Optimisation topologique pour créer des structures légères mais solides</li>
            <li>Analyse par éléments finis pour prédire et améliorer les performances mécaniques des pièces imprimées</li>
            <li>Modélisation paramétrique pour une personnalisation rapide et précise des designs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

