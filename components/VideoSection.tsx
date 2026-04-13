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
    mediaSrc:'IDDV1562_mjwyyo'
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

export default function VideoSection () {
  return (
    <div
      className='flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
      <div className='shrink-0 w-4 sm:w-6' />
    </div>
  )
}
