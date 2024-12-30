import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Layers, Cog } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Prototypage Rapide",
    description: "Délais rapides pour vos besoins en prototypes",
    icon: Zap,
    price: 99.99,
    link: "/services/prototypage"
  },
  {
    id: 2,
    title: "Production en Série",
    description: "Impression 3D à haut volume pour la fabrication",
    icon: Layers,
    price: 499.99,
    link: "/services/production"
  },
  {
    id: 3,
    title: "Projets Personnalisés",
    description: "Solutions d'impression 3D sur mesure pour des besoins uniques",
    icon: Cog,
    price: 299.99,
    link: "/services/projets-personnalises"
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Nos Services d'Impression 3D
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="bg-gray-800 border-gray-700 overflow-hidden group">
            <CardHeader className="relative">
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{service.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-500">{service.price.toFixed(2)} €</span>
              <Button asChild variant="outline">
                <Link href={service.link}>En savoir plus</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

