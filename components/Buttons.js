import { motion } from 'framer-motion';
import { textVariant, zoomIn } from '@/utils/motion';
import React from 'react';

function Buttons({ title, link }) {
  const urlLinks = link ? link : '';
  // hover:bg-[rgb(3,122,222,0.9)]

  const handleClicks = (e) => {
    e.preventDefault();
    window.location.href = `${link}`;
  };

  return (
    <motion.button
      // variants={textVariant(1)}
      variants={zoomIn(0.3, 1)}
      onClick={(e) => handleClicks(e)}
      aria-label={title}
      title={title}
      className="font-[600] w-full h-max py-[0.8rem] px-[3.5rem] md:text-xl xss:text-lg text-sm rounded-full shadow-md hover:shadow-none bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer"
    >
      {title}
    </motion.button>
  );
}

export default Buttons;
