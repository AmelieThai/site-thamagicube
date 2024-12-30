'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Zap, Layers, Cog } from 'lucide-react'
import { toast } from "@/components/ui/use-toast"

const services = [
  {
    id: 1,
    title: "Prototypage Rapide",
    description: "Notre service de prototypage rapide offre des délais d'exécution courts pour vos besoins en prototypes. Que vous développiez un nouveau produit ou itériez sur un design existant, nos imprimantes 3D de pointe peuvent donner vie à vos idées en un rien de temps.",
    icon: Zap,
    price: 5
  },
  {
    id: 2,
    title: "Production en Série",
    description: "Lorsque vous êtes prêt à passer à l'échelle supérieure, notre service de production en série est là pour vous aider. Nous offrons des capacités d'impression 3D à haut volume pour la fabrication, assurant une qualité constante sur de grandes quantités de pièces ou de produits.",
    icon: Layers,
    price: 10
  },
  {
    id: 3,
    title: "Projets Personnalisés",
    description: "Pour des besoins uniques qui ne rentrent pas dans les catégories standard, notre service de projets personnalisés fournit des solutions d'impression 3D sur mesure. Notre équipe d'experts travaillera en étroite collaboration avec vous pour comprendre vos besoins et livrer des résultats exceptionnels.",
    icon: Cog,
    price: 15
  },
]

export default function ServiceDetail() {
  const params = useParams()
  const router = useRouter()
  const serviceId = parseInt(params.id as string)
  const service = services.find(s => s.id === serviceId)

  const [quantity, setQuantity] = useState(1)
  const [specifications, setSpecifications] = useState('')
  const [email, setEmail] = useState('')

  if (!service) {
    return <div>Service non trouvé</div>
  }

  const handleOrder = async () => {
    if (!email) {
      toast({
        title: "Erreur",
        description: "Veuillez fournir une adresse e-mail valide.",
        variant: "destructive",
      })
      return
    }

    try {
      const response = await fetch('/api/quotes/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: service.title,
          details: specifications,
          price: service.price * quantity,
          email,
        }),
      })

      if (response.ok) {
        toast({
          title: "Devis créé",
          description: "Votre demande de devis a été envoyée avec succès. Vous recevrez bientôt un e-mail avec les détails.",
        })
        router.push('/compte')
      } else {
        throw new Error('Erreur lors de la création du devis')
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la création du devis. Veuillez réessayer.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <service.icon className="w-12 h-12 text-blue-500" />
            <CardTitle className="text-3xl">{service.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-6">{service.description}</p>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Adresse e-mail</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-700 border-gray-600"
                placeholder="votre@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="quantity">Quantité</Label>
              <Input 
                id="quantity" 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="bg-gray-700 border-gray-600"
              />
            </div>
            <div>
              <Label htmlFor="specifications">Spécifications</Label>
              <Textarea 
                id="specifications" 
                value={specifications} 
                onChange={(e) => setSpecifications(e.target.value)}
                className="bg-gray-700 border-gray-600"
                placeholder="Entrez toutes les exigences ou détails spécifiques pour votre commande"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-500">
            À partir de : {(service.price * quantity).toFixed(2)} €
          </div>
          <Button onClick={handleOrder} className="bg-blue-600 hover:bg-blue-700">
            Demander un devis
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

