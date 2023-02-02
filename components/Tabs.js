import { skills } from '@/pages/api/Skills';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

function Tabs() {
    const [skillsTabs, setSkillsTabs] = useState(skills);

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

                        return (
                            <button type='button' onClick={() => handleIdContent(id)} key={title} className={`h-max whitespace-nowrap relative w-max text-[18px] px-[22px] py-[6px] rounded-full ${activeSkills === id ? ` bg-gradient-to-r from-[#037ADE] to-[#03E5B7] shadow-md text-white` : ``} capitalize`}>
                                {title}
                            </button>
                        )
                    })
                }
            </nav>

            {/* contents */}

            <div className='w-[80%] mx-auto h-full'>
                {

                    skillsTabs.map((ele) => {
                        const { id, contents } = ele;

                        if (activeSkills === id) {
                            return (
                                <div key={id} className="w-[80%] mx-auto flex flex-wrap items-center justify-center gap-[20px] mt-[40px]">
                                    {
                                        contents.map((el) => {
                                            const { id, icons, name } = el;

                                            return (
                                                <div key={id} className="w-max py-[12px] px-[14px] h-[40px] rounded-full border-[2px] border-[#037ADE] flex items-center justify-center gap-[4px]">
                                                    <span className=''>{icons}</span>
                                                    {name}
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