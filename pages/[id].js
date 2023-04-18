import Buttons from '@/components/Buttons'
import ThemeSet from '@/components/ThemeSet'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { TiArrowLeft } from 'react-icons/ti'
import { projects } from './api/Projects'
import { AiFillEye, AiFillEyeInvisible, AiOutlineEye, AiOutlineEyeInvisible, } from 'react-icons/ai'
import SwiperComponents from '@/components/SwiperComponents'

function Index() {
    const router = useRouter();
    const idSplite = router.query.id?.slice(3);

    const [projectsList, setProjectsList] = useState(
        projects.map((ele) => {
            if (ele.title === "all") {
                return ele.contents;
            }
        })
    );

    // title name is displayed
    const [titleName, setTitleName] = useState('');

    // category name is displayed
    const [categoryName, setCategoryName] = useState('');

    // main project contents is displayed
    const [mainProjects, setMainProjects] = useState([]);

    useEffect(() => {
        const fetchData = projectsList?.map((ele) => {

            ele?.map((el) => {
                if (Number(idSplite) === el.id) {
                    setMainProjects(el)
                    setTitleName(mainProjects?.name);
                    setCategoryName(el.category)
                }
            })
        })
    });

    const [isActive, setIsActive] = useState(1);

    const showRecommedPolicies = (id) => {
        setIsActive(id)
    }

    // live project eye icons
    const [eyeClose, setEyeClose] = useState(false);

    return (
        <>
            <Head>
                <title>{titleName} | {categoryName} Projects</title>
                <meta name="description" content="Developer ? MERN Stack : Front End" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* contents */}
            <div className={`w-full h-full pt-[2.5rem] pb-[3.5rem] 1x1:max-w-[1280px] max-w-[1200px] mx-auto xl:px-0 px-[15px]`}>
                {/* back buttons */}
                <Link href='/' className='capitalize py-[8px] 1x1:text-sm text-xs px-[22px] shadow-md border-[1px] border-[#037ADE] text-black dark:text-white hover:text-white rounded-md hover:bg-[#037cded8] flex items-center gap-[6px] w-max'>
                    <span>
                        <TiArrowLeft size={20} />
                    </span>
                    go back
                </Link>

                {/* main div */}

                <div className='h-full w-full relative mt-8'>
                    {/* Projects Title*/}
                    <div className='flex items-center justify-center flex-col'>
                        <h2 className='sm:text-[2.5rem] xss:text-[1.8rem] xsxs:text-[1.6rem] text-[1.4rem] font-semibold'><span className=''>{titleName}</span> Projects</h2>
                        <p className='text-center md:w-[65%] mx-auto mt-[1.2rem] md:block hidden'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    </div>


                    {/* main contents */}

                    <div className='h-full'>
                        <div className='w-full relative flex md:items-center flex-col md:justify-center sm:mt-[3rem] mt-[1rem]'>

                            {/* laptop and desktop view absolute contents */}
                            <div className='md:block hidden'>
                                <div className='xl:w-[25%] w-[26%] flex items-center justify-center absolute left-0 top-14'>
                                    <button onClick={() => showRecommedPolicies(1)} type='button' className='flex items-center flex-col gap-[8px]'>
                                        <span className={`${isActive === 1 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30 text-black/50 dark:text-white/50'} text-[12px] flex items-center justify-center rounded-full w-[20px] h-[20px]`}>1</span>
                                        <span className={`text-sm ${isActive === 1 ? 'underline dark:text-white text-black' : 'dark:text-white/50 text-black/50'} hover:underline`}>
                                            Home Page
                                        </span>
                                    </button>
                                </div>

                                <div className='xl:w-[25%] w-[26%] flex items-center justify-center absolute left-0 bottom-14'>
                                    <button onClick={() => showRecommedPolicies(2)} type='button' className='flex items-center flex-col gap-[8px]'>
                                        <span className={`${isActive === 2 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30 text-black/50 dark:text-white/50'} text-[12px] flex items-center justify-center rounded-full w-[20px] h-[20px]`}>2</span>
                                        <span className={`text-sm ${isActive === 2 ? 'underline dark:text-white text-black' : 'dark:text-white/50 text-black/50'} hover:underline`}>
                                            Product Details Page
                                        </span>
                                    </button>
                                </div>

                                <div className='xl:w-[25%] w-[26%] flex items-center justify-center absolute right-0 top-14'>
                                    <button type='button' onClick={() => showRecommedPolicies(3)} className='flex items-center flex-col gap-[8px]'>
                                        <span className={`${isActive === 3 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30 text-black/50 dark:text-white/50'} text-[12px] flex items-center justify-center rounded-full w-[20px] h-[20px]`}>3</span>
                                        <span className={`text-sm ${isActive === 3 ? 'underline dark:text-white text-black' : 'dark:text-white/50 text-black/50'} hover:underline`}>
                                            Signin ? Signup Page
                                        </span>
                                    </button>
                                </div>

                                <div className='xl:w-[25%] w-[26%] flex items-center justify-center absolute right-0 bottom-14'>
                                    <button type='button' onClick={() => showRecommedPolicies(4)} className='flex items-center flex-col gap-[8px]'>
                                        <span className={`${isActive === 4 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30 text-black/50 dark:text-white/50'} text-[12px] flex items-center justify-center rounded-full w-[20px] h-[20px]`}>4</span>
                                        <span className={`text-sm ${isActive === 4 ? 'underline dark:text-white text-black' : 'dark:text-white/50 text-black/50'} hover:underline`}>
                                            Cart Page
                                        </span>
                                    </button>
                                </div>

                                <div className='xl:w-[25%] w-[26%] flex items-center justify-center absolute left-[37%] xl:-bottom-[6.4rem] -bottom-[5rem]'>
                                    <button type='button' onClick={() => showRecommedPolicies(5)} className='flex items-center flex-col gap-[8px]'>
                                        <span className={`${isActive === 5 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30 text-black/50 dark:text-white/50'} text-[12px] flex items-center justify-center rounded-full w-[20px] h-[20px]`}>5</span>
                                        <span className={`text-sm ${isActive === 5 ? 'underline dark:text-white text-black' : 'dark:text-white/50 text-black/50'} hover:underline`}>
                                            Admin Page
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* tabs and mobile view contents */}
                            <div className='md:hidden block mb-[2rem]'>
                                <nav id="overFlowXAxies" className={`w-full flex justify-start items-center overflow-scroll h-[40px]`}>
                                    <button type='button' onClick={() => showRecommedPolicies(1)} className={`flex items-center gap-[8px] text-[14px] h-[26px] whitespace-nowrap relative w-max px-[26px] pb-[6px] ${isActive === 1 ? ' dark:text-white text-black' : ' text-black/50 dark:text-white/50'}`}>
                                        <span className={`flex items-center justify-center text-[12px] rounded-full w-[20px] h-[20px] ${isActive === 1 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30'}`}>1</span>
                                        Home Page

                                        <span className={`absolute -bottom-[2px] left-0 w-full h-[2px] ${isActive === 1 ? 'bg-[#037ADE] opacity-1' : 'bg-[#037ADE] opacity-[20%]'}`}></span>
                                    </button>

                                    <button type='button' onClick={() => showRecommedPolicies(2)} className={`flex items-center gap-[8px] text-[14px] h-[26px] whitespace-nowrap relative w-max px-[26px] pb-[6px] ${isActive === 2 ? 'dark:text-white text-black' : ' text-black/50 dark:text-white/50'}`}>
                                        <span className={`flex items-center justify-center text-[12px] rounded-full w-[20px] h-[20px] ${isActive === 2 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30'}`}>2</span>
                                        Product Details Page

                                        <span className={`absolute -bottom-[2px] left-0 w-full h-[2px] ${isActive === 2 ? 'bg-[#037ADE] opacity-1' : 'bg-[#037ADE] opacity-[20%]'}`}></span>
                                    </button>

                                    <button type='button' onClick={() => showRecommedPolicies(3)} className={`flex items-center gap-[8px] text-[14px] h-[26px] whitespace-nowrap relative w-max px-[26px] pb-[6px] ${isActive === 3 ? 'dark:text-white text-black' : ' text-black/50 dark:text-white/50'}`}>
                                        <span className={`flex items-center justify-center text-[12px] rounded-full w-[20px] h-[20px] ${isActive === 3 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30'}`}>3</span>
                                        Signin ? Signup Page

                                        <span className={`absolute -bottom-[2px] left-0 w-full h-[2px] ${isActive === 3 ? 'bg-[#037ADE] opacity-1' : 'bg-[#037ADE] opacity-[20%]'}`}></span>
                                    </button>

                                    <button type='button' onClick={() => showRecommedPolicies(4)} className={`flex items-center gap-[8px] text-[14px] h-[26px] whitespace-nowrap relative w-max px-[26px] pb-[6px] ${isActive === 4 ? 'dark:text-white text-black' : ' text-black/50 dark:text-white/50'}`}>
                                        <span className={`flex items-center justify-center text-[12px] rounded-full w-[20px] h-[20px] ${isActive === 4 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30'}`}>4</span>
                                        Cart Page

                                        <span className={`absolute -bottom-[2px] left-0 w-full h-[2px] ${isActive === 4 ? 'bg-[#037ADE] opacity-1' : 'bg-[#037ADE] opacity-[20%]'}`}></span>
                                    </button>

                                    <button type='button' onClick={() => showRecommedPolicies(5)} className={`flex items-center gap-[8px] text-[14px] h-[26px] whitespace-nowrap relative w-max px-[26px] pb-[6px] ${isActive === 5 ? 'dark:text-white text-black' : ' text-black/50 dark:text-white/50'}`}>
                                        <span className={`flex items-center justify-center text-[12px] rounded-full w-[20px] h-[20px] ${isActive === 5 ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30'}`}>5</span>
                                        Admin Page

                                        <span className={`absolute -bottom-[2px] left-0 w-full h-[2px] ${isActive === 5 ? 'bg-[#037ADE] opacity-1' : 'bg-[#037ADE] opacity-[20%] '}`}></span>
                                    </button>
                                </nav>
                            </div>

                            {/* middle images */}
                            {/* <div className='lg:w-[400px] sm:w-[350px] w-full h-[300px] shadow-md bg-gray-100 rounded-md xl:mb-0 md:mb-[2rem] mx-auto'></div> */}
                            <div className='overflow-hidden w-full lg:w-[460px] sm:w-[360px] h-[340px] xl:mb-0 md:mb-[2rem] rounded-md'>
                                <SwiperComponents />
                            </div>

                            <div className='md:hidden block mt-[1.5rem]'>
                                <p className='xs:text-[16px] text-[14px] text-center xs:w-[80%] w-full mx-auto mt-[0.3rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                            </div>
                        </div>
                    </div>

                    {/* footer buttons */}
                    <div className='flex items-center justify-center xl:mt-[10rem] md:mt-[8rem] sm:mt-[3rem] mt-[2rem]'>
                        <div className='w-max'>
                            {/* <Link onMouseOver={() => setEyeClose(true)} onMouseLeave={() => setEyeClose(false)} href='#' className='flex items-center gap-3 justify-center font-[550] w-full h-max md:py-[0.7rem] py-[0.5rem] px-[2.6rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer capitalize'>
                                <span>
                                    {
                                        eyeClose === true ?
                                            <AiFillEye size={20} /> :
                                            <AiOutlineEyeInvisible size={20} />
                                    }
                                </span>

                                Live demo
                            </Link> */}
                            {/* <Buttons title="Live Demo" link='' /> */}
                            {/* onClick={(e) => handleClicks(e)} */}
                            <button className='font-[550] w-full h-max py-[0.8rem] px-[3.5rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer'>
                                View Site Demo

                                <style jsx>
                                    {`
                                    button {
                                        box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
                                    }
                                    `}
                                </style>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* theme changes */}
            <ThemeSet />
        </>
    )
}

export default Index