import ProjectCard, { Project } from '../ProjectCard'

const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Ministry',
    description:
      'We aim to install 100 water pumps, each costing $700, to ensure long-term access to water.',
    image: '9f9b70fed6ee900561182ee105c7024993851773_x6idlb',
    alt: 'Children playing with clean water'
  },
  {
    id: 2,
    title: 'Food Ministry',
    description:
      'Supporting 700 families with essential food supplies, at $100 per family.',
    image: 'food_vzy14n',
    alt: 'Food distribution'
  },
  {
    id: 3,
    title: 'Free People Ministry',
    description:
      'Helping families rebuild their lives, with an estimated $5,000 per family for complete support.',
    image: 'free-people_qtiqyy',
    alt: 'Family standing together'
  },
  {
    id: 4,
    title: 'Orphanage Ministry',
    description: `70 orphan children in brick areas need support. Orphanage fund: $500,000.\n$100 per child for food and essentials.`,
    image: 'orphanage_b3ciwu',
    alt: 'Young man holding toys for children'
  },
  {
    id: 5,
    title: 'Prayer Center',
    description:
      'Building a prayer center for the community. We aim to raise $800,000 for its construction.',
    image: 'db44c20156648c910870664dfe10a96b2fddbfe9_sxrgj0',
    alt: 'Women sitting together'
  },
  {
    id: 6,
    title: 'Freedom from Slavery',
    description:
      'Over 500 families are trapped in brick kiln slavery. $4,000 is needed to free each family.',
    image: 'slavery_qyj1zw',
    alt: 'Person working at brick kiln'
  },
  {
    id: 7,
    title: 'Widows Ministry',
    description:
      'Supporting 60+ widows in need.\n$1,000 per widow for essential care and support.',
    image: 'widows_rvnx1s',
    alt: 'Women and children gathering'
  },
  {
    id: 8,
    title: 'Bibel Distribution Ministry',
    description:
      'Each Bible costs $50, and we need many more to spreading hope and reaching communities in need.',
    image: 'youth_uwafof',
    alt: 'Hands joined in prayer'
  }
]

export default function MinistriesSection () {
  return (
    <section className='w-full bg-white mt-7 md:mt-14 lg:mt-21 px-4  sm:px-6 md:px-10'>
      <div className='max-w-360 mx-auto px-4 sm:px-6 lg:px-10'>
        <div className='impact-section mb-7   sm:mb-8 md:mb-10 '>
          <h2 className='font-display font-semibold text-navy impact-heading mb-2 md:mb-3 lg:mb-5'>
            Our Ministries and <span className='text-green'>Projects</span>
          </h2>
          <p className='font-sans text-black impact-para px-2 sm:px-4'>
            We operate multiple initiatives targeting critical needs across
            Pakistan, from basic survival necessities to human rights advocacy.
          </p>
        </div>
        <div
          id='projects'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-14 lg:gap-y-18  mb-6 sm:mb-8 md:mb-14 lg:mb-18 '
        >
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
