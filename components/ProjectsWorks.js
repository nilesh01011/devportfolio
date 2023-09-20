import Image from 'next/image'
import React from 'react'
import ProjectsTabs from './ProjectsTabs'

function ProjectsWorks({ allProjects, tabs }) {
    const hammerImg = '/hammerImg.svg'
    return (
        <div id="project" className='w-full h-full xl:px-0 px-[15px] dark:text-white text-black py-[3rem] sm:mt-[100px] mt-[50px]'>
            {/* titles */}
            <h1 className='capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-center sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]'>
                coding projects
                <div className='sm:h-[45px] xs:h-[40px] h-[30px]'>
                    <Image width={50} height={45} src={hammerImg && hammerImg} className="w-full h-full object-contain" alt="projects-works" />
                </div>
            </h1>

            {/* contents */}
            <div className='w-full h-auto'>
                <ProjectsTabs allProjects={allProjects} tabs={tabs} />
            </div>
        </div>
    )
}

export default ProjectsWorks