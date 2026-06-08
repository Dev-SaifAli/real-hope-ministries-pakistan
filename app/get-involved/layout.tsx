import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Get Involved' }

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
