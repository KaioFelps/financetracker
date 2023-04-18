import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
