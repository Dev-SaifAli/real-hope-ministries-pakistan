'use client'

import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function NotFoundUI() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 md:pt-32">
      {/* Premium Moving Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-green/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-navy/5 blur-[120px]"
        />
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative space-y-8 max-w-2xl p-8 md:p-16 rounded-[40px] border border-white/40 bg-white/60 backdrop-blur-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)]"
        >
          <div className="flex flex-col items-center">
            {/* Large Number */}
            <h1 className="text-[8rem] md:text-[12rem] font-display font-black text-navy/10 leading-none select-none">
              404
            </h1>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-navy tracking-tight leading-tight ">
              Oops! Page <span className="text-green">Not Found</span>
            </h2>
          </div>
          
          <p className="font-sans text-black/60 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, or is temporarily unavailable.
          </p>

          <div className="pt-4">
            <Button 
              variant="supportMission" 
              text="Return Home" 
              href="/" 
            />
          </div>
        </motion.div>
      </div>
    </main>
  )
}
