'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const hasVisited = sessionStorage.getItem('hasVisited')

    if(hasVisited==='true'){
      setIsLoading(false)
      return
    }
    
    // Simulate initial loading time or wait for window load
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('hasVisited','true')
        }, 1500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      // Fallback timer
      const timer = setTimeout(() => setIsLoading(false), 2500)
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-navy via-navy to-[#0c2d24]"
        >
          {/* Animated Background Pulse */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 1],
              opacity: [0, 0.2, 0.1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-64 h-64 bg-green rounded-full blur-[80px]"
          />

          {/* Logo Animation */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "backOut"
              }}
            >
              <Image
                src="/nav-logo.png"
                alt="Real Hope Pakistan"
                width={100}
                height={100}
                priority
                className="rounded-full border-2 border-white/20 shadow-2xl"
              />
            </motion.div>
            
            {/* Loading Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-t-2 border-r-2 border-green rounded-full"
            />
          </div>

          {/* Text Animation */}
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white text-center font-display font-semibold text-2xl tracking-[0.2em] uppercase"
            >
              Real Hope Ministries <span className="text-green">Pakistan</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-green to-transparent mt-4"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
