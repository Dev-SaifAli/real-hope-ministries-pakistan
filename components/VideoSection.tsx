'use client'
import VideoCard, { type Video } from '@/components/VideoCard'
// import { RefObject } from 'react'
export const videos: Video[] = [
  {
    id: 1,
    thumbnail: 'video-1_caijjg',
    alt: 'Real Hope Ministry community gathering',

    mediaSrc: 'food-project_supddx'
  },
  {
    id: 2,
    thumbnail: 'video-2_bxmu4l',
    alt: 'Widows ministry - Christmas clothes',
    // ✅ 2 videos play inside this ONE card, back-to-back
    mediaSrc: [
      'v1775908824/WhatsApp_Video_2026-02-26_at_12.53.21_PM_rsw8yv.mp4',
      'VID_81990722_054044_870_leeqwa'
    ]
  },
  {
    id: 3,
    thumbnail: 'video-3_bzfng3',
    alt: 'Freedom from slavery project',
    mediaSrc: 'freedom-slavery_gi52se'
  },
  {
    id: 4,
    thumbnail: 'video-4_rtbnvm',
    alt: 'Clean water project',
    mediaSrc: '1._gathering_ay8fgz'
  },
  {
    id: 5,
    thumbnail: 'IMG_0674_rax0vi',
    alt: 'Food distribution',
    mediaSrc: 'IDDV1562_mjwyyo'
  },
  {
    id: 6,
    thumbnail: 'IMG_20220302_145544_360_xmrirx',
    alt: 'Youth mission',
    mediaSrc: undefined
  },
  {
    id: 7,
    thumbnail: 'DSC_7676_1_mutgql',
    alt: 'Orphanage project',
    mediaSrc: 'Untitled_mrt8m2'
  }
]

export default function VideoSection ({
  trackRef,
  activeSlide,
  setActiveSlide,
  videosList = videos // Fallback to default videos
}: {
  trackRef: React.RefObject<HTMLDivElement | null>
  activeSlide: number
  setActiveSlide: (index: number) => void
  videosList?: Video[]
}) {
  return (
    <div
      ref={trackRef}
      id='video-track'
      className='flex gap-4 sm:gap-6 px-4'
    >
      {videosList.map((video, index) => (
        <div
          key={`${video.id}-${index}`}
          onClick={() => setActiveSlide(index)}
          className={`
            shrink-0 snap-center transition-all duration-300 cursor-pointer
            ${
              (activeSlide % videos.length) === (index % videos.length)
                ? 'scale-100 opacity-100 z-10'
                : 'scale-90 opacity-60'
            }
          `}
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  )
}

