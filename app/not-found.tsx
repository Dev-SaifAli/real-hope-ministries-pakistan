import { Metadata } from 'next'
import NotFoundUI from '@/components/NotFoundUI'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.'
}

export default function NotFound() {
  return <NotFoundUI />
}
