import Link from 'next/link'
import { CuboidIcon as Cube3d } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Cube3d className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Thamagicube
            </span>
          </Link>
          <p className="text-sm">Services d'impression 3D de pointe pour tous vos besoins</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/prototypage" className="hover:text-white transition-colors">Prototypage Rapide</Link></li>
            <li><Link href="/services/production" className="hover:text-white transition-colors">Production en Série</Link></li>
            <li><Link href="/services/projets-personnalises" className="hover:text-white transition-colors">Projets Personnalisés</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
          <ul className="space-y-2">
            <li><Link href="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link href="/carrieres" className="hover:text-white transition-colors">Carrières</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Légal</h3>
          <ul className="space-y-2">
            <li><Link href="/conditions-utilisation" className="hover:text-white transition-colors">Conditions d'Utilisation</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        © {new Date().getFullYear()} Thamagicube. Tous droits réservés.
      </div>
    </footer>
  )
}

