import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { defaultUrl } from '@/lib/config'
import './globals.css'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Project',
  description: 'Project description',
}

const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  preload: true,
  variable: '--font-inter',
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
