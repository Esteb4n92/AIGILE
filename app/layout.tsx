import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'AIGILE | Agencia Digital',
  description: 'Landings premium, automatizaciones y dashboards a medida. Hechos con precisión para marcas que no se conforman.',
  generator: 'v0.app',
  keywords: ['automatización IA', 'landing pages', 'desarrollo web', 'dashboards', 'n8n', 'Make', 'Zapier'],
  icons: {
    icon: '/favicon-aigile.jpeg',
    apple: '/favicon-aigile.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${orbitron.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
