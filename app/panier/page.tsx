'use client'

import { useCart } from '../contexts/CartContext'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  const { items, removeFromCart, addToCart, clearCart, getCartTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Votre Panier
        </h1>
        <p className="text-xl text-gray-300 mb-8">Votre panier est vide.</p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/produits">Découvrir nos produits</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Votre Panier
      </h1>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle>Articles dans votre panier</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produit</TableHead>
                <TableHead>Quantité</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Total</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="flex items-center space-x-2">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} width={50} height={50} className="rounded-md" />
                    <span>{item.name}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" onClick={() => removeFromCart(item.id)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button variant="outline" size="icon" onClick={() => addToCart(item)}>+</Button>
                    </div>
                  </TableCell>
                  <TableCell>{item.price.toFixed(2)} €</TableCell>
                  <TableCell>{(item.price * item.quantity).toFixed(2)} €</TableCell>
                  <TableCell>
                    <Button variant="ghost" onClick={() => removeFromCart(item.id)} className="p-0">
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-500">
            Total: {getCartTotal().toFixed(2)} €
          </div>
          <div className="space-x-2">
            <Button variant="outline" onClick={clearCart}>
              Vider le panier
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/paiement">Passer à la caisse</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

