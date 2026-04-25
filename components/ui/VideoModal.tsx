// components/ui/VideoModal.tsx
'use client'
import { X } from 'lucide-react'
import { buildVideo } from '@/utils/cloudinary'

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  publicId: string; // Cloudinary public ID  
}

export default function VideoModal({ isOpen, onClose, publicId }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm">
      {/* Close Button */}
      <button 
      aria-label="Close video modal"
        onClick={onClose} 
        className="absolute top-6 right-6 text-white hover:text-green transition-colors z-[110]"
      >
        <X size={40} />
      </button>

      {/* Video Container */}
      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
        <video
          src={buildVideo(publicId)}
          controls
          autoPlay
          className="w-full h-full object-contain"
          controlsList="nodownload" // Optional 
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}