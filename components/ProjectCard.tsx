import Image from 'next/image'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  alt: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    /* Card Container: Strict Figma width */
    <div className="flex flex-col w-full max-w-[408px] mx-auto">
      
      {/* Image: Strict aspect ratio based on 408px width */}
      <div className="relative w-full h-[320px] overflow-hidden rounded-none">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover"
        />
      </div>

      {/* The 28px Gap requested */}
      <div className="mt-7 flex flex-col">
        <h3 className="text-navy font-display font-[515]  text-[22px] md:text-[26px] leading-tight mb-3">
          {project.title}
        </h3>
        <p className="text-black font-sans text-[18px] leading-[1.6]">
          {project.description}
        </p>
      </div>
    </div>
  )
}