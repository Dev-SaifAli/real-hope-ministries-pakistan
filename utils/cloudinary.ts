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

  // Transformations ko path ke andar comma-separated rakhein
  // f_auto: best format, q_auto:best: high quality, br_5m: sharp bitrate
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto:best,w_${width},br_5m/${src}`
}