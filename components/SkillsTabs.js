// import { skills } from '@/pages/api/Skills';
import React, { useState } from 'react'
import SkillsImage from './skillsImage';

function Tabs({ skills }) {

    // const handleIdContent = (id) => {
    //     setActiveSkills(id)
    // }

    // const { theme, setTheme } = useTheme();

    const [activeSkills, setActiveSkills] = useState('languages');

    return (
        <>
            <nav className='w-full h-max flex items-center gap-5 justify-center flex-wrap' aria-label="Tabs">
                {
                    skills?.skillstabs?.map((ele) => {
                        const { _key, tabsname } = ele;

                        return (
                            <button type='button' title={tabsname} onClick={() => setActiveSkills(tabsname)} key={_key} className={`h-max whitespace-nowrap font-[500] relative w-max xsxs:text-xl text-lg xsxs:px-[3.5rem] px-[2.5rem] xsxs:py-[0.8rem] py-[0.6rem] rounded-full shadow-md ${activeSkills === tabsname ? `bg-[#037ADE] text-white` : `hover:text-black dark:hover:text-white text-black/50 dark:text-white/50 bg-[#037ADE]/10 dark:bg-[#037ADE]/20`} capitalize`}>
                                {tabsname}
                            </button>
                        )
                    })
                }
            </nav>

            {/* contents */}

            <div className='md:w-[80%] w-full md:mx-auto h-full'>
                {

                    skills?.skillstabs?.map((ele) => {

                        if (ele.tabsname === activeSkills) {
                            return (
                                <div key={ele._key} className=" w-full flex flex-wrap items-center justify-center gap-[20px] mt-[45px]">
                                    {
                                        ele.tabsarray?.map((el) => {
                                            const { skillstabsname, _key, skillstabsimage } = el;
                                            return (
                                                <div key={_key} className="w-max py-[12px] px-[24px] h-max shadow-md rounded-2xl bg-[#e1e9eb] dark:bg-[#131d2d] cursor-pointer flex flex-col items-center justify-center gap-[8px] group">
                                                    <SkillsImage imgSrc={skillstabsimage} name={skillstabsname} />
                                                    <span className='xsxs:text-lg text-md whitespace-nowrap font-[500] group-hover:text-[#037ADE] transition-color ease-in'>
                                                        {skillstabsname}
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
