import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollText } from 'lucide-react'

export default function ConditionsUtilisation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Conditions d'Utilisation
      </h1>
      
      <Card className="bg-gray-800 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ScrollText className="w-6 h-6 text-blue-500" />
            <span>Conditions d'Utilisation de Thamagicube</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-4">
            Bienvenue sur Thamagicube. En utilisant notre site et nos services, vous acceptez les conditions suivantes :
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-4">
            <li>
              <strong>Utilisation du service :</strong> Vous vous engagez à utiliser notre service uniquement à des fins légales et conformément à ces conditions.
            </li>
            <li>
              <strong>Propriété intellectuelle :</strong> Tout le contenu présent sur ce site est la propriété de Thamagicube, sauf indication contraire.
            </li>
            <li>
              <strong>Commandes et paiements :</strong> En passant une commande, vous vous engagez à fournir des informations précises et à effectuer le paiement dans les délais convenus.
            </li>
            <li>
              <strong>Confidentialité :</strong> Nous respectons votre vie privée. Veuillez consulter notre politique de confidentialité pour plus d'informations.
            </li>
            <li>
              <strong>Limitation de responsabilité :</strong> Thamagicube ne peut être tenu responsable des dommages indirects résultant de l'utilisation de nos services.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

