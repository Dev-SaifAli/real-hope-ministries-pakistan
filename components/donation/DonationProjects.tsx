import ProjectCard, { Project } from '@/components/ProjectCard'

const projects: Project[] = [
  {
    id: 1,
    title: 'Clean Water Ministry',
    description:
      'We aim to install 100 water pumps, each costing $700, to ensure long-term access to water.',
    image: '9f9b70fed6ee900561182ee105c7024993851773_x6idlb',
    alt: 'Children playing with clean water',
    // date: 'May 10 to 15'
  },
  {
    id: 2,
    title: 'Food Ministry',
    description:
      'Supporting 700 families with essential food supplies, at $100 per family.',
    image: 'food_vzy14n',
    alt: 'Food distribution',
    // date: 'June 15 to 25'
  },
  {
  id: 3,
    title: 'Free People Ministry',
    description:
      'Helping families rebuild their lives, with an estimated $5,000 per family for complete support.',
    image: 'free-people_qtiqyy',
    alt: 'Family standing together',
    // date: 'May 16 to 25'
  },
  {
    id: 4,
    title: 'Orphanage Ministry',
    description: `70 orphan children in brick areas need support. Orphanage fund: $500,000.\n$100 per child for food and essentials.`,
    image: 'orphanage_b3ciwu',
    alt: 'Young man holding toys for children',
    // date: 'May 10 to 15'
  },
  {
   id: 5,
    title: 'Prayer Center',
    description:
      'Building a prayer center for the community. We aim to raise $800,000 for its construction.',
    image: 'db44c20156648c910870664dfe10a96b2fddbfe9_sxrgj0',
    alt: 'Women sitting together',
    // date: 'May 10 to 15'
  },
  {
    id: 6,
    title: 'Freedom from Slavery',
    description:'Over 500 families are trapped in brick kiln slavery. $4,000 is needed to free each family.',
    image: 'slavery_qyj1zw',
    // date: 'May 10 to 15',
    alt: 'Person working at brick kiln'
  },
  {
     id: 7,
    title: 'Widows Ministry',
    description:
      'Supporting 60+ widows in need.\n$1,000 per widow for essential care and support.',
    image: 'widows_rvnx1s',
    alt: 'Women and children gathering',
    // date: 'May 10 to 15'
  },
  {
   id: 8,
    title: 'Bibel Distribution Ministry',
    description:
      'Each Bible costs $50, and we need many more to spreading hope and reaching communities in need.',
    image: 'youth_uwafof',
    alt: 'Hands joined in prayer',
    // date: 'May 10 to 15'
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
    <div id='donation' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-8 sm:mb-14 md:mb-20'>
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
