import Link from 'next/link';
import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';

const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

const urlFor = (source) => builder.image(source);

function ProjectsData({ data }) {

    const { _id, name, image, skillstabs } = data;

    return (
        <div key={_id} className={`w-full h-max rounded-[8px] dark:bg-[#1d2738] bg-[#F4F4F4] shadow-md transition-all group`}>
            {/* images */}
            <div className="h-[70%] w-full rounded-[8px_8px_0_0] bg-[#E1E9EB] dark:bg-[#131D2D] overflow-hidden">
                <Image
                    src={urlFor(image.asset._ref).url()}
                    width={240} height={170}
                    title={`${name} projects`}
                    className="w-full h-[180px] object-cover rounded-[8px_8px_0_0] transition-transform ease-in group-hover:scale-[1.1] scale-100"
                    alt="projects-images"
                    loading="lazy"
                    decoding="async"
                    quality={50}
                    importance="high"
                    rel="none"
                />
            </div>
            {/* titles */}
            <div className='h-[30%] flex flex-col items-center py-[1rem] px-[12px] mt-2'>
                <p className='xsxs:text-2xl text-xl capitalize w-max flex font-bold items-center justify-center relative'>
                    {name}
                </p>

                {/* languages */}
                <ul className='w-full flex items-center justify-center gap-[5px] mt-[14px] flex-wrap'>
                    {
                        skillstabs?.map((el) => {

                            if (el.tabsname === 'languages') {

                                return el.tabsarray.slice(0, 4).map((ele, index) => {

                                    return (
                                        <li key={ele._key} className={`xsxs:text-xl text-[14px] pl-[5px] pr-[6px] relative before:content-[""] before:absolute before:-left-[6px] before:top-[37%] before:w-[5px] before:h-[5px] before:rounded-full before:bg-black dark:before:bg-white`}>
                                            {index === 3 ? '...' : ele.skillstabsname}
                                        </li>
                                    )
                                })
                            }
                        })
                    }
                </ul>

                {/* buttons */}
                <div className='mt-7 mb-4'>
                    <Link href={`/projects/${_id}`} title={`${name} Projects Details`} aria-label={`${name} Projects Details`} className='xsxs:text-lg text-md rounded-full font-[500] bg-[#037ADE] hover:bg-[#037cded8] slg:px-[3.5rem] px-[2.4rem] py-[0.8rem] capitalize shadow-md hover:shadow-none text-white'>view details</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectsData