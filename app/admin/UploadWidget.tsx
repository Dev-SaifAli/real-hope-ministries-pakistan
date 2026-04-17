'use client'

import { useState } from 'react'
import VideoUploader from '@/components/VideoUploader'

export default function AdminClient() {
  const [videoId, setVideoId] = useState('')
  const [photoId, setPhotoId] = useState('')

  return (
    <div className='max-w-2xl mx-auto mt-20 p-10 bg-white shadow-2xl rounded-3xl text-center'>
      <h1 className='text-3xl font-bold text-navy mb-10'>Upload Center</h1>

      {/* Video Upload */}
      <div className='mb-10'>
        <h2 className='text-xl font-semibold text-navy mb-4'>🎬 Video Upload</h2>
        <VideoUploader type='video' onUploadSuccess={setVideoId} />
        {videoId && (
          <div className='mt-4 p-4 bg-green/10 rounded-xl border-2 border-green'>
            <p className='text-sm text-gray-600 mb-1'>Video ID:</p>
            <code className='text-sm font-bold text-navy break-all'>{videoId}</code>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className='border-t border-gray-200 mb-10' />

      {/* Photo Upload */}
      <div>
        <h2 className='text-xl font-semibold text-navy mb-4'>🖼️ Photo Upload</h2>
        <VideoUploader type='photo' onUploadSuccess={setPhotoId} />
        {photoId && (
          <div className='mt-4 p-4 bg-green/10 rounded-xl border-2 border-green'>
            <p className='text-sm text-gray-600 mb-1'>Photo ID:</p>
            <code className='text-sm font-bold text-navy break-all'>{photoId}</code>
          </div>
        )}
      </div>
    </div>
  )
}
