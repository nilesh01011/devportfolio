import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import ProjectsTabs from './ProjectsTabs';
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion';
import ProjectItems from './ProjectItems';
import Link from 'next/link';
import { useRouter } from 'next/router';

function ProjectsWorks({ allProjects, tabs, topProjects }) {
  const hammerImg = '/hammerImg.svg';
  const [projectFilter, setProjectFilter] = useState(allProjects.slice(0, 4));

  const router = useRouter();

  // // more data load
  // const handleLoadMoreProjects = () => {
  //   setProjectFilter((prev) => [
  //     ...prev,
  //     ...allProjects.slice(prev.length, prev.length + 4),
  //   ]);
  // };

  // // less data show
  // const handleLessDataProjects = () => {
  //   setProjectFilter(allProjects.slice(0, 4));
  //   window.location.href = '/#project';
  // };

  return (
    <motion.div
      // variants={staggerContainer}
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: 'false', amount: 0.25 }}
      id="project"
      className="w-full h-full xl:px-0 px-[15px] dark:text-white text-black py-[3rem] sm:mt-[100px] mt-[50px]"
    >
      {/* titles */}
      <motion.div
        // variants={textVariant(0.9)}
        // variants={zoomIn(0.1, 1)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-max capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-start sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]"
      >
        coding projects
        {/* <div className="sm:h-[45px] xs:h-[40px] h-[30px]">
          <Image
            width={50}
            height={45}
            src={hammerImg && hammerImg}
            className="w-full h-full object-contain"
            alt="projects-works"
          />
        </div> */}
      </motion.div>

      {/* contents */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full h-auto flex flex-col gap-28"
      >
        {/* [projectFilter] */}
        {topProjects.map((ele, index) => (
          <ProjectItems
            key={index}
            {...ele}
            directions={index % 2 === 0 ? 'left' : 'right'}
            allProjects={allProjects}
          />
        ))}
      </motion.div>

      {/* <ProjectsTabs allProjects={allProjects} tabs={tabs} /> */}
      {/* load more button */}

      {/* <div className="mt-24 w-full flex items-center justify-center">
        {projectFilter.length < allProjects.length ? (
          <button
            aria-label={
              projectFilter.length < allProjects.length
                ? 'show more'
                : 'less data'
            }
            title={
              projectFilter.length < allProjects.length
                ? 'show more'
                : 'less data'
            }
            className="font-[600] w-[400px] h-max py-[0.8rem] capitalize px-[3.5rem] md:text-xl xss:text-lg text-sm rounded-full shadow-md hover:shadow-none border-[1px] border-[#037ADE] hover:bg-[#037cded8] text-[#037ADE] hover:text-[#e7edef] select-none cursor-pointer"
            // onClick={() => setLoadItems(loadItems + 4)}
            onClick={() => handleLoadMoreProjects()}
          >
            show more
          </button>
        ) : (
          <button
            aria-label="collapse data"
            title="collapse data"
            className="font-[600] w-[400px] h-max py-[0.8rem] capitalize px-[3.5rem] md:text-xl xss:text-lg text-sm rounded-full shadow-md hover:shadow-none border-[1px] border-[#037ADE] hover:bg-[#037cded8] text-[#037ADE] hover:text-[#e7edef] select-none cursor-pointer"
            // onClick={() => setLoadItems(loadItems + 4)}
            onClick={() => handleLessDataProjects()}
          >
            collapse data
          </button>
        )}
      </div> */}

      <div className="mt-24 w-full flex items-center justify-center">
        <motion.button
        
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}

          type="button"
          aria-label="All Projects"
          title="All Projects"
          className="font-[600] w-[400px] h-max py-[0.8rem] capitalize px-[3.5rem] md:text-xl xss:text-lg text-sm rounded-full shadow-md hover:shadow-none border-[1px] border-[#037ADE] hover:bg-[#037cded8] text-[#037ADE] hover:text-[#e7edef] select-none cursor-pointer"
          onClick={() => router.push('/allprojects')}
        >
          All Projects
        </motion.button>
      </div>
    </motion.div>
  );
}

export default ProjectsWorks;
