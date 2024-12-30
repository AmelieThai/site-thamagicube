import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import { CartProvider } from './contexts/CartContext'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Thamagicube - Services d\'Impression 3D',
  description: 'Services d\'impression 3D de pointe pour tous vos besoins',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-gray-950 text-gray-100 min-h-screen flex flex-col`}>
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

