'use client'
import { CldUploadWidget } from 'next-cloudinary'

interface UploaderProps {
  onUploadSuccess: (id: string) => void
  type?: 'video' | 'photo'  // ✅ switch between modes
}

export default function VideoUploader({ onUploadSuccess, type = 'video' }: UploaderProps) {
  const isVideo = type === 'video'

  return (
    <div className='p-4 border-2 border-dashed border-gray-300 rounded-xl text-center'>
      <CldUploadWidget
        uploadPreset='ministry_videos'
        options={{
          resourceType: isVideo ? 'video' : 'image',
          clientAllowedFormats: isVideo
            ? ['mp4', 'mov', 'webm']
            : ['jpg', 'jpeg', 'png', 'webp'],
          maxFileSize: isVideo ? 100000000 : 10000000, // 100MB video / 10MB photo
          multiple: false,
          maxChunkSize: 20000000,
          sources: ['local'],
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
            {isVideo ? '🎬 Upload Video' : '🖼️ Upload Photo'}
          </button>
        )}
      </CldUploadWidget>
    </div>
  )
}