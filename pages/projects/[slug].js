'use client';

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TiArrowLeft } from 'react-icons/ti';
// import { projects } from './api/Projects'
import SwiperComponents from '@/components/SwiperComponents';
import SkillsTabs from '@/components/SkillsTabs';
import { createClient } from 'next-sanity';
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion';
import ThemeSet from '@/components/ThemeSet';

function Index({ projects }) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!projects) router.push('/');
  }, [router, projects]);

  const { name, description, projectstabs, projectslinks } = projects;

  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    if (isActive === '') {
      setIsActive(projectstabs[0].projectstabsname);
    } else {
      setIsActive(isActive);
    }
  }, [isActive]);

  return (
    <>
      <Head>
        <title>{name} Projects</title>
        <meta name="description" content="Developer ? MERN Stack : Front End" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devLogo.png" />
      </Head>
      {/* contents */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className={`w-full h-full pt-[2.5rem] pb-[3.5rem] 1x1:max-w-[1280px] max-w-[1200px] mx-auto xl:px-0 px-[15px]`}
      >
        {/* back buttons */}
        <motion.button
          // variants={textVariant(0.9)}
          variants={zoomIn(0.1, 1)}
          onClick={() => router.push('/')}
          className="capitalize text-[16px] xsxs:px-[2.5rem] px-[2rem] xsxs:py-[0.8rem] py-[0.5rem] font-[500] shadow-md hover:shadow-none border-[1px] border-[#037ADE] text-black dark:text-white hover:text-white rounded-full hover:bg-[#037cded8] flex items-center gap-[6px] w-max"
        >
          <span>
            <TiArrowLeft size={24} />
          </span>
          go back
        </motion.button>

        {/* main div */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="h-full w-full relative mt-10"
        >
          {/* Projects Title*/}
          <div className="flex items-start gap-5">
            <div className="w-full flex items-center justify-start flex-col">
              <motion.div
                // variants={textVariant(0.9)}
                variants={zoomIn(0.1, 1)}
                className="mainText w-full text-left text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]"
              >
                <h1 className="xsxs:text-[2.6rem] text-[2.2rem] leading-[45px] font-semibold text-left">
                  <span className="">{name}</span> Projects
                </h1>
              </motion.div>
              <motion.p
                // variants={textVariant(0.9)}
                variants={zoomIn(0.1, 1)}
                style={{ lineHeight: '35px' }}
                className="xsxs:text-xl text-lg w-full mt-[1.2rem] mb-[2.3rem]"
                // 1x1:w-[50%] md:w-[65%] mr-auto
              >
                {description}
              </motion.p>
              <motion.div
                // variants={textVariant(0.9)}
                variants={zoomIn(0.1, 1)}
                className="w-full flex items-center justify-start"
              >
                <Link
                  href={projectslinks && projectslinks}
                  title={`Click to view Project Details`}
                  aria-label="Project Details"
                  target="_black"
                  className="font-[500] xsxs:text-xl text-lg w-max flex items-center justify-start h-max xsxs:px-[3.5rem] px-[2.5rem] xsxs:py-[0.8rem] py-[0.6rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer"
                >
                  View Site Demo
                </Link>
              </motion.div>
            </div>

            {/* languages uses with tabs views */}
            {/* <div className="w-1/2 h-max xl:block hidden">
              <SkillsTabs skills={projects} />
            </div> */}
          </div>

          {/* main contents */}
          <div className={`h-full`}>
            <div className="w-full relative flex mt-[3rem]">
              <div className="h-max w-full flex xl:flex-row flex-col gap-7 items-center justify-between">
                {/* left side */}
                <div className="xl:w-[30%] w-full h-full flex xl:items-start text-center flex-col">
                  <motion.h1
                    // variants={textVariant(0.9)}
                    variants={zoomIn(0.1, 1)}
                    className="capitalize xsxs:text-[1.8rem] text-[1.6rem] font-bold flex items-center justify-center mb-[30px]"
                  >
                    Project Pages
                  </motion.h1>
                  {/* tabs */}
                  <div
                    id="overFlowXAxies"
                    className="w-full flex xl:flex-col gap-7 py-2 items-start xl:overflow-none overflow-scroll"
                  >
                    {projectstabs?.map((ele, index) => {
                      const { _key, projectstabsname } = ele;

                      return (
                        <div
                          key={_key}
                          className={`h-max flex items-center justify-center`}
                        >
                          <motion.button
                            variants={textVariant(0.9 * index)}
                            onClick={() => {
                              setIsActive(projectstabsname);
                            }}
                            type="button"
                            title={projectstabsname}
                            className={`flex items-center flex-col gap-[8px] group shadow-md ${
                              isActive === projectstabsname
                                ? 'bg-[#037ADE] text-white'
                                : 'bg-[#037ADE]/5 dark:bg-[#037ADE]/20 hover:text-black dark:hover:text-white text-black/50 dark:text-white/50'
                            } xsxs:px-[3.5rem] px-[2.5rem] xsxs:py-[0.8rem] py-[0.6rem] rounded-full`}
                          >
                            <span
                              className={`xsxs:text-xl text-lg font-[500] whitespace-nowrap`}
                            >
                              {projectstabsname}
                            </span>
                          </motion.button>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* right side */}
                <div className="xl:w-[70%] w-full">
                  <motion.div
                    variants={zoomIn(0.1, 1)}
                    // variants={zoomIn(0.5, 1)}
                    className="overflow-hidden w-full h-max rounded-md"
                  >
                    <SwiperComponents
                      name={isActive}
                      data={projectstabs}
                      // height="xl:h-[500px] xsxs:h-[450px] h-[200px]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* languages uses with tabs views */}
          {/* xl:hidden block */}
          <div className="w-full h-max mt-[3rem] mb-6">
            {console.log(projects)}
            <SkillsTabs skills={projects} />
          </div>
        </motion.div>
      </motion.div>
      {/* theme changes */}
      <ThemeSet />
    </>
  );
}

export default Index;

Index.prototype = {
  product: PropTypes.object.isRequired,
};

export async function getServerSideProps({ params }) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2021-10-21',
    ignoreBrowserTokenWarning: true,
  });

  // Use id to fetch product
  const { slug } = params;
  const query = `*[_type == 'projects' && _id == $slug][0]`;
  const projects = await client.fetch(query, { slug });

  if (!projects) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projects,
    },
  };
}
