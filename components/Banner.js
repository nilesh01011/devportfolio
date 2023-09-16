import React from 'react'
import Buttons from './Buttons'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Banner() {

    return (
        <div id="banner" className='w-full min-h-screen flex items-center flex-col justify-center px-[15px] relative'>
            {/* h-[800px] */}
            <div className='h-full flex items-center flex-col justify-center'>
                <h6 className={`dark:text-[#B6BCCA] text-[#0B0B0C] uppercase tracking-[2px] xsxs:text-[18px] text-[16px] font-[600]`}>👋 Hi, My name is</h6>
                {/* name and roles */}
                {/* md:mt-[1.8rem] mt-[1.5rem] */}
                <div className='block text-center 1x1:my-[2rem] mt-[1rem] md:mb-[2rem] mb-[1.8rem] md:leading-[38px] leading-[48px] tracking-[1px] text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'>
                    <h1 id='fontWeight' style={{ fontWeight: '900' }} className='font-black lg:text-6xl md:text-5xl xsxs:text-[48px] text-[35px]'>Nilesh Rathod</h1>
                    <h1 id='fontWeight' style={{ fontWeight: '900' }} className='font-black lg:text-6xl md:text-5xl xsxs:text-[48px] text-[35px] md:mt-[1rem]'>I'm a full-stack developer</h1>
                </div>

                {/* small definations about */}
                <div className='xs:w-[80%] mx-auto'>
                    {/* md:text-[20px] */}

                    <div className='xl:block hidden'>
                        <p className='font-[500] dark:text-[#B6BCCA] text-[#0B0B0C] leading-[45px] flex items-center flex-col'>
                            <span className='text-xl'>I passionate in Full Stack Developer 🚀 having a special</span>
                            <span className='text-xl my-3'>interest in Front-end technologies and experience of</span>
                            <span className='flex items-baseline text-xl'>building Web applications 👨‍💻</span>
                        </p>
                    </div>
                    {/* mobile view */}
                    <div className='xl:hidden block'>
                        <p className='dark:text-[#B6BCCA] text-[#0B0B0C] font-[500] text-center xsxs:text-xl text-[14px]' style={{ lineHeight: '36px' }}>
                            I passionate in Full Stack Developer 🚀 having a special interest in Front-end technologies and experience of building Web applications
                            👨‍💻.
                        </p>
                    </div>
                </div>

                {/* buttons */}
                <div className='md:mt-[2.5rem] mt-[2rem] h-max'>
                    <Buttons title="Do You Want to Work With Me" link='#about' />
                </div>
            </div>

            {/* fixed links */}
            {/* md:block hidden */}
            <div className='fixed xl:left-[25px] xs:left-2 left-0 bottom-0 z-[10]'>
                {/* dark:text-[#B6BCCA] text-[#0B0B0C] */}
                <ul className='relative flex items-center flex-col text-[#037ADE]'>
                    <li className='p-[10px]'>
                        <Link
                            href="https://github.com/nilesh01011"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github repository"
                            title='Github repository'
                        >
                            <FiGithub className='hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100' />
                        </Link>
                    </li>

                    <li className='p-[10px]'>
                        <Link
                            href="https://www.linkedin.com/in/nilesh-rathod-0bb62b223/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Linkedin Profile"
                            title='Linkedin Profile'
                        >
                            <FiLinkedin className='hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100' />
                        </Link>
                    </li>

                    <li className='p-[10px]'>
                        <Link
                            href="https://twitter.com/Nilesh1011000/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter Profile"
                            title='Twitter Profile'
                        >
                            <FiTwitter className='hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100' />
                        </Link>
                    </li>
                    {/* bg-[#0B0B0C] dark:bg-[#B6BCCA] */}
                    <li className='w-[2px] h-[100px] mt-[10px] bg-[#037ADE]'></li>
                </ul>
            </div>
        </div>
    )
}

export default Banner