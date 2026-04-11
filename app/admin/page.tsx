'use client'
import { useState } from 'react'
import VideoUploader from '@/components/VideoUploader' // Double check this path

export default function AdminPage () {
  const [generatedId, setGeneratedId] = useState('')

  return (
    <div className='max-w-2xl mx-auto mt-20 p-10 bg-white shadow-2xl rounded-3xl text-center'>
      <h1 className='text-3xl font-bold text-navy mb-6'>Video Upload Center</h1>

      {/* Added type (id: string) to fix the underline */}
      <VideoUploader onUploadSuccess={(id: string) => setGeneratedId(id)} />

      {generatedId && (
        <div className='mt-8 p-6 bg-green/10 rounded-xl border-2 border-green'>
          <p className='text-sm text-gray-600 mb-2'>
            Upload Successful! Copy this ID:
          </p>
          <code className='text-lg font-bold text-navy block break-all'>
            {generatedId}
          </code>
        </div>
      )}
    </div>
  )
}
