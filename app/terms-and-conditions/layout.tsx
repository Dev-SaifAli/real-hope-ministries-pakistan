import { Metadata } from 'next'

export const metadata: Metadata = { title: 'Terms and Conditions' }

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
