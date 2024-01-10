import React from 'react';
import { motion } from 'framer-motion';
import SkillsTabs from './SkillsTabs';
import { staggerContainer } from '@/utils/motion';

function Expertise({ skills }) {
  return (
    <motion.div
      // variants={staggerContainer}
      // // variants={zoomIn(0.3, 1)}
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: 'false', amount: 0.25 }}
      className="mt-[100px] pt-[3rem] w-full flex flex-col xl:px-0 px-[15px] relative"
    >
      <motion.div
        // variants={textVariant(0.9)}
        // variants={zoomIn(0.1, 1)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-max capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-start sm:gap-[15px] gap-[7px] sm:mb-[50px]"
      >
        expertise
      </motion.div>
      {/* tabs views */}
      <motion.div
        // variants={zoomIn(0.4, 1)}
        // variants={zoomIn(0.1, 1)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        // md:mt-[100px]
        className="w-full h-max mt-[60px]"
      >
        <SkillsTabs skills={skills} />
      </motion.div>
    </motion.div>
  );
}

export default Expertise;
