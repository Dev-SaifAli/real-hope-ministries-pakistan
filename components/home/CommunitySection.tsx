import Image from 'next/image'

const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg']
export default function CommunitySection () {
  const midIndex = Math.floor(images.length / 2)
  return (
    <section className='w-full bg-white py-20 overflow-hidden'>
      {/* ── Header — centered ── */}
      <div className='text-center px-6 mb-16 max-w-[860px] mx-auto'>
        <h2 className='font-display font-[515] text-navy text-4xl md:text-5xl leading-tight mb-6'>
          Community In <span className='text-green'>Action</span>
        </h2>

        <p className='font-sans text-black text-[20px] leading-relaxed  mx-auto'>
          Real stories and meaningful moments captured during our fieldwork
          across Pakistan, highlighting the communities we serve and the impact
          of compassion, support, and hope in everyday lives.
        </p>
      </div>

      <div className='w-full h-[500px] md:h-[650px] bg-white overflow-hidden [perspective:1500px] flex items-center justify-center'>
        <div className='relative flex items-center justify-center w-full [transform-style:preserve-3d]'>
          {images.map((src, index) => {
            const position = index - midIndex

            // 1. rotationY: Keeps the U-shape facing center
            const rotationY = position * -30

            // 2. translationX: Tighter spacing (20vw) to match Figma proximity
            const translationX = position * 20

            // 3. translationZ: Pushes side cards back for depth
            const translationZ = Math.abs(position) * -350

            // 4. translateY: Creates the subtle vertical "U" curve seen in Figma
            const translateY = Math.abs(position) * 20

            // 5. scale: Center card is larger, edge cards smaller for natural depth
            const scale = 1 - Math.abs(position) * 0.08

            return (
              <div
                key={index}
                className={`
                absolute transition-all duration-1000 ease-in-out
                w-[75vw] h-[220px]
                sm:w-[50vw] sm:h-[300px]
                lg:w-[540px] lg:h-[340px]
              `}
                style={{
                  transform: `
                  translateX(${translationX}vw)
                  translateY(${translateY}px)
                  translateZ(${translationZ}px)
                  rotateY(${rotationY}deg)
                  scale(${scale})
                `,
                  zIndex: 10 - Math.abs(position)
                }}
              >
                {/* Refined UI: Matches Figma's clean white border and deep soft shadows */}
                <div className='w-full h-full overflow-hidden rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-[6px] border-white bg-gray-50'>
                  <img
                    src={src}
                    alt={`community-${index}`}
                    className='w-full h-full object-cover select-none pointer-events-none'
                    draggable='false'
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
