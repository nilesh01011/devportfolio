import { motion } from 'framer-motion';
import { companyName } from '@/pages/api/Companys';
import { textVariant } from '@/utils/motion';
import Link from 'next/link';
import React from 'react'

function ExperienceTabs() {
    return (
        <div className='w-full h-full mb-[70px] flex flex-col items-center justify-center gap-[50px]'>
            {/* company */}
            {
                companyName.map((ele) => {
                    const { id, year, months, company, subtitle, contents, links } = ele;

                    return (
                        <div key={id} className='w-full flex items-center justify-center flex-col'>
                            {/* <p className='mb-[1rem] mt-[0.5rem] font-bold'>Developer ? <span className='text-[#01D9D2]'>MERN </span>Stack : <span className='text-[#01D9D2]'>Front </span>End</p> */}
                            {/* text-[#9EBBE3] */}
                            <motion.h6 variants={textVariant(0.9)} className='text-[#8ca6c9] font-bold xsxs:text-[22px] text-[18px] tracking-[3px]'>{year}</motion.h6>
                            <motion.span variants={textVariant(0.9)} className='text-[18px] mt-[8px] dark:text-[#B6BCCA] text-[#0B0B0C]'>{months}</motion.span>
                            <motion.h2 variants={textVariant(0.9)} className='xs:text-[32px] xsxs:text-[28px] text-[24px] font-bold xs:mt-[1.5rem] mt-[0.8rem] flex items-center text-center gap-[10px] group'>{company} <Link href={links} target='_blank' title={links} aria-label={`Read more about ${company}`} className='text-[#037ADE] cursor-pointer transition-all group-hover:block hidden hover:underline'>#</Link></motion.h2>
                            <motion.span variants={textVariant(0.9)} className='text-center text-[20px] mt-[8px] mb-[1.5rem] capitalize text-[#8ca6c9] font-bold'>{subtitle}</motion.span>
                            <ul className='md:leading-[30px] flex items-center flex-col gap-[5px] justify-center dark:text-[#B6BCCA] text-[#0B0B0C]'>
                                {
                                    contents.map((el) => {
                                        const { id, text } = el;

                                        return (
                                            <motion.li variants={textVariant(0.9)} key={id} className='text-center xsxs:text-[18px] text-[16px] list-inside cursor-pointer md:leading-[40px] leading-[34px]'>
                                                • {text}
                                            </motion.li>
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