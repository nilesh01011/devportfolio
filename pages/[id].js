import Buttons from '@/components/Buttons'
import ThemeSet from '@/components/ThemeSet'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { TiArrowLeft } from 'react-icons/ti'
import { projects } from './api/Projects'
import { AiFillEye, AiFillEyeInvisible, AiOutlineEye, AiOutlineEyeInvisible, } from 'react-icons/ai'
import SwiperComponents from '@/components/SwiperComponents';
import SkillsTabs from '@/components/SkillsTabs';

function Index() {
    const router = useRouter();
    const idSplite = router.query.id?.slice(3);

    useEffect(() => {
        if (idSplite) {

        } else {
            router.push('/')
        }
    })

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

    // active pages are displayed
    const [activePages, setActivePages] = useState([]);
    const [isActive, setIsActive] = useState(1);

    // projects links
    const [projectsLinks, setProjectLinks] = useState('');

    const showRecommedPolicies = (id) => {
        setIsActive(id)
    }

    // carousel sliders images
    const [carouselImages, setCarouselImages] = useState([]);

    // skills contents tabs
    const [skillTabs, setSkillTabs] = useState([]);

    useEffect(() => {
        const fetchData = projectsList?.map((ele) => {

            ele?.map((el) => {
                if (Number(idSplite) === el.id) {
                    setMainProjects(el)
                    setTitleName(mainProjects?.name);
                    setCategoryName(el.category);
                    setActivePages(el.pages);
                    setSkillTabs(el.skills);
                    setProjectLinks(el.links);
                }
            })
        })
    });

    // live project eye icons
    // const [eyeClose, setEyeClose] = useState(false);

    useEffect(() => {
        activePages?.map((ele) => {
            if (ele.id === 1) {
                setCarouselImages(ele.sliders)
            }
        });
    }, [activePages]);

    return (
        <>
            <Head>
                <title>{titleName} | {categoryName} Projects</title>
                <meta name="description" content="Developer ? MERN Stack : Front End" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/devLogo.png" />
            </Head>
            {/* contents */}
            <div className={`w-full h-full pt-[2.5rem] pb-[3.5rem] 1x1:max-w-[1280px] max-w-[1200px] mx-auto xl:px-0 px-[15px]`}>
                {/* back buttons */}
                <Link href='/' className='capitalize py-[8px] font-[500] text-sm px-[22px] shadow-md hover:shadow-none border-[1px] border-[#037ADE] text-black dark:text-white hover:text-white rounded-full hover:bg-[#037cded8] flex items-center gap-[6px] w-max'>
                    <span>
                        <TiArrowLeft size={20} />
                    </span>
                    go back
                </Link>

                {/* main div */}

                <div className='h-full w-full relative mt-8'>
                    {/* Projects Title*/}
                    <div className='flex items-center justify-center flex-col'>
                        <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]'>
                            <h1 className='sm:text-[2.5rem] xss:text-[1.8rem] xsxs:text-[1.6rem] text-[1.4rem] font-semibold'><span className=''>{titleName}</span> Projects</h1>
                        </div>
                        <p className='text-center 1x1:w-[50%] md:w-[65%] mx-auto mt-[1.2rem] mb-[2.1rem] md:block hidden'>{mainProjects && mainProjects.desc}</p>
                        <Link href={projectsLinks} target='_black' className='font-[500] w-max flex items-center justify-center h-max py-[0.8rem] px-[3.5rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer'>
                            View Site Demo

                            <style jsx>
                                {`
                                    button {
                                        box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
                                        font-weight: bold;
                                    }
                                    `}
                            </style>
                        </Link>
                    </div>


                    {/* main contents */}

                    <div className={`h-full ${activePages.length < 5 ? 'mb-[4rem]' : 'xl:mb-[10rem] md:mb-[8rem] mb-[3rem]'}`}>
                        <div className='w-full relative flex md:items-center flex-col md:justify-center sm:mt-[3rem] mt-[1rem]'>

                            {/* laptop and desktop view absolute contents */}
                            <div className='md:block hidden'>
                                {
                                    activePages?.map((ele) => {
                                        const { id, page, sliders } = ele;

                                        return (
                                            <div key={id} className={`xl:w-[25%] w-[26%] h-max flex items-center justify-center absolute ${id === 1 && '1x1:left-[8%] left-0 top-14'} ${id === 2 && '1x1:left-[8%] left-0 bottom-14'} ${id === 3 && '1x1:right-[8%] right-0 top-14'} ${id === 4 && '1x1:right-[8%] right-0 bottom-14'} ${activePages.length === 6 ? `${id === 5 && 'left-[22%] 1x1:-bottom-[5.5rem] -bottom-[5rem]'} ${id === 6 && 'right-[22%] 1x1:-bottom-[5.5rem] -bottom-[5rem]'}` : `${id === 5 && 'xl:left-[37.5%] left-[37%] xl:-bottom-[5.5rem] -bottom-[4rem]'}`}`}>
                                                <button onClick={() => { showRecommedPolicies(id), setCarouselImages(sliders) }} type='button' className={`flex items-center flex-col gap-[8px] group ${isActive === id ? 'bg-[#037ADE] text-white shadow-md' : 'bg-[#037ADE]/5 dark:bg-[#037ADE]/20 hover:text-black dark:hover:text-white text-black/50 dark:text-white/50'} p-[8px_26px] rounded-full outline-none`}>
                                                    <span className={`text-md font-[500]`}>
                                                        {page}
                                                    </span>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            {/* tabs and mobile view contents */}
                            <div className='md:hidden block mb-[2rem]'>
                                <nav id="overFlowXAxies" className={`w-full flex justify-start items-center gap-[10px] overflow-scroll h-max`}>
                                    {/* h-[40px] */}

                                    {
                                        activePages?.map((ele) => {
                                            const { id, page, sliders } = ele;
                                            return (
                                                <button key={id} type='button' onClick={() => { showRecommedPolicies(id), setCarouselImages(sliders) }} className={`flex items-center gap-[8px] text-[16px] h-max whitespace-nowrap relative w-max px-[26px] pb-[6px] ${isActive === id ? 'bg-[#037ADE] text-white shadow-md' : 'bg-[#037ADE]/10 dark:bg-[#037ADE]/20 hover:text-black dark:hover:text-white text-black/50 dark:text-white/50'} p-[8px_26px] rounded-full outline-none`}>
                                                    {/* h-[26px] */}
                                                    {/* ${isActive === id ? ' dark:text-white text-black' : ' text-black/50 dark:text-white/50'} */}

                                                    {/* <span className={`flex items-center justify-center text-[12px] rounded-full w-[20px] h-[20px] ${isActive === id ? 'bg-[#037ADE] text-white' : 'bg-[#037ADE]/30'}`}>{id}</span> */}
                                                    {page}

                                                    {/* <span className={`absolute -bottom-[2px] left-0 w-full h-[2px] ${isActive === id ? 'bg-[#037ADE] opacity-1' : 'bg-[#037ADE] opacity-[20%]'}`}></span> */}
                                                </button>
                                            )
                                        })
                                    }
                                </nav>
                            </div>

                            {/* middle images */}
                            <div className='overflow-hidden w-full lg:w-[460px] sm:w-[360px] mx-auto xs:h-[340px] h-max xl:mb-0 md:mb-[2rem] rounded-md'>
                                <SwiperComponents carouselImages={carouselImages && carouselImages} />
                            </div>

                            <div className='md:hidden block mt-[1.5rem]'>
                                <p className='xs:text-[16px] text-[14px] text-center xs:w-[80%] w-full mx-auto mt-[0.3rem]'>{mainProjects && mainProjects.desc}</p>
                            </div>
                        </div>
                    </div>

                    {/* languages uses with tabs views */}
                    <div className='w-full h-max'>
                        <SkillsTabs skillsTabs={skillTabs} />
                    </div>

                    {/* footer buttons */}
                    {/* <div className='flex items-center justify-center mt-[4rem]'>
                        <div className='sm:w-max w-full flex items-center'>
                            <Link href={projectsLinks} target='_black' className='font-[500] w-full flex items-center justify-center h-max py-[0.6rem] px-[3.5rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer'>
                                View Site Demo

                                <style jsx>
                                    {`
                                    button {
                                        box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
                                        font-weight: bold;
                                    }
                                    `}
                                </style>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* theme changes */}
            <ThemeSet />
        </>
    )
}

export default Index