'use client'
import { CldUploadWidget } from 'next-cloudinary'

interface UploaderProps {
  // ✅ Ab ye string array return karega
  onUploadSuccess: (ids: string[]) => void
  type?: 'video' | 'photo'
}

export default function VideoUploader ({
  onUploadSuccess,
  type = 'video'
}: UploaderProps) {
  const isVideo = type === 'video'

  // Ek temporary array jo saari uploaded files ki IDs store karega
  let uploadedIds: string[] = []

  return (
    <div className='p-4 border-2 border-dashed border-gray-300 rounded-xl text-center'>
      <CldUploadWidget
        uploadPreset='ministry_videos'
        options={{
          resourceType: isVideo ? 'video' : 'image',
          clientAllowedFormats: isVideo
            ? ['mp4', 'mov', 'webm']
            : ['jpg', 'jpeg', 'png', 'webp'],
          maxFileSize: isVideo ? 100000000 : 10000000,
          multiple: true, // ✅ Multiple selection allow 
          maxFiles: 10,
          sources: ['local']
        }}
       
        onSuccess={(result: any) => {
          if (result.info && typeof result.info !== 'string') {
            uploadedIds.push(result.info.public_id)
          }
        }}
     
        onClose={() => {
          if (uploadedIds.length > 0) {
            onUploadSuccess(uploadedIds)
            uploadedIds = [] // Reset for next time
          }
        }}
      >
        {({ open }) => (
          <button
            type='button'
            onClick={() => open()}
            className='bg-navy text-white px-6 py-3 rounded-lg font-bold'
          >
            {isVideo ? '🎬 Upload Videos' : '🖼️ Upload Photos'}
          </button>
        )}
      </CldUploadWidget>
    </div>
  )
}
