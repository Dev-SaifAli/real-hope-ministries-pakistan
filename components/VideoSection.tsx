'use client'
import VideoCard, { type Video } from '@/components/VideoCard'
// import { RefObject } from 'react'
export const videos: Video[] = [
  {
    id: 1,
    thumbnail: 'video-1_caijjg',
    alt: 'Real Hope Ministry community gathering - Food Project',

    mediaSrc: [
      'WhatsApp_Video_2026-04-27_at_11.31.42_PM_jipxh2',
      'Untitled_design_pruii9',
      'IDDV1562_mjwyyo',
      'video_20220412_130325_edit_lshvfb'
    ]
  },
  {
    id: 2,
    thumbnail: 'video-2_bxmu4l',
    alt: 'Widows ministry - Christmas clothes',
    // ✅ 2 videos play inside this ONE card, back-to-back
    mediaSrc: [
      'VID_81990722_054044_870_leeqwa',
      'WhatsApp_Video_2026-02-26_at_12.53.21_PM_rsw8yv'
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
    alt: 'Orphanage project',
    mediaSrc: ['1._gathering_ay8fgz', 'orphange_zbprw0']
  },
  
  {
    id: 5,
    thumbnail: 'download_yxnfkh',
    alt: 'Clean water project',
    mediaSrc: ['clean-water_ixmfdk',]
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
    <div ref={trackRef} id='video-track' className='flex    '>
      {videosList.map((video, index) => (
        <div
          key={`${video.id}-${index}`}
          onClick={() => setActiveSlide(index)}
          className={`
            shrink-0 snap-center transition-all duration-300 cursor-pointer
            ${
              activeSlide % videos.length === index % videos.length
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
