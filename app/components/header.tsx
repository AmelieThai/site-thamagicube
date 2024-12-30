'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CuboidIcon as Cube3d, User, ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartCount } = useCart()

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Cube3d className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Thamagicube
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink href="/produits">Produits</NavLink>
          <NavLink href="/services">Services à la demande</NavLink>
          <NavLink href="/mathematiques-et-3d">Maths & 3D</NavLink>
          <NavLink href="/a-propos">À propos</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/compte">
            <User className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
          </Link>
          <Link href="/panier" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
            {getCartCount() > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                {getCartCount()}
              </Badge>
            )}
          </Link>
          <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/register" className="text-gray-300 hover:text-white transition-colors">
            Register
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 space-y-2"
        >
          <NavLink href="/produits" mobile>Produits</NavLink>
          <NavLink href="/services" mobile>Services à la demande</NavLink>
          <NavLink href="/mathematiques-et-3d" mobile>Maths & 3D</NavLink>
          <NavLink href="/a-propos" mobile>À propos</NavLink>
          <NavLink href="/contact" mobile>Contact</NavLink>
          <NavLink href="/login" mobile>Login</NavLink>
          <NavLink href="/register" mobile>Register</NavLink>
        </motion.div>
      )}
    </header>
  )
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <Link href={href} className={`${mobile ? 'block' : ''} text-gray-300 hover:text-white transition-colors relative group`}>
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-100"
        initial={false}
        animate={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
      />
    </Link>
  )
}

