import Image from 'next/image'
import React from 'react'
import ExperienceTabs from './ExperienceTabs'

function Experiences() {
    const manTechEmoji = "/man-tech-emoji.png"
    return (
        <div id="experience" className='w-full h-full px-[15px] dark:text-white text-black md:mb-[80px] mb-[40px] py-[3rem] relative overflow-hidden sm:mt-[100px] mt-[50px]'>
            {/* titles */}
            <h1 className='capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-center sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]'>
                Experiences
                <div className='sm:h-[45px] xs:h-[40px] h-[30px]'>
                    <Image width={50} height={45} src={manTechEmoji && manTechEmoji} className="w-full h-full object-contain" alt="projects-works" />
                </div>
            </h1>
            {/* contents */}
            <div className='w-full h-auto'>
                <ExperienceTabs />
            </div>
        </div>
    )
}

export default Experiences