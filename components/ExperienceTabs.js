import { companyName } from '@/pages/api/Companys';
import Link from 'next/link';
import React from 'react'

function ExperienceTabs() {
    return (
        <div className='w-full h-full mb-[70px] flex flex-col items-center justify-center gap-[50px]'>
            {/* companys */}
            {
                companyName.map((ele) => {
                    const { id, year, months, company, subtitle, contents, links } = ele;

                    return (
                        <div key={id} className='w-full flex items-center justify-center flex-col'>
                            {/* <p className='mb-[1rem] mt-[0.5rem] font-bold'>Developer ? <span className='text-[#01D9D2]'>MERN </span>Stack : <span className='text-[#01D9D2]'>Front </span>End</p> */}
                            {/* text-[#9EBBE3] */}
                            <h6 className='text-[#8ca6c9] font-bold xs:text-[20px] text-[16px] tracking-[5px]'>{year}</h6>
                            <span className='xs:text-[16px] text-[14px] mt-[8px] dark:text-[#B6BCCA] text-[#0B0B0C]'>{months}</span>
                            <h2 className='xs:text-[32px] text-[24px] font-bold xs:mt-[1.5rem] mt-[0.8rem] flex items-center gap-[10px] group'>{company} <Link href={links} target='_blank' className='text-[#037ADE] cursor-pointer transition-all group-hover:block hidden'>#</Link></h2>
                            <span className='text-center text-[16px] mt-[8px] mb-[1.5rem] capitalize text-[#8ca6c9] font-bold xs:tracking-[2px]'>{subtitle}</span>
                            <ul className='md:leading-[30px] flex items-center flex-col gap-[5px] justify-center dark:text-[#B6BCCA] text-[#0B0B0C]'>
                                {
                                    contents.map((el) => {
                                        const { id, text } = el;

                                        return (
                                            <li key={id} className='text-center xs:text-[16px] text-[14px] list-inside list-decimal'>
                                                {text}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExperienceTabs