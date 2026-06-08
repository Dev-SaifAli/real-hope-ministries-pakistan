import ProjectCard from '@/components/ProjectCard'
import { PROJECTS } from '@/utils/constants'

export default function DonationProjects () {
  return (
    <div id='donation' className='main-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mb-8 sm:mb-14 md:mb-20'>
      {PROJECTS.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          showDonateButton={true}
        />
      ))}
    </div>
  )
}
