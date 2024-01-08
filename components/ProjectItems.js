import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import SkillsImage from './skillsImage';

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
});

const urlFor = (source) => builder.image(source);

function ProjectItems({ description, name, projectslinks, skillstabs, image,directions }) {

  return (
    <div className="w-full flex xl:flex-row flex-col items-start gap-10">
      {/* images and button */}
      <div className={`xl:w-1/2 w-full flex flex-col gap-10 ${directions === "right" && "order-2"} ${directions === "left" && "xl:order-none order-2"}`}>
        {/* images */}
        <div
          className={`w-full xl:h-[400px] xsxs:h-[300px] h-[200px] mx-auto dark:bg-[#1d2738] rounded-[15px] bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black`}
        >
          <Image
            src={urlFor(image.asset._ref).url()}
            width={240}
            height={170}
            title={`${name} projects`}
            className="w-full h-full object-contain rounded-[8px_8px_0_0] transition-transform ease-in group-hover:scale-[1.1] scale-100"
            alt="projects-images"
            loading="lazy"
            decoding="async"
            quality={50}
            importance="high"
            rel="none"
            // onClick={() => router.push(`/projects/${_id}`)}
          />
        </div>
        {/* buttons */}
        <div
          // variants={textVariant(0.9)}
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
        </div>
      </div>
      {/* project details */}
      <div className={`xl:w-1/2 w-full flex items-center justify-start flex-col ${directions === "right" && "order-1"} ${directions === "left" && "xl:order-none order-1"}`}>
        {/* project name */}
        <div className="mainText w-full text-left text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7]">
          <h1 className="xsxs:text-[2.6rem] text-[2.2rem] select-none leading-[45px] font-semibold text-left">
            <span className="">{name}</span>
          </h1>
        </div>
        {/* project descriptions */}
        <p
          style={{ lineHeight: '35px' }}
          className="xsxs:text-xl text-lg w-full mt-[1.2rem] mb-[2.3rem]"
        >
          {description}
        </p>
        {/* languages uses with tabs views */}
        <div className="w-full flex flex-wrap items-end justify-start gap-[20px]">
          {skillstabs.map((ele) => {
            if (ele.tabsname === 'languages') {
              return ele.tabsarray.slice(0, 9).map((e, index) => {
                const { skillstabsname, _key, skillstabsimage } = e;
                return (
                  <div
                    key={_key}
                    className="w-max py-[12px] px-[24px] h-max shadow-md rounded-2xl bg-[#e1e9eb] dark:bg-[#131d2d] cursor-pointer flex flex-col items-center justify-center gap-[8px] group"
                  >
                    {index === 8 ? (
                      <span>...</span>
                    ) : (
                      <>
                        <SkillsImage
                          imgSrc={skillstabsimage}
                          name={skillstabsname}
                        />
                        <span className="xsxs:text-lg text-md whitespace-nowrap font-[500] group-hover:text-[#037ADE] transition-color ease-in">
                          {skillstabsname}
                        </span>
                      </>
                    )}
                  </div>
                );
              });
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectItems;
