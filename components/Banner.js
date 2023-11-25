import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Buttons from './Buttons';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Image from 'next/image';
import { slideIn, staggerContainer, textVariant, zoomIn } from '@/utils/motion';

function Banner() {
  const [socialMediaIconDirection, setSocialMediaIconDirection] =
    useState(false);

  useEffect(() => {
    const iconsDirection = () => {
      if (window.scrollY >= 100) {
        setSocialMediaIconDirection(true);
      } else {
        setSocialMediaIconDirection(false);
      }
    };

    window.addEventListener('scroll', iconsDirection);
  }, []);

  return (
    <motion.div
      variants={staggerContainer}
      // variants={zoomIn(0.3, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      id="banner"
      // xss:pt-0 pt-20
      className="pt-[71px] w-full min-h-screen flex items-center justify-center gap-5 xl:px-0 px-[15px] relative"
    >
      {/* h-[800px] */}
      {/* left side */}
      <div className="xl:w-[70%] w-full h-full flex items-start flex-col overflow-hidden">
        <motion.h6
          // variants={textVariant(0.5)}
          variants={zoomIn(0.1, 1)}
          className={`dark:text-[#B6BCCA] text-[#0B0B0C] uppercase tracking-[2px] xsxs:text-[18px] text-[16px] font-[600]`}
        >
          👋 Hi, My name is
        </motion.h6>
        {/* name and roles */}
        {/* md:mt-[1.8rem] mt-[1.5rem] */}
        <motion.div
          // variants={textVariant(0.7)}
          variants={zoomIn(0.1, 1)}
          className="mainText block text-left 1x1:my-[2rem] mt-[1.2rem] md:mb-[2rem] mb-[1.8rem] md:leading-[38px] small-device:leading-[54px] leading-[40px] tracking-[1px] text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]"
        >
          <h1
            id="fontWeight"
            style={{ fontWeight: '900' }}
            className="font-black select-none lg:text-6xl md:text-5xl xs:text-[48px] small-device:text-[45px] text-[35px]"
          >
            Nilesh Rathod
          </h1>
          <h1
            id="fontWeight"
            style={{ fontWeight: '900' }}
            className="font-black select-none lg:text-6xl md:text-5xl xs:text-[48px] small-device:text-[45px] text-[35px] md:mt-[1rem] capitalize"
          >
            Full-Stack developer
          </h1>
        </motion.div>

        {/* small definations about */}
        <div className="1x1:w-[90%] w-full mr-auto text-left">
          {/* leading-[45px] */}
          <motion.p
            // variants={textVariant(0.9)}
            variants={zoomIn(0.1, 1)}
            className="font-[500] dark:text-[#B6BCCA] text-[#0B0B0C] flex items-start flex-col"
          >
            <span
              className="xss:text-xl small-device:text-lg text-md text-left w-full mx-auto"
              style={{ lineHeight: '35px' }}
            >
              {/* lg:w-[60%] md:w-[80%] sm:w-[85%] */}
              {/* Passionate full-stack web developer 🚀 with a special interest in front-end technologies and experience building responsive web applications 👨‍💻 */}
              Proficient full-stack developer 🚀 with expertise in front-end web
              development and moderate experience in React Native mobile
              development. Able to build responsive web applications 👨‍💻 and
              Android mobile apps with React Native.
            </span>
          </motion.p>
        </div>

        {/* buttons */}
        <div className="md:mt-[2.5rem] mt-[2rem] h-max">
          <Buttons title="Collaborate With Me?" link="#about" />
          {/* <Buttons title="Do You Want to Work With Me" link='#about' /> */}
        </div>

        {/* social links */}
        <motion.ul
          variants={zoomIn(0.1, 1)}
          className={`relative flex items-center transition-all duration-500 text-[#037ADE] mt-[1.5rem]`}
        >
          <li
            // variants={zoomIn(0.3, 1)}
            // variants={zoomIn(0.8, 1)}
            className="p-[10px]"
          >
            <Link
              href="https://github.com/nilesh01011"
              target="_blank"
              rel="noreferrer"
              aria-label="Github repository"
              title="Github repository"
            >
              <FiGithub className="hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100" />
            </Link>
          </li>

          <li
            // variants={zoomIn(0.3, 1)}
            // variants={zoomIn(0.9, 1)}
            className="p-[10px]"
          >
            <Link
              href="https://www.linkedin.com/in/nilesh-rathod-0bb62b223/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin Profile"
              title="Linkedin Profile"
            >
              <FiLinkedin className="hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100" />
            </Link>
          </li>

          <li
            // variants={zoomIn(0.3, 1)}
            // variants={zoomIn(1, 1)}
            className="p-[10px]"
          >
            <Link
              href="https://twitter.com/Nilesh1011000/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Profile"
              title="Twitter Profile"
            >
              <FiTwitter className="hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100" />
            </Link>
          </li>
          {/* bg-[#0B0B0C] dark:bg-[#B6BCCA] */}
          <li
            // variants={slideIn('left', 'tween', 0.7, 0.9)}
            // variants={zoomIn(0.3, 1)}
            className={`w-[100px] h-[2px] rounded-full bg-[#037ADE]`}
          ></li>
        </motion.ul>
      </div>

      <motion.div
        variants={zoomIn(0.1, 1)}
        // variants={zoomIn(0.4, 1)}
        className="w-max xl:block hidden 1x1:h-[70vh] lg:h-[480px] xsxs:h-[420px] h-[300px] mx-auto"
      >
        <Image
          width={300}
          height={200}
          title="My Avatar Image"
          src="/about_1.svg"
          loading="lazy"
          decoding="async"
          quality={50}
          importance="high"
          rel="none"
          className="w-full h-full object-contain"
          alt="aboutMe"
        />
      </motion.div>

      {/* fixed links */}
      {/* md:block hidden */}
      <div
        className={`fixed hidden xl:left-[25px] xs:left-2 left-0 1x1:bottom-[40px] bottom-[20px] z-[10]`}
      >
        {/* dark:text-[#B6BCCA] text-[#0B0B0C] */}
        <ul
          className={`relative flex items-center ${
            socialMediaIconDirection ? 'flex-col' : 'sm:flex-row flex-col'
          } transition-all duration-500 text-[#037ADE]`}
        >
          <motion.li
            variants={zoomIn(0.3, 1)}
            // variants={zoomIn(0.8, 1)}
            className="p-[10px]"
          >
            <Link
              href="https://github.com/nilesh01011"
              target="_blank"
              rel="noreferrer"
              aria-label="Github repository"
              title="Github repository"
            >
              <FiGithub className="hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100" />
            </Link>
          </motion.li>

          <motion.li
            variants={zoomIn(0.3, 1)}
            // variants={zoomIn(0.9, 1)}
            className="p-[10px]"
          >
            <Link
              href="https://www.linkedin.com/in/nilesh-rathod-0bb62b223/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin Profile"
              title="Linkedin Profile"
            >
              <FiLinkedin className="hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100" />
            </Link>
          </motion.li>

          <motion.li
            variants={zoomIn(0.3, 1)}
            // variants={zoomIn(1, 1)}
            className="p-[10px]"
          >
            <Link
              href="https://twitter.com/Nilesh1011000/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Profile"
              title="Twitter Profile"
            >
              <FiTwitter className="hover:text-[#037cded8] transition-all ease-in xsxs:text-[25px] text-[18px] hover:scale-95 scale-100" />
            </Link>
          </motion.li>
          {/* bg-[#0B0B0C] dark:bg-[#B6BCCA] */}
          <motion.li
            variants={slideIn('left', 'tween', 0.7, 0.9)}
            // variants={zoomIn(0.3, 1)}
            className={`${
              socialMediaIconDirection
                ? 'w-[2px] h-[100px]'
                : 'sm:w-[100px] sm:h-[2px] w-[2px] h-[100px]'
            } rounded-full bg-[#037ADE]`}
          ></motion.li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Banner;
