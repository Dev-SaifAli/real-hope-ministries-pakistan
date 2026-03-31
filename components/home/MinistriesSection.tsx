import ProjectCard, { Project } from '../ProjectCard'
import Image from 'next/image'

const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Project',
    description:
      'Installing hand pumps and wells to provide safe, accessible drinking water to remote villages.',
    image: '/projects/clean-water.webp',
    alt: 'Children playing with clean water'
  },
  {
    id: 2,
    title: 'Food Project',
    description:
      'Delivering essential food rations to impoverished families struggling with food insecurity.',
    image: '/projects/food.webp',
    alt: 'Food distribution'
  },
  {
    id: 3,
    title: 'Free People',
    description:
      'Empowering marginalized individuals through education, skill-building, and social support.',
    image: '/projects/free-people.webp',
    alt: 'Family standing together'
  },
  {
    id: 4,
    title: 'Orphanage Project',
    description:
      'Providing a safe home, education, and loving care for orphaned and abandoned children.',
    image: '/projects/orphanage.webp',
    alt: 'Young man holding toys for children'
  },
  {
    id: 5,
    title: 'Persecution Support',
    description:
      'Offering legal, emotional, and financial support to those facing religious persecution.',
    image: '/projects/persecution.webp',
    alt: 'Women sitting together'
  },
  {
    id: 6,
    title: 'Freedom from Slavery',
    description:
      'Rescuing bonded laborers from brick kilns and helping them start independent, free lives.',
    image: '/projects/slavery.webp',
    alt: 'Person working at brick kiln'
  },
  {
    id: 7,
    title: 'Widows Ministry',
    description:
      'Providing monthly stipends, medical care, and vocational training to destitute widows.',
    image: '/projects/widows.webp',
    alt: 'Women and children gathering'
  },
  {
    id: 8,
    title: 'Youth of Mission',
    description:
      'Equipping the next generation with leadership skills, spiritual guidance, and education.',
    image: '/projects/youth.webp',
    alt: 'Hands joined in prayer'
  }
]

export default function MinistriesSection () {
  return (
    <section className='w-full bg-white py-16 px-6 md:px-10'>
      <div className='text-center mb-10 max-w-3xl mx-auto'>
        <h2 className='text-navy font-display font-[515] text-[32px] md:text-[56px]'>
          Our Ministries and <span className='text-green'>Projects</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 max-w-[1440px] mx-auto px-6 md:px-10'>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
