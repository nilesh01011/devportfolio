import { motion } from 'framer-motion';
import { companyName } from '@/pages/api/Companys';
import { textVariant, zoomIn } from '@/utils/motion';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SwiperImage from './experienceProjects/SwiperImage';

function ExperienceTabs({ positionImg, company }) {
  return (
    <div className="w-full h-full flex xl:flex-row flex-col gap-10">
      {/* flex-col gap-[50px] items-center justify-center */}
      {/* company */}
      {/* left side */}
      <div
        className={`xl:w-1/2 w-full flex flex-col ${
          positionImg === 'left' ? '' : 'xl:order-2'
        }`}
      >
        {/* company name */}
        <motion.h2
          //   variants={textVariant(0.9)}
          variants={zoomIn(0.1, 1)}
          //   text-center xs:mt-[1.5rem] mt-[0.8rem]
          className="sm:w-max xs:text-[32px] xsxs:text-[28px] text-[24px] font-bold flex items-center sm:gap-[10px] group whitespace-normal"
        >
          {company.company}{' '}
          <Link
            href={company.links}
            target="_blank"
            title={company.links}
            aria-label={`Read more about ${company.company}`}
            className="text-[#037ADE] cursor-pointer transition-all group-hover:opacity-100 opacity-0 hover:underline"
          >
            #
          </Link>
        </motion.h2>
        {/* company role jobs */}
        <motion.span
          //   variants={textVariant(0.9)}
          variants={zoomIn(0.1, 1)}
          //   text-center
          className="text-[20px] mt-[8px] capitalize text-[#8ca6c9] font-bold"
        >
          {company.subtitle}
        </motion.span>
        {/* ============== company year =============== */}
        {/* <motion.h6
          //   variants={textVariant(0.9)}
          variants={zoomIn(0.3, 1)}
          className="text-[#8ca6c9] font-bold xsxs:text-[22px] text-[18px] tracking-[3px]"
        >
          {company.year}
        </motion.h6> */}
        {/* =========================================== */}
        {/* company months */}
        <motion.span
          //   variants={textVariant(0.9)}
          variants={zoomIn(0.1, 1)}
          className="text-[16px] mt-[8px] dark:text-[#B6BCCA] text-[#0B0B0C]"
        >
          {company.months} {company.year ? '|' : ''} {company.year}
        </motion.span>
        {/* company images */}
        <motion.div
          variants={zoomIn(0.1, 1)}
          className="flex items-start justify-start h-full mt-[1.5rem]"
        >
          <Link
            href={company.links}
            target="_blank"
            title={company.links}
            aria-label={`Read more about ${company.company}`}
            className="h-[300px]"
          >
            <Image
              src={company.companyImg}
              height={315}
              width={300}
              alt={company.company}
              //    xl:h-[500px] xsxs:h-[450px]
              className="w-full h-full object-contain shadow-md rounded-md"
            />
          </Link>
          {/* company projects with image carousel */}
          {/* <SwiperImage projects={company.companyProjectImg} /> */}
        </motion.div>
      </div>

      {/* right side */}
      <div className={`xl:w-1/2 w-full`}>
        <ul className="md:leading-[30px] flex items-start justify-start flex-col gap-[5px] dark:text-[#B6BCCA] text-[#0B0B0C]">
          {/* justify-center */}
          {company.contents.map((el, index) => {
            const { id, text } = el;

            return (
              <motion.li
                variants={textVariant(0.9)}
                key={id}
                className="text-left xsxs:text-[18px] text-[16px] list-inside md:leading-[40px] leading-[34px]"
              >
                {/* • */}
                <span className='font-semibold dark:text-white text-black'>{index + 1}.</span> {text}
              </motion.li>
            );
          })}
        </ul>
      </div>
      {/* {companyName.map((ele) => {
        const { id, year, months, company, subtitle, contents, links } = ele;

        return (
          <div
            key={id}
            className="w-full flex items-center justify-center flex-col"
          >
            <motion.h6
              variants={textVariant(0.9)}
              className="text-[#8ca6c9] font-bold xsxs:text-[22px] text-[18px] tracking-[3px]"
            >
              {year}
            </motion.h6>
            <motion.span
              variants={textVariant(0.9)}
              className="text-[18px] mt-[8px] dark:text-[#B6BCCA] text-[#0B0B0C]"
            >
              {months}
            </motion.span>
            <motion.h2
              variants={textVariant(0.9)}
              className="xs:text-[32px] xsxs:text-[28px] text-[24px] font-bold xs:mt-[1.5rem] mt-[0.8rem] flex items-center text-center sm:gap-[10px] group"
            >
              {company}{' '}
              <Link
                href={links}
                target="_blank"
                title={links}
                aria-label={`Read more about ${company}`}
                className="text-[#037ADE] cursor-pointer transition-all group-hover:block hidden hover:underline"
              >
                #
              </Link>
            </motion.h2>
            <motion.span
              variants={textVariant(0.9)}
              className="text-center text-[20px] mt-[8px] mb-[1.5rem] capitalize text-[#8ca6c9] font-bold"
            >
              {subtitle}
            </motion.span>
            <ul className="md:leading-[30px] flex items-center flex-col gap-[5px] justify-center dark:text-[#B6BCCA] text-[#0B0B0C]">
              {contents.map((el) => {
                const { id, text } = el;

                return (
                  <motion.li
                    variants={textVariant(0.9)}
                    key={id}
                    className="text-center xsxs:text-[18px] text-[16px] list-inside cursor-pointer md:leading-[40px] leading-[34px]"
                  >
                    • {text}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        );
      })} */}
    </div>
  );
}

export default ExperienceTabs;
