import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'FinanceTracker',
  description: 'Website para controle financeiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navigation />
      {children}
      </body>
    </html>
  )
}
