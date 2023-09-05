import { projects } from '@/pages/api/Projects';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function ProjectsTabs() {
    const [projectsTabs, setprojectsTabs] = useState(projects);

    const [activeProjects, setActiveProjects] = useState(1);

    const { theme, setTheme } = useTheme();


    return (
        <>
            <nav className='w-full h-auto flex items-center justify-center flex-wrap xs:gap-0 gap-y-[8px]' aria-label="Tabs">
                {
                    projectsTabs.map((ele) => {
                        const { id, title } = ele;
                        {/* bg-gradient-to-r from-[#037ADE] to-[#03E5B7] */ }

                        return (
                            <button type='button' onClick={() => setActiveProjects(id)} key={title} className={`h-max whitespace-nowrap relative w-max text-[18px] px-[22px] py-[6px] rounded-full ${activeProjects === id ? `bg-[#037ADE] shadow-md text-white` : ``} capitalize outline-none`}>
                                {title}
                            </button>
                        )
                    })
                }
            </nav>

            {/* contents */}

            <div className='w-full h-full'>
                {

                    projectsTabs.map((ele) => {
                        const { id, contents } = ele;

                        if (activeProjects === id) {
                            return (
                                <div key={id} className="w-full grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 justify-center sm:gap-[20px] gap-x-[10px] gap-y-[20px] mt-[40px]">
                                    {
                                        contents.map((el) => {
                                            const { id, imgScr, links, desc, name, bgLinear, languages } = el;
                                            {/* border-[#037ADE] */ }
                                            {/* style={{ background: `linear-gradient(to right, ${bgLinear})` }} */ }
                                            {/* p-[5px] */ }
                                            {/* dark:bg-[#0E1623] bg-[#e7edef] */ }
                                            return (
                                                <div key={id} className="w-full h-max rounded-[8px] dark:bg-[#1d2738] bg-[#F4F4F4] shadow-md ">
                                                    {/* images */}
                                                    <div className="h-[70%] w-full rounded-[8px_8px_0_0]">
                                                        <Image
                                                            src={imgScr && imgScr}
                                                            width={240} height={170}
                                                            title={`${name} projects`}
                                                            className="w-full h-[148px] object-cover rounded-[8px_8px_0_0]"
                                                            alt="projects-images"
                                                            loading="lazy"
                                                            decoding="async"
                                                            quality={50}
                                                            importance="high"
                                                            rel="none"
                                                        />
                                                    </div>
                                                    {/* titles */}
                                                    <div className='h-[30%] flex flex-col items-center md:p-[10px] py-[10px] px-[12px] mt-2'>
                                                        <p className='1x1:text-[18px] text-[16px] capitalize w-max flex font-bold items-center justify-center relative'>
                                                            {name}
                                                            {/* links icons */}
                                                            {/* <span className='absolute -right-[17px] top-0'>
                                                                <svg fill='#037ADE' xmlns="http://www.w3.org/2000/svg" className='w-[14px] h-[14px]' viewBox="0 0 24 24"><path d="M12.11,15.39,8.23,19.27a2.52,2.52,0,0,1-3.5,0,2.47,2.47,0,0,1,0-3.5l3.88-3.88a1,1,0,1,0-1.42-1.42L3.31,14.36a4.48,4.48,0,0,0,6.33,6.33l3.89-3.88a1,1,0,0,0-1.42-1.42ZM20.69,3.31a4.49,4.49,0,0,0-6.33,0L10.47,7.19a1,1,0,1,0,1.42,1.42l3.88-3.88a2.52,2.52,0,0,1,3.5,0,2.47,2.47,0,0,1,0,3.5l-3.88,3.88a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3.88-3.89A4.49,4.49,0,0,0,20.69,3.31ZM8.83,15.17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.92-4.92a1,1,0,1,0-1.42-1.42L8.83,13.75A1,1,0,0,0,8.83,15.17Z" /></svg>
                                                            </span> */}
                                                        </p>

                                                        {/* languages */}
                                                        <ul className='w-full flex items-center justify-center gap-[5px] mt-[8px] flex-wrap'>
                                                            {
                                                                languages?.map((el) => {
                                                                    const { id, name } = el;

                                                                    return (
                                                                        <li key={id} className={`1x1:text-[16px] text-[14px] pl-[5px] pr-[6px] relative before:content-[""] before:absolute before:-left-[6px] before:top-[37%] before:w-[5px] before:h-[5px] before:rounded-full before:bg-black dark:before:bg-white ${id <= 4 ? 'block' : 'hidden'}`}>
                                                                            {id === 4 ? '...' : name}
                                                                        </li>
                                                                    );


                                                                })
                                                            }
                                                        </ul>

                                                        {/* buttons */}
                                                        <div className='mt-6 mb-4'>
                                                            <Link href={`/id:${id}`} title={`${name} Projects Details`} className='1x1:text-[16px] text-[14px] rounded-full border-[1px] bg-[#037ADE] hover:bg-[#037cded8] border-[#037ADE] py-[8px] px-[22px] capitalize shadow-md hover:shadow-none text-white'>view details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default ProjectsTabs