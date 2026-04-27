const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

export const buildImage = (src: string, width = 800): string => {
  if (!src) return ''
  // Check if it's already a full URL
  if (src.startsWith('http')) return src

  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto,w_${width}/${src}`
}

export const buildVideo = (src: string, width = 1920): string => {
  if (!src) return ''
  if (src.startsWith('http')) return src

  // Transformations: q_auto (auto quality), vc_auto (auto codec), w_1280 (max width for performance)
  // Adding .mp4 at the end as a fallback extension hint
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,vc_auto,w_1280/${src}.mp4`
}