import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/styles/Calendar.css'
import { Josefin_Sans } from 'next/font/google'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Nail Salon',
  description: 'Created by Artrid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
