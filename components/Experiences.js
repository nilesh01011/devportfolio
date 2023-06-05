import Image from 'next/image'
import React from 'react'
import ExperienceTabs from './ExperienceTabs'

function Experiences() {
    const manTechEmoji = "/man-tech-emoji.png"
    return (
        <div className='w-full h-full px-[15px] dark:text-white text-black md:mt-[80px] mt-[12px] py-[3rem] relative overflow-hidden'>
            {/* absolutes */}
            {/* <Image height={200} width={350} className="absolute md:-left-[20%] sm:-left-[50%] -left-[70%] bottom-[5%]" src="/bannerBG.svg" alt='bannerBGOne' />
            <Image height={200} width={200} className="absolute md:-left-[10%] sm:-left-[50%] -left-[70%] top-[5%]" src="/bannerBGTwo.svg" alt='bannerBGOne' />
            <Image height={100} width={300} className="absolute md:-right-[15%] -right-[45%] md:top-[5%] top-0" src="/bannerBGTwo.svg" alt='bannerBGOne' /> */}
            {/* titles */}
            <h1 className='capitalize sm:text-[2.5rem] xss:text-[2rem] text-[1.8rem] font-bold flex items-center justify-center sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]'>
                My Experiences
                <div className='sm:h-[45px] xs:h-[35px] h-[25px]'>
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