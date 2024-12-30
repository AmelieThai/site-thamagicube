'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'
import { useToast } from "@/components/ui/use-toast"

const products = [
  {
    id: 1,
    name: "Cube Magique 3x3",
    description: "Le classique cube magique 3x3, parfait pour les débutants et les experts.",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 2,
    name: "Puzzle 3D Eiffel Tower",
    description: "Un magnifique puzzle 3D de la Tour Eiffel, idéal pour les amateurs d'architecture.",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 3,
    name: "Set de Figurines Mathématiques",
    description: "Un ensemble de figurines représentant des concepts mathématiques, parfait pour l'éducation.",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 4,
    name: "Cube Magique 4x4",
    description: "Pour ceux qui cherchent un défi supplémentaire, le cube magique 4x4 est parfait.",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200"
  },
]

export default function ProductsPage() {
  const { addToCart, removeFromCart, items } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product)
    toast({
      title: "Produit ajouté",
      description: `${product.name} a été ajouté à votre panier.`,
    })
  }

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId)
    toast({
      title: "Produit retiré",
      description: "Le produit a été retiré de votre panier.",
      variant: "destructive",
    })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Nos Produits
      </h1>
      <p className="text-xl text-gray-300 mb-8 text-center">
        Découvrez notre gamme de produits mathématiques et logiques imprimés en 3D.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => {
          const cartItem = items.find(item => item.id === product.id)
          return (
            <Card key={product.id} className="bg-gray-800 border-gray-700 overflow-hidden group">
              <CardHeader>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <p className="text-gray-300 text-sm">{product.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-500">{product.price.toFixed(2)} €</span>
                <div className="flex items-center space-x-2">
                  {cartItem && (
                    <>
                      <Button variant="outline" size="icon" onClick={() => handleRemoveFromCart(product.id)}>
                        -
                      </Button>
                      <span>{cartItem.quantity}</span>
                    </>
                  )}
                  <Button variant="outline" onClick={() => handleAddToCart(product)}>
                    {cartItem ? '+' : 'Ajouter au panier'}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

