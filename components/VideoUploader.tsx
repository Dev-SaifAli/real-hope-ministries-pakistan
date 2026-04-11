'use client'
import { CldUploadWidget } from 'next-cloudinary'

// Adding interface to fix the "any" type error
interface VideoUploaderProps {
  onUploadSuccess: (id: string) => void
}

export default function VideoUploader ({ onUploadSuccess }: VideoUploaderProps) {
  return (
    <div className='p-4 border-2 border-dashed border-gray-300 rounded-xl text-center'>
      <CldUploadWidget
        uploadPreset='ministry_videos'
        options={{
          resourceType: 'video',
          clientAllowedFormats: ['mp4', 'mov', 'webm'],
          maxFileSize: 350000000,
          // Fixed naming: Cloudinary widget uses this to trigger chunking
          multiple: false
        }}
        onSuccess={(result: any) => {
          if (result.info && typeof result.info !== 'string') {
            onUploadSuccess(result.info.public_id)
          }
        }}
      >
        {({ open }) => (
          <button
            type='button'
            onClick={() => open()}
            className='bg-navy text-white px-6 py-3 rounded-lg font-bold'
          >
            Select & Upload Heavy Video
          </button>
        )}
      </CldUploadWidget>
    </div>
  )
}
