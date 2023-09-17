import Image from 'next/image'
import React from 'react'
import SkillsTabs from './SkillsTabs'
// import { skills } from '@/pages/api/Skills'
import { FaDownload } from 'react-icons/fa'
import Link from 'next/link'

function AboutSections({ skills }) {
    return (
        <>
            <div id="about" className='h-full px-[15px] sm:mt-[100px] mt-[50px]'>
                <h1 className='capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-center sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]'>
                    About Me
                    <div className='sm:h-[70px] xs:h-[60px] h-[50px]'>
                        <Image width={50} height={60} src='/faceAvatar.png' className="w-full h-full object-contain" alt="projects-works" />
                    </div>
                </h1>
                <div className='w-full flex items-center xl:flex-row flex-col justify-center gap-[30px]'>
                    {/* left sides content */}
                    <div className='md:w-[55%] w-full text-center xl:order-1 order-2'>
                        <div className="w-full text-center">

                            <p className='mb-[1rem] mt-[0.5rem] font-bold xsxs:text-[1.7rem] text-[1.2rem]'>I&apos;m Developer ? <span className='text-[#01D9D2]'>Front </span>End : <span className='text-[#01D9D2]'>Back </span>End</p>
                            <p className='dark:text-[#B6BCCA] font-bold text-[#0B0B0C] md:leading-[40px] leading-[34px] flex items-center flex-col xsxs:text-[18px] text-[14px]'>
                                {/* 👨‍💻 I&apos;ve been coding for nearly 1+ years. I&apos;m a Software Developer who loves to build a full-stack applications & learn new technologies. */}
                                ✨ I've been coding for over a year now. I'm a Software Developer who enjoys building
                                full-stack applications and learning new technologies. ✨
                            </p>

                            <p className='mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[40px] leading-[34px] xsxs:text-[18px] text-[14px]'>
                                {/* 👨 */}
                                {/* 💪 To get opportunity to work with an creative ideas, Where i can enhance my knowledge, skills and attitude and to achieve new skills with learning goals. Debug website to fix mistakes in the code to make sure they are errorFree for network administrator and end-users. */}
                                I'm looking for an opportunity to work on <b>creative 🎨 and innovative 💡 projects</b>, where I can improve my programming knowledge and skills. I want to <b>learn 📚 new things</b> while also developing my abilities.
                            </p>

                            <p className='mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[40px] leading-[34px] xsxs:text-[18px] text-[14px]'>
                                One thing I'm good at is <b>debugging</b> 🔍 - finding and fixing errors in code. I make sure websites work properly and don't have issues that would cause problems for network administrators or end users.
                            </p>

                            <p className='mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[40px] leading-[34px] xsxs:text-[18px] text-[14px]'>
                                Overall, I'm eager to use my skills to contribute to interesting projects, continue growing as a developer, and achieve new learning goals. 🎯
                            </p>
                        </div>
                        {/* buttons */}
                        <button className='font-[500] my-10 w-max h-max'>
                            <Link href='/MyResume.pdf' title='Download Resume' className='font-semibold xsxs:text-xl text-lg w-full h-full xsxs:px-[3.5rem] px-[2.5rem] xsxs:py-[0.8rem] py-[0.6rem] flex items-center justify-center gap-[0.8rem] rounded-full shadow-md hover:shadow-none bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer' download='nrResume'>
                                Download Resume
                                <span>
                                    <FaDownload size={16} />
                                </span>
                            </Link>
                        </button>
                    </div>

                    {/* right sides images */}
                    <div className='md:w-[45%] w-full xl:order-2 order-1'>
                        {/* md:h-[480px] */}
                        <div className='w-full 1x1:h-[70vh] lg:h-[480px] xsxs:h-[420px] h-[300px] mx-auto'>
                            <Image
                                width={300}
                                height={200}
                                title="My Avatar Image"
                                src="/about_1.svg"
                                loading="lazy"
                                decoding="async"
                                quality={50}
                                importance="high"
                                rel="none"
                                className='w-full h-full object-contain'
                                alt="aboutMe" />
                        </div>
                    </div>
                </div>

                {/* tabs views */}
                <div className='w-full h-max md:mt-[100px] mt-[60px]'>
                    <SkillsTabs skills={skills} />
                    <SkillsTabs skillsTabs={skills} />
                </div>
            </div>
        </>
    )
}

export default AboutSections
