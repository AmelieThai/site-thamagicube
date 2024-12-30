import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CuboidIcon as Cube3d, Zap, Layers, Cog } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Prototypage Rapide",
    description: "Délais rapides pour vos besoins en prototypes",
    icon: Zap,
    price: 5
  },
  {
    id: 2,
    title: "Production en Série",
    description: "Impression 3D à haut volume pour la fabrication",
    icon: Layers,
    price: 10
  },
  {
    id: 3,
    title: "Projets Personnalisés",
    description: "Solutions d'impression 3D sur mesure pour des besoins uniques",
    icon: Cog,
    price: 15
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Bienvenue chez Thamagicube
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Découvrez l'avenir de la fabrication avec nos services d'impression 3D de pointe
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/services">Explorez Nos Services</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Services</h2>
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
                <span className="text-2xl font-bold text-blue-500">À partir de {service.price.toFixed(2)} €</span>
                <Button asChild variant="outline">
                  <Link href={`/services/${service.id}`}>En savoir plus</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

