import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-6 max-w-lg">
        <h1 className="text-8xl md:text-9xl font-display font-black text-navy/10 select-none">
          404
        </h1>
        
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy">
            Oops! Page Not <span className="text-green">Found</span>
          </h2>
          <p className="font-sans text-black/70 text-base md:text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-6">
          <Button 
            variant="supportMission" 
            text="Return Home" 
            href="/" 
          />
        </div>
      </div>
    </main>
  )
}
