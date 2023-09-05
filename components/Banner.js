import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'

function Banner() {

    return (
        <div className='w-full min-h-screen flex items-center flex-col justify-center px-[15px] relative'>
            <div className='h-full flex items-center flex-col justify-center'>
                <h6 className={`dark:text-[#939ba8] text-[#747476] uppercase tracking-[3px] text-[16px] font-[600]`}>👋 Hi, My name is</h6>
                {/* name and roles */}
                <div className='block text-center 1x1:my-[2rem] md:mt-[1.5rem] mt-[0.8rem] md:mb-[1.8rem] mb-[1rem] md:leading-[38px] leading-[48px] tracking-[1px] text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'>
                    <h1 id='fontWeight' style={{ fontWeight: '900' }} className='font-black lg:text-6xl md:text-5xl xsxs:text-[48px] text-[38px]'>Nilesh Rathod.</h1>
                    <h1 id='fontWeight' style={{ fontWeight: '900' }} className='font-black lg:text-6xl md:text-5xl xsxs:text-[48px] text-[38px] md:mt-[1.3rem]'>I am a full-stack developer.</h1>
                </div>

                {/* small definations about */}
                <div className='xs:w-[80%] mx-auto'>
                    {/* md:text-[20px] */}

                    <div className='xl:block hidden'>
                        <p className=' font-[400] dark:text-[#B6BCCA] text-[#0B0B0C] md:leading-[40px] leading-[22px] flex items-center flex-col'>
                            <span className='1x1:text-[18px] text-[16px]'>I passionate in Full Stack Developer 🚀 having a special</span>
                            <span className='1x1:text-[18px] text-[16px]'>interest in Front-end technologies and experience of</span>
                            <span className='flex items-baseline 1x1:text-[18px] text-[16px]'>
                                building Web applications
                                👨‍💻
                                {/* <Image width={35} height={30} src="/man-tech-emoji.png" className='w-[30px] h-[25px] object-contain' alt='man-tech-emoji' /> */}
                                .</span>
                        </p>
                    </div>
                    {/* mobile view */}
                    <div className='xl:hidden block'>
                        <p className='dark:text-[#B6BCCA] text-[#0B0B0C] font-[400] text-center md:text-[20px] text-[17px] md:leading-[35px] leading-[26px] flex flex-col items-center'>
                            I passionate in Full Stack Developer 🚀 having a special interest in Front-end technologies and experience of building Web applications
                            👨‍💻.
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
                    <Buttons title="Do You Want to Work With Me" link='#about' />
                </div>
            </div>
        </div>
    )
}

export default Banner