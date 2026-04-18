'use client'
import VideoCard, { type Video } from '@/components/VideoCard'

const videos: Video[] = [
  {
    id: 1,
    thumbnail: 'video-1_caijjg',
    alt: 'Real Hope Ministry community gathering',
    // ✅ 2 videos play inside this ONE card, back-to-back
    mediaSrc: [
      'v.../your_video_1a_id.mp4', // ← paste first video public_id here
      'v.../your_video_1b_id.mp4' // ← paste second video public_id here
    ]
  },
  {
    id: 2,
    thumbnail: 'video-2_bxmu4l',
    alt: 'Widows ministry - Christmas clothes',
    // ✅ Stays as its own card, single video
    mediaSrc: 'v1775908824/WhatsApp_Video_2026-02-26_at_12.53.21_PM_rsw8yv.mp4'
  },
  {
    id: 3,
    thumbnail: 'video-3_bzfng3',
    alt: 'Freedom from slavery project',
    mediaSrc: undefined
  },
  {
    id: 4,
    thumbnail: 'video-4_rtbnvm',
    alt: 'Clean water project',
    mediaSrc: 'v1775909497/clean-water_ixmfdk.mp4'
  },
  {
    id: 5,
    thumbnail: 'IMG_0674_rax0vi',
    alt: 'Food distribution',
    mediaSrc: 'IDDV1562_mjwyyo'
  },
  {
    id: 6,
    thumbnail: '/videos/video-6.png',
    alt: 'Youth mission',
    mediaSrc: undefined
  },
  {
    id: 7,
    thumbnail: '/videos/video-7.png',
    alt: 'Orphanage project',
    mediaSrc: undefined
  }
]

export default function VideoSection({
  trackRef,          // ← add 
  activeSlide,
  setActiveSlide,
}: {
  trackRef: React.RefObject<HTMLDivElement>   // ← add 
  activeSlide: number
  setActiveSlide: (index: number) => void
}) {
  return (
    <div
      ref={trackRef}                          // ← ref 
      id='video-track'
      className='flex gap-4 sm:gap-6 px-4'
    >
      {videos.map((video, index) => (
        <div
          key={video.id}
          onClick={() => setActiveSlide(index)}
          className={`
            shrink-0 snap-center transition-all duration-300 cursor-pointer
            ${activeSlide === index ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-60'}
          `}
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  )
}