import ProjectCard, { Project } from '@/components/ProjectCard'

const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Project',
    description:
      'Installing hand pumps and wells to provide safe, accessible drinking water to remote villages.',
    image: '/projects/clean-water.webp',
    alt: 'Children playing with clean water',
    date: 'May 10 to 15'
  },
  {
    id: 2,
    title: 'Food Project',
    description:
      'Delivering essential food rations to impoverished families struggling with food insecurity.',
    image: '/projects/food.webp',
    alt: 'Food distribution',
    date: 'June 15 to 25'
  },
  {
    id: 3,
    title: 'Free People',
    description:
      'Empowering marginalized individuals through education, skill-building, and social support.',
    image: '/projects/free-people.webp',
    alt: 'Family standing together',
    date: 'May 16 to 25'
  },
  {
    id: 4,
    title: 'Orphanage Project',
    description:
      'Providing a safe home, education, and loving care for orphaned and abandoned children.',
    image: '/projects/orphanage.webp',
    alt: 'Young man holding toys for children',
    date: 'May 10 to 15'
  },
  {
    id: 5,
    title: 'Persecution Support',
    description:
      'Offering legal, emotional, and financial support to those facing religious persecution.',
    image: '/projects/persecution.webp',
    alt: 'Women sitting together',
    date: 'May 10 to 15'
  },
  {
    id: 6,
    title: 'Freedom from Slavery',
    description:
      'Rescuing bonded laborers from brick kilns and helping them start independent, free lives.',
    image: '/projects/slavery.webp',
    alt: 'Person working at brick kiln',
    date: 'May 10 to 15'
  },
  {
    id: 7,
    title: 'Widows Ministry',
    description:
      'Providing monthly stipends, medical care, and vocational training to destitute widows.',
    image: '/projects/widows.webp',
    alt: 'Women and children gathering',
    date: 'May 10 to 15'
  },
  {
    id: 8,
    title: 'Youth of Mission',
    description:
      'Equipping the next generation with leadership skills, spiritual guidance, and education.',
    image: '/projects/youth.webp',
    alt: 'Hands joined in prayer',
    date: 'May 10 to 15'
  }
]

{
  /* ── Grid: Projects ── */
}
{
  /* FIX: 1-col mobile, 2-col sm, 3-col lg, 4-col xl */
}
export default function DonationProjects () {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-8 sm:mb-14 md:mb-20'>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          showDonateButton={true}
        />
      ))}
    </div>
  )
}
