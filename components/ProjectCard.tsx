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
    <div className="flex flex-col group">
      <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="pt-4">
        <h3 className="text-navy font-display font-bold text-[18px] mb-2">
          {project.title}
        </h3>
        <p className="text-black/80 font-sans text-[14px] leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  )
}