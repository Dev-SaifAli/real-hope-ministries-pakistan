const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

export const buildImage = (publicId: string, width: number, quality = 75): string => {
  if (!publicId) return ''
  // Check if it's already a full URL
  if (publicId.startsWith('http')) return publicId

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_${quality},f_auto,w_${width},c_limit/${publicId}`
}

export const buildVideo = (src: string, width = 1920): string => {
  if (!src) return ''
  if (src.startsWith('http')) return src

  // Transformations: q_auto (auto quality), vc_auto (auto codec), w_1280 (max width for performance)
  // Adding .mp4 at the end as a fallback extension hint
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,vc_auto,w_1280/${src}.mp4`
}