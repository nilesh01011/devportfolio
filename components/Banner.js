import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'

function Banner() {

    return (
        <div className='w-full h-screen flex items-center flex-col justify-center px-[15px] relative'>
            {/* before:content-[""] before:absolute before:left-0 before:top-0 before:bottom-0 before:right-0 before:h-full before:w-full before:bg-[url("/bannerIcons.svg")] before:bg-no-repeat before:bg-cover */}
            {/* <Image height={800} width={630} className="h-screen absolute -left-[5%] top-0 bottom-0" src="/leftSideBanner.svg" alt='bannerBGOne' /> */}
            {/* absolutes */}
            {/* <Image height={600} width={1000} className="w-full h-screen absolute left-0 top-0 bottom-0 right-0" src="/bannerIcons.svg" alt='bannerBGOne' /> */}
            {/* <Image height={600} width={500} className="absolute md:-left-[30%] sm:-left-[50%] -left-[70%] -top-[5%]" src="/bannerBG.svg" alt='bannerBGOne' />
            <Image height={400} width={300} className="absolute md:-right-[10%] sm:-right-[15%] -right-[45%] md:-bottom-[5%] -bottom-[25%]" src="/bannerBGTwo.svg" alt='bannerBGOne' /> */}

            <div className='h-full flex items-center flex-col justify-center'>
                {/* sm:text-[16px] */}
                {/* dark:text-[#939ba8] text-[#342C2C] */}
                <h6 className={`dark:text-[#939ba8] text-[#747476] uppercase tracking-[3px] md:text-[16px] text-[14px] font-[600]`}>Hi, My name is</h6>
                {/* name and roles */}
                <div className='block text-center 1x1:my-[1.4rem] md:mt-[1.5rem] mt-[0.8rem] md:mb-[1.5rem] mb-[1rem] leading-[43px] text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'>
                    <h1 id='fontWeight' style={{ fontWeight: '900' }} className='font-black lg:text-6xl md:text-5xl text-[40px]'>Nilesh Rathod.</h1>
                    <h1 id='fontWeight' style={{ fontWeight: '900' }} className='font-black lg:text-6xl md:text-5xl text-[40px] md:mt-[1.3rem]'>I am a full-stack developer.</h1>
                </div>

                {/* small definations about */}
                <div className='xs:w-[80%] mx-auto'>
                    {/* md:text-[20px] */}

                    <div className='xl:block hidden'>
                        <p className=' font-[400] dark:text-[#B6BCCA] text-[#0B0B0C] md:text-[20px] text-[16px] md:leading-[40px] leading-[22px] flex items-center flex-col'>
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
                        <p className='dark:text-[#B6BCCA] text-[#0B0B0C] font-[400] text-center md:text-[20px] text-[16px] md:leading-[35px] leading-[26px] flex flex-col items-center'>
                            I passionate in Full Stack Developer 🚀 having a special interest in Front-end technologies and experience of building Web applications
                            👨‍💻.
                            {/* <span className='flex items-baseline'>
                                <Image width={35} height={30} src="/man-tech-emoji.png" className='w-[30px] h-[20px] object-contain' alt='man-tech-emoji' />.</span> */}
                        </p>
                    </div>
                </div>

                {/* buttons */}
                <div className='md:mt-[2.5rem] mt-[2rem] h-max'>
                    {/* <Buttons title="Do You Want my Resume" link='/' /> */}
                    {/* <button className='font-[550] w-full h-max py-[1rem] px-[3.5rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer'>
                        Do You Want my Resume

                        <style jsx>
                            {`
                                    button {
                                        box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
                                    }
                                    `}
                        </style>
                    </button> */}
                    <Buttons title="Do You Want to Work With Me" link='/' />
                </div>
            </div>
        </div>
    )
}

export default Banner