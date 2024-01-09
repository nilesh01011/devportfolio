import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import SkillsTabs from './SkillsTabs';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion';

function AboutSections() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      id="about"
      className="h-full xl:px-0 px-[15px] sm:mt-[100px] mt-[50px]"
    >
      <motion.div
        // variants={textVariant(0.9)}
        // variants={zoomIn(0.1, 1)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="w-max capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-start sm:gap-[15px] gap-[7px] sm:mb-[100px] mb-[50px]"
      >
        About Me
        {/* <div className="sm:h-[70px] xs:h-[60px] h-[50px]">
          <Image
            width={50}
            height={60}
            src="/faceAvatar.png"
            className="w-full h-full object-contain"
            alt="projects-works"
          />
        </div> */}
      </motion.div>
      <div className="w-full flex items-center xl:flex-row flex-col justify-between gap-[30px]">
        {/* left sides content */}
        {/* xl:order-1 order-2 */}
        <div className="xl:w-[55%] text-left w-full order-2">
          <div
            className="w-full text-left"
            // style={{
            //   WebkitLineClamp: 6,
            //   WebkitBoxOrient: 'vertical',
            //   overflow: 'hidden',
            //   display: '-webkit-box',
            // }}
          >
            {/* <motion.p
              //   variants={textVariant(0.9)}
              variants={zoomIn(0.1, 1)}
              className="mb-[1rem] mt-[0.5rem] font-bold xsxs:text-[1.7rem] text-[1.2rem]"
            >
              Developer ? <span className="text-[#01D9D2]">Front </span>End :{' '}
              <span className="text-[#01D9D2]">Back </span>End
            </motion.p> */}
            <motion.p
              //   variants={textVariant(0.9)}
              // variants={zoomIn(0.1, 1)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              // md:leading-[40px] leading-[34px]
              className="dark:text-[#B6BCCA] text-[#0B0B0C] flex items-center flex-col xsxs:text-[18px] text-[14px]"
            >
              {/* font-bold */}
              {/* ✨ I've been coding for over a year now. I'm a Software Developer who enjoys building
                            full-stack applications and learning new technologies. ✨ */}
              I've been coding for more than a year. I'm a Software Developer
              who likes making whole applications and learning new technologies
            </motion.p>

            <motion.p
              //   variants={textVariant(0.9)}
              // variants={zoomIn(0.1, 1)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] xsxs:text-[18px] text-[14px]"
            >
              {/* I'm looking for an opportunity to work on{' '}
              <b>creative 🎨 and innovative 💡 projects</b>, where I can improve
              my programming knowledge and skills. I want to{' '}
              <b>learn 📚 new things</b> while also developing my abilities. */}
              I'm searching for a chance to work on creative and innovative
              projects, where I can get better at programming. I want to learn
              new things while getting better at what I can already do.
            </motion.p>

            <motion.p
              //   variants={textVariant(0.9)}
              // variants={zoomIn(0.1, 1)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] xsxs:text-[18px] text-[14px]"
            >
              {/* One thing I'm good at is <b>debugging</b> 🔍 - finding and fixing
              errors in code. I make sure websites work properly and don't have
              issues that would cause problems for network administrators or end
              users. */}
              One thing I'm good at is finding and fixing errors in code
              (debugging). I make sure websites work correctly and don't have
              issues that would cause problems for network administrators or end
              users.
            </motion.p>

            <motion.p
              //   variants={textVariant(0.9)}
              // variants={zoomIn(0.1, 1)}
              transition={{ delay: 1 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-[0.7rem] dark:text-[#B6BCCA] text-[#0B0B0C] xsxs:text-[18px] text-[14px]"
            >
              {/* Overall, I'm eager to use my skills to contribute to interesting
              projects, continue growing as a developer, and achieve new
              learning goals. 🎯 */}
              In general, I'm excited to use my skills to help with interesting
              projects, keep getting better as a developer, and reach new
              learning goals.
            </motion.p>
          </div>
          {/* buttons */}
          <motion.button
            // variants={textVariant(0.9)}
            // variants={zoomIn(0.1, 1)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-[500] my-10 w-max h-max"
          >
            <Link
              href="/MyResume.pdf"
              title="Download Resume"
              className="font-semibold xsxs:text-xl text-lg w-full h-full xsxs:px-[3.5rem] px-[2.5rem] xsxs:py-[0.8rem] py-[0.6rem] flex items-center justify-center gap-[0.8rem] rounded-full shadow-md hover:shadow-none bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer"
              download="nrResume"
            >
              Download Resume
              <span>
                <FaDownload size={16} />
              </span>
            </Link>
          </motion.button>
        </div>

        {/* right sides images */}
        {/* xl:order-2 order-1 */}
        <div className="xl:w-[40%] w-full h-full order-1">
          {/* md:h-[480px] */}
          <motion.div
            // variants={zoomIn(0.4, 1)}
            // variants={zoomIn(0.1, 1)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            // 1x1:h-[50vh] lg:h-[380px]
            className="w-full xss:h-[340px] h-[280px] mx-auto"
          >
            <Image
              width={300}
              height={200}
              title="My Avatar Image"
              src="/meLogo_2.svg"
              // src="/meLogo.svg"
              loading="lazy"
              decoding="async"
              quality={50}
              importance="high"
              rel="none"
              className="w-full h-full object-contain"
              alt="aboutMe"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutSections;
