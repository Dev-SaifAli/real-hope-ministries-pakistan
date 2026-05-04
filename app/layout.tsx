import { Metadata } from 'next'
import { Suspense } from 'react'
import { Open_Sans, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HashScroll from '@/components/HashScroll'
import LoadingScreen from '@/components/LoadingScreen'
import ProgressBarProvider from '@/components/ProgressBarProvider'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Real Hope Pakistan',
    template: '%s | Real Hope Pakistan'
  },
  description:
    'Real Hope Pakistan serves vulnerable communities through clean water, food, education, and compassion-driven outreach across Pakistan.',
  keywords: [
    'Real Hope Pakistan',
    'NGO Pakistan',
    'Charity Pakistan',
    'Clean Water Pakistan',
    'Education Pakistan',
    'Food Distribution',
    'Vulnerable Communities',
    'Social Work Pakistan'
  ],
  openGraph: {
    title: 'Real Hope Pakistan',
    description: 'Serving vulnerable communities through clean water, food, education, and compassion-driven outreach across Pakistan.',
    url: ' ',
    siteName: 'Real Hope Pakistan',
    images: [
      {
        url: '/nav-logo.png',
        width: 1200,
        height: 630,
        alt: 'Real Hope Pakistan Logo'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Hope Pakistan',
    description: 'Serving vulnerable communities through clean water, food, education, and compassion-driven outreach across Pakistan.',
    images: ['/nav-logo.png'],
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${openSans.variable} ${poppins.variable}`}>
      <body className='font-sans antialiased'>
        <ProgressBarProvider>
          <LoadingScreen />
          <Suspense fallback={null}>
            <HashScroll />
          </Suspense>
          <Navbar />
          {children}
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  )
}
