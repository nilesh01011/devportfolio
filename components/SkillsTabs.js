import { skills } from '@/pages/api/Skills';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

function Tabs({ skillsTabs }) {

    const [activeSkills, setActiveSkills] = useState(1);

    const handleIdContent = (id) => {
        setActiveSkills(id)
    }

    const { theme, setTheme } = useTheme();


    return (
        <>
            <nav className='w-full h-[20px] flex items-center justify-center' aria-label="Tabs">
                {
                    skillsTabs.map((ele) => {
                        const { id, title } = ele;
                        {/* bg-gradient-to-r from-[#037ADE] to-[#03E5B7] */ }

                        return (
                            <button type='button' onClick={() => handleIdContent(id)} key={title} className={`h-max whitespace-nowrap relative w-max text-[18px] px-[26px] py-[8px] rounded-full ${activeSkills === id ? `bg-[#037ADE] shadow-md text-white` : ``} capitalize`}>
                                {title}
                            </button>
                        )
                    })
                }
            </nav>

            {/* contents */}

            <div className='md:w-[80%] w-full md:mx-auto h-full'>
                {

                    skillsTabs.map((ele) => {
                        const { id, contents } = ele;

                        if (activeSkills === id) {
                            return (
                                <div key={id} className="md:w-[80%] md:mx-auto w-full flex flex-wrap items-center justify-center sm:gap-[20px] gap-x-[10px] gap-y-[20px] mt-[45px]">
                                    {
                                        contents.map((el) => {
                                            const { id, icons, name } = el;

                                            {/* hover:bg-[#037ADE] hover:text-white */ }
                                            return (
                                                <div key={id} className="w-max py-[8px] px-[16px] h-max rounded-full border-[2px] border-[#037ADE] shadow-md cursor-pointer flex items-center justify-center gap-[6px]">
                                                    <span className=''>{icons}</span>
                                                    <span className='text-[14px]'>
                                                        {name}
                                                    </span>
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

export default Tabs