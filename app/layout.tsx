import { Open_Sans, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '900'], // Added 900 for font-black
  variable: '--font-poppins'
})

export const metadata = {
  title: {
    default: 'Real Hope Pakistan',
    template: '%s | Real Hope Pakistan'
  },
  description:
    'Real Hope Pakistan serves vulnerable communities through clean water, food, education, and compassion-driven outreach across Pakistan.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${openSans.variable} ${poppins.variable}`}>
      <body className='font-sans antialiased'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
