import Image from 'next/image'
import React from 'react'
import SkillsTabs from './SkillsTabs'
import { skills } from '@/pages/api/Skills'
import Link from 'next/link'

function AboutSections() {
    return (
        <>
            <div className='h-full px-[15px]'>
                <div className='w-full flex items-center md:flex-row flex-col justify-center gap-[20px]'>
                    {/* left sides images */}
                    <div className='md:w-1/2 w-full'>
                        <div className='md:w-[400px] w-[250px] md:h-[400px] mx-auto'>
                            <Image width={300} height={200} src="/aboutMe_2.png" className='w-full h-full object-contain' alt="aboutMe" />
                            {/* <Image width={300} height={200} src="/hii.png" className='w-full h-full object-contain' alt="aboutMe" /> */}
                        </div>
                    </div>
                    {/* right sides contenta */}
                    <div className='md:w-1/2 w-full text-center'>
                        <div className="w-full text-center">
                            <h2 className='text-[26px] font-[800] flex items-center justify-center'>
                                I&apos;m
                                {/* <div className='w-[40px] h-[70px] pb-[15px]'>
                            <Image width={38} height={50} src="/faceAvatar.png" className='w-full h-full object-contain' alt="aboutMe" />
                        </div> */}
                                {/* text-[#037ADE] */}
                                {/* <span id='aboutText' className='text-[#03C3C3] pl-[5px]'>Nilesh Rathod</span>. */}
                                <span id='aboutText' className='text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7] pl-[5px]'>Nilesh Rathod</span>.
                                {/* <span id='aboutText' className='text-transparent bg-clip-text bg-gradient-to-r from-[#f0b2af] to-[#fb839e] pl-[5px]'>Nilesh Rathod</span>. */}
                            </h2>

                            <p className='mb-[1rem] mt-[0.5rem] font-bold'>Developer ? <span className='text-[#01D9D2]'>Front </span>Stack : <span className='text-[#01D9D2]'>MERN </span>End</p>
                            {/* <p className='mb-[1rem] mt-[0.5rem] font-bold'>Developer ? <span className='text-[#03e5b7]'>MERN </span>Stack : <span className='text-[#03e5b8]'>Front </span>End</p> */}

                            {/* <span className='flex items-baseline'><Image width={35} height={30} src="/man-tech-emoji.png" className='w-[20px] h-[20px] mr-[5px] object-contain' alt='man-tech-emoji' />I&apos;ve been coding for nearly 1 years. I&apos;m a software developer</span> */}
                            <p className='dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[35px] leading-[25px] flex items-center flex-col xs:text-[16px] text-[14px]'>
                                👨‍💻 I&apos;ve been coding for nearly 1 years. I&apos;m a software developer who loves to build a full-stack applications & learn new technologies.
                            </p>

                            <p className='mt-[1rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[35px] leading-[25px] xs:text-[16px] text-[14px]'>
                                {/* 👨 */}
                                💪 To get opportunity to work with an creative ideas, Where i can enhance my knowledge, skills and attitude and to achieve new skills with learning goals. Debug website to fix mistakes in the code to make sure they are errorFree for network administrator and end-users.
                            </p>
                        </div>
                        {/* buttons */}
                        <button className='font-[550] my-10 w-max h-max'>
                            <a href='/MyResume.pdf' className='w-full h-full py-[0.8rem] px-[3.5rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer' download='nrResume'>Download Resume</a>
                        </button>
                    </div>
                </div>

                {/* tabs views */}
                <div className='w-full md:h-[200px] md:mt-[100px] mt-[60px]'>
                    <SkillsTabs skillsTabs={skills} />
                </div>
            </div>
        </>
    )
}

export default AboutSections