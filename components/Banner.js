import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'

function Banner() {

    return (
        <div className='w-full h-screen flex items-center flex-col justify-center px-[15px]'>
            <div className='h-full flex items-center flex-col justify-center'>
                {/* sm:text-[16px] */}
                {/* dark:text-[#939ba8] text-[#342C2C] */}
                <h6 className={`dark:text-[#939ba8] text-[#747476] uppercase tracking-[3px] md:text-[16px] text-[14px] font-[600]`}>Hi, My name is</h6>
                {/* name and roles */}
                <div className='block text-center 1x1:my-[1.4rem] md:mt-[1.5rem] mt-[0.8rem] md:mb-[2rem] mb-[1rem] leading-[43px] text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'>
                    <h1 className='font-[900] lg:text-6xl md:text-5xl text-[38px]'>Nilesh Rathod.</h1>
                    <h1 className='font-[900] lg:text-6xl md:text-5xl text-[38px] md:mt-[1.3rem]'>I am a full-stack developer.</h1>
                </div>

                {/* small definations about */}
                <div className='xs:w-[80%] mx-auto'>
                    {/* md:text-[20px] */}

                    <div className='xl:block hidden'>
                        <p className=' font-[400] dark:text-[#B6BCCA] text-[#0B0B0C] md:text-[20px] text-[16px] md:leading-[35px] leading-[22px] flex items-center flex-col'>
                            <span>I passionate in Full Stack Developer 🚀 having a special</span>
                            <span>interest in Front-end technologies and experience of</span>
                            <span className='flex items-baseline'>
                                building Web applications
                                👨‍💻
                                {/* <Image width={35} height={30} src="/man-tech-emoji.png" className='w-[30px] h-[25px] object-contain' alt='man-tech-emoji' /> */}
                                .</span>
                        </p>
                    </div>
                    {/* mobile view */}
                    <div className='xl:hidden block'>
                        <p className='dark:text-[#B6BCCA] text-[#0B0B0C] font-[400] text-center md:text-[20px] text-[16px] md:leading-[35px] leading-[22px] flex flex-col items-center'>
                            I passionate in Full Stack Developer 🚀 having a specialinterest in Front-end technologies and experience of building Web applications
                            👨‍💻.
                            {/* <span className='flex items-baseline'>
                                <Image width={35} height={30} src="/man-tech-emoji.png" className='w-[30px] h-[20px] object-contain' alt='man-tech-emoji' />.</span> */}
                        </p>
                    </div>
                </div>

                {/* buttons */}
                <div className='md:mt-[2.5rem] mt-[2rem] h-max'>
                    <Buttons title="Do You Want to Work With Me" link='/' />
                </div>
            </div>
        </div>
    )
}

export default Banner