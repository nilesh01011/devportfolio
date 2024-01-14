'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { createClient } from 'next-sanity';
import ThemeSet from '@/components/ThemeSet';
import Head from 'next/head';
import ProjectItems from './projectItems';
import { staggerContainer } from '@/utils/motion';
import { motion } from 'framer-motion';
import { TiArrowLeft } from 'react-icons/ti';
import { useRouter } from 'next/router';

function Index({ projects }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>All Projects Listed</title>
        <meta
          name="description"
          content="Nilesh Rathod as a Software Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devLogo.png" />
      </Head>

      <main
        className={`w-full h-full 1x1:max-w-full 1x1:px-[32px] max-w-[1200px] mx-auto py-[3rem]`}
      >
        {/* back buttons */}
        <motion.button
          // variants={textVariant(0.9)}
          onClick={() => router.push('/')}
          className="capitalize text-[16px] xsxs:px-[2.5rem] px-[2rem] xsxs:py-[0.8rem] py-[0.5rem] font-[500] shadow-md hover:shadow-none border-[1px] border-[#037ADE] text-[#037ADE] hover:text-white rounded-full hover:bg-[#037cded8] flex items-center gap-[6px] w-max"
        >
          <span>
            <TiArrowLeft size={24} />
          </span>
          go back
        </motion.button>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: 'false', amount: 0.25 }}
          id="project"
          className="w-full h-full xl:px-0 px-[15px] dark:text-white text-black mt-[3rem]"
        >
          {/* titles */}
          <motion.div
            // variants={textVariant(0.9)}
            // variants={zoomIn(0.1, 1)}
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ delay: 0.7 }}
            className="w-max capitalize sm:text-[2.5rem] xss:text-[2.2rem] text-[2rem] font-bold flex items-center justify-start sm:gap-[15px] gap-[7px] mb-[50px]"
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
            transition={{ delay: 0.7 }}
            className="w-full h-auto flex flex-col gap-24"
          >
            {projects.map((ele, index) => (
              <ProjectItems
                key={index}
                {...ele}
                directions={index % 2 === 0 ? 'left' : 'right'}
                allProjects={ele}
              />
            ))}
          </motion.div>
        </motion.div>
      </main>
      {/* theme changes */}
      <ThemeSet />
    </>
  );
}

export default Index;

Index.prototype = {
  projects: PropTypes.object.isRequired,
};

export async function getServerSideProps() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: '2021-10-21',
    ignoreBrowserTokenWarning: true,
  });

  // fetch projects
  const query = `*[_type == 'projects'] | order(name desc)`;
  const projects = await client.fetch(query);

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
