import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import ExperienceTabs from './ExperienceTabs';
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion';
import { companyName } from '@/pages/api/Companys';

function Experiences() {
  const manTechEmoji = '/man-tech-emoji.png';
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      id="experience"
      className="w-full h-full xl:px-0 px-[15px] dark:text-white text-black md:mb-[80px] mb-[40px] py-[3rem] relative overflow-hidden sm:mt-[100px] mt-[50px]"
    >
      {/* titles */}
      <motion.div
        // variants={textVariant(0.9)}
        variants={zoomIn(0.1, 1)}
        className="w-max capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-start sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]"
      >
        Experiences
        <div className="sm:h-[45px] xs:h-[40px] h-[30px]">
          <Image
            width={50}
            height={45}
            src={manTechEmoji && manTechEmoji}
            className="w-full h-full object-contain"
            alt="projects-works"
          />
        </div>
      </motion.div>
      {/* contents */}
      <div className="w-full h-auto mb-[70px] flex flex-col gap-16">
        {companyName.map((ele) => {
          const { id, positionImg } = ele;
          return <ExperienceTabs key={id} positionImg={positionImg} company={ele} />;
        })}
      </div>
    </motion.div>
  );
}

export default Experiences;
