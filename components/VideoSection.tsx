'use client'
import VideoCard, { type Video } from '@/components/VideoCard'
// import { RefObject } from 'react'
export const videos: Video[] = [
  {
    id: 1,
    thumbnail: 'Screenshot_1083_jqkuqr',
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
    thumbnail: 'widows_rvnx1s',
    alt: 'Widows ministry - Christmas clothes',
    mediaSrc: 'Untitled_design_4_zeklp0'
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
    thumbnail: 'ac412c10607128cf2363aaf9672f0387b670847d_gfru0h',
    alt: 'Clean water project',
    mediaSrc: ['clean-water_ixmfdk', 'Untitled_design_3_ow5puk']
  },
  {
    id: 6,
    thumbnail: 'primary_d1yylj',
    alt: 'Free people',
    mediaSrc: 'Untitled_design_5_c2jt9c'
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
