import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function SwiperImage({ projects }) {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      className="w-full h-full rounded-[1rem]"
    >
      {/* xs:h-[98%] h-[250px] */}
      {projects?.map((ele, index) => {
        // console.log(ele.urlLinks);
        return (
          <SwiperSlide key={index} className="h-full w-full rounded-[15px] p-2">
            <a
              href={ele.urlLinks && ele.urlLinks}
              target="_blank"
              title={ele.alt}
              //   aria-label={`Read more about ${ele.alt}`}
              className={`cursor-pointer w-full h-[300px] mx-auto dark:bg-[#1d2738] rounded-[15px] bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black`}
            >
              <Image
                src={ele.srcImg}
                height={315}
                width={300}
                className="w-full h-full object-contain rounded-[15px] shadow-md"
                alt="projects-images"
              />
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperImage;
