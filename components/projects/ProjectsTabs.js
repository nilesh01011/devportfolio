import { projects } from '@/pages/api/Projects';
import React, { useState } from 'react'
import ProjectsData from './ProjectsData';

function ProjectsTabs({ tabs, allProjects }) {

    const [activeProjects, setActiveProjects] = useState('All');

    return (
        <>
            <nav className='w-full h-auto flex items-center justify-start flex-wrap gap-5' aria-label="Tabs">
                {
                    tabs?.map((ele) => {
                        const { _id, projecttabsname } = ele;
                        return (
                            <button type='button' title={projecttabsname} onClick={() => setActiveProjects(projecttabsname)} key={_id} className={`h-max whitespace-nowrap font-semibold relative w-max xsxs:text-xl text-lg xsxs:px-[3.5rem] px-[2.2rem] xsxs:py-[0.8rem] py-[0.5rem] rounded-full shadow-md ${activeProjects === projecttabsname ? `bg-[#037ADE] text-white` : `bg-[#037ADE]/10 dark:bg-[#037ADE]/20 hover:text-black dark:hover:text-white text-black/50 dark:text-white/50`} capitalize`}>
                                {projecttabsname}
                            </button>
                        )
                    })
                }
            </nav>

            {/* contents */}

            <div className='w-full h-full'>
                {
                    tabs?.map((ele) => {
                        const { _id, projecttab, projecttabsname } = ele;

                        if (activeProjects === projecttabsname) {

                            return (
                                <div key={_id} className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-6 mt-[45px]">
                                    {
                                        projecttab.map((el) => {

                                            return allProjects.map((e) => {

                                                if (e._id === el.projectreference._ref) {

                                                    return (
                                                        <ProjectsData key={e._id} data={e} />
                                                    )
                                                }
                                            })
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