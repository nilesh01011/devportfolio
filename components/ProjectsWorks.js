import Image from 'next/image'
import React from 'react'
import ProjectsTabs from './ProjectsTabs'

function ProjectsWorks() {
    const hammerImg = '/hammerImg.svg'
    return (
        <div className='w-full h-full 1x1:px-0 px-[15px] dark:text-white text-black md:mt-[200px] mt-[60px] py-[3rem]'>
            {/* titles */}
            <h1 className='capitalize sm:text-[2.5rem] text-[2rem] font-bold flex items-center justify-center sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]'>
                My coding projects
                <div className='sm:h-[45px] xs:h-[35px] h-[25px]'>
                    <Image width={50} height={45} src={hammerImg && hammerImg} className="w-full h-full object-contain" alt="projects-works" />
                </div>
            </h1>

            {/* contents */}
            <div className='w-full h-auto'>
                <ProjectsTabs />
            </div>
        </div>
    )
}

export default ProjectsWorks