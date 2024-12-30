import MessageForm from '../components/MessageForm'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Contactez-nous
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MessageForm />

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle>Nos Coordonnées</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-blue-500" />
              <span>contact@thamagicube.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6 text-blue-500" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span>123 Rue de l'Innovation, 75001 Paris, France</span>
            </div>
          </CardContent>
          <CardContent>
            <div className="w-full h-64 bg-gray-700 rounded-lg">
              {/* Ici, vous intégreriez normalement une carte interactive */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Carte interactive
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

