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

  const transforms = [
    `w_${width}`,
    `q_auto:best`,        // highest auto quality (vs q_auto which defaults to "good")
    `vc_auto`,            // best codec per browser
    `e_sharpen:50`,       // sharpening to reduce soft/pixelated look
    `fl_progressive`,     // progressive streaming, smoother playback
  ].join(',')

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${transforms}/${src}.mp4`
}