import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import ProjectsTabs from './ProjectsTabs';
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion';

function ProjectsWorks({ allProjects, tabs }) {
  const hammerImg = '/hammerImg.svg';
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      id="project"
      className="w-full h-full xl:px-0 px-[15px] dark:text-white text-black py-[3rem] sm:mt-[100px] mt-[50px]"
    >
      {/* titles */}
      <motion.div
        // variants={textVariant(0.9)}
        variants={zoomIn(0.1, 1)}
        className="w-max capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-start sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]"
      >
        coding projects
        <div className="sm:h-[45px] xs:h-[40px] h-[30px]">
          <Image
            width={50}
            height={45}
            src={hammerImg && hammerImg}
            className="w-full h-full object-contain"
            alt="projects-works"
          />
        </div>
      </motion.div>

      {/* contents */}
      <motion.div
        //   variants={zoomIn(0.4, 1)}
        variants={zoomIn(0.1, 1)}
        className="w-full h-auto"
      >
        <ProjectsTabs allProjects={allProjects} tabs={tabs} />
      </motion.div>
    </motion.div>
  );
}

export default ProjectsWorks;
