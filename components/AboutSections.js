import Image from 'next/image'
import React from 'react'
import Tabs from './Tabs'

function AboutSections() {
    return (
        <>
            <div className='h-full px-[15px]'>
                <div className='w-full flex items-center md:flex-row flex-col justify-center gap-[20px]'>
                    {/* left sides images */}
                    <div className='md:w-1/2 w-full'>
                        <div className='md:w-[400px] w-[220px] md:h-[400px] mx-auto'>
                            <Image width={300} height={200} src="/aboutMe_2.png" className='w-full h-full object-contain' alt="aboutMe" />
                            {/* <Image width={300} height={200} src="/hii.png" className='w-full h-full object-contain' alt="aboutMe" /> */}
                        </div>
                    </div>
                    {/* right sides contenta */}
                    <div className='md:w-1/2 w-full text-center'>
                        {/* text-transparent bg-clip-text bg-gradient-to-r from-[#f0b2af] to-[#fb839e] */}

                        <h2 className='text-[26px] font-[800] flex items-center justify-center'>
                            I&apos;m
                            {/* <div className='w-[40px] h-[70px] pb-[15px]'>
                            <Image width={38} height={50} src="/faceAvatar.png" className='w-full h-full object-contain' alt="aboutMe" />
                        </div> */}
                            {/* text-[#037ADE] */}
                            <span id='aboutText' className='text-[#03C3C3] pl-[5px]'>{/* text-[#8AA8CE] */}Nilesh Rathod</span>.
                        </h2>

                        <p className='mb-[1rem] mt-[0.5rem] font-bold'>Developer ? <span className='text-[#09C6F9]'>MERN Stack</span> : <span className=''>Front End</span></p>

                        {/* <span className='flex items-baseline'><Image width={35} height={30} src="/man-tech-emoji.png" className='w-[20px] h-[20px] mr-[5px] object-contain' alt='man-tech-emoji' />I&apos;ve been coding for nearly 1 years. I&apos;m a software developer</span> */}
                        <p className='dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[30px] leading-[22px] flex items-center flex-col'>
                            👨‍💻 I&apos;ve been coding for nearly 1 years. I&apos;m a software developer who loves to build a full-stack applications & learn new technologies.
                        </p>

                        <p className='mt-[1rem] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[30px] leading-[22px]'>
                            {/* 👨 */}
                            💪 To get opportunity to work with an creative ideas, Where i can enhance my knowledge, skills and attitude and to achieve new skills with learning goals. Debug website to fix mistakes in the code to make sure they are errorFree for network administrator and end-users.
                        </p>
                    </div>
                </div>

                {/* tabs views */}
                <div className='w-full h-[200px] md:mt-[100px] mt-[70px]'>
                    <Tabs />
                </div>
            </div>
        </>
    )
}

export default AboutSections