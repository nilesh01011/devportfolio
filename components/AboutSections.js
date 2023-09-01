import Image from 'next/image'
import React from 'react'
import SkillsTabs from './SkillsTabs'
import { skills } from '@/pages/api/Skills'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'

function AboutSections({ languages, software }) {
    return (
        <>
            <div id="about" className='h-full px-[15px]'>
                <div className='w-full flex items-center md:flex-row flex-col justify-center gap-[20px]'>
                    {/* left sides images */}
                    <div className='md:w-[45%] w-full'>
                        <div className='md:w-[400px] w-[250px] md:h-[480px] mx-auto'>
                            <Image width={300} height={200} src="/aboutMe_2.png" className='w-full h-full object-contain' alt="aboutMe" />
                            {/* <Image width={300} height={200} src="/hii.png" className='w-full h-full object-contain' alt="aboutMe" /> */}
                        </div>
                    </div>
                    {/* right sides contenta */}
                    <div className='md:w-[55%] w-full text-center'>
                        <div className="w-full text-center">
                            <h2 className='text-[26px] font-[800] flex items-center justify-center'>
                                I&apos;m
                                <span id='aboutText' className='text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7] pl-[5px]'>Nilesh Rathod</span>.
                                {/* <span id='aboutText' className='text-transparent bg-clip-text bg-gradient-to-r from-[#f0b2af] to-[#fb839e] pl-[5px]'>Nilesh Rathod</span>. */}
                            </h2>

                            <p className='mb-[1rem] mt-[0.5rem] font-bold 1x1:text-[18px] text-[16px]'>Developer ? <span className='text-[#01D9D2]'>Front </span>End : <span className='text-[#01D9D2]'>Back </span>End</p>
                            <p className='dark:text-[#B6BCCA] font-bold text-[#0B0B0C] md:leading-[35px] leading-[25px] flex items-center flex-col 1x1:text-[18px] xs:text-[16px] text-[14px]'>
                                {/* 👨‍💻 I&apos;ve been coding for nearly 1+ years. I&apos;m a Software Developer who loves to build a full-stack applications & learn new technologies. */}
                                ✨ I've been coding for over a year now. I'm a Software Developer who enjoys building
                                full-stack applications and learning new technologies. ✨
                            </p>

                            <p className='mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[35px] leading-[25px] 1x1:text-[18px] xs:text-[16px] text-[14px]'>
                                {/* 👨 */}
                                {/* 💪 To get opportunity to work with an creative ideas, Where i can enhance my knowledge, skills and attitude and to achieve new skills with learning goals. Debug website to fix mistakes in the code to make sure they are errorFree for network administrator and end-users. */}
                                💪 I'm looking for an opportunity to work on <b>creative 🎨 and innovative 💡 projects</b>, where I can improve my programming knowledge and skills. I want to <b>learn 📚 new things</b> while also developing my abilities.
                            </p>

                            <p className='mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[35px] leading-[25px] 1x1:text-[18px] xs:text-[16px] text-[14px]'>
                                One thing I'm good at is <b>debugging</b> 🔍 - finding and fixing errors in code. I make sure websites work properly and don't have issues that would cause problems for network administrators or end users.
                            </p>

                            <p className='mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[35px] leading-[25px] 1x1:text-[18px] xs:text-[16px] text-[14px]'>
                                Overall, I'm eager to use my skills to contribute to interesting projects, continue growing as a developer, and achieve new learning goals. 🎯
                            </p>
                        </div>
                        {/* buttons */}
                        <button className='font-[550] my-10 w-max h-max'>
                            <a href='/MyResume.pdf' className='w-full h-full py-[0.8rem] px-[3.5rem] flex items-center justify-center gap-[0.8rem] rounded-full shadow-md hover:shadow-none bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer' download='nrResume'>
                                Download Resume
                                <span>
                                    <FaDownload size={16} />
                                </span>
                            </a>
                        </button>
                    </div>
                </div>

                {/* tabs views */}
                <div className='w-full h-max md:mt-[100px] mt-[60px]'>
                    <SkillsTabs skillsTabs={skills} languages={languages} software={software} />
                </div>
            </div>
        </>
    )
}

export default AboutSections