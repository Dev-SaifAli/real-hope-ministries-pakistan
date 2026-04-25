 

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

 
export const buildImage = (src: string, width = 800): string => {
  if (!src) return '';
  // Check if it's already a full URL
  if (src.startsWith('http')) return src;
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto,w_${width}/${src}`;
};

 
export const buildVideo = (src: string, width = 800): string => {
  if (!src) return '';
  // Check if it's already a full URL
  if (src.startsWith('http')) return src;

  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto,vc_auto,w_${width}/${src}`;
};