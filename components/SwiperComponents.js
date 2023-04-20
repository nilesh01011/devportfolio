import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';


function SwiperComponents({ carouselImages }) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            className="w-full h-full rounded-[1rem]"
        >
            {
                carouselImages?.map((ele) => {
                    return (
                        <SwiperSlide key={ele.id} className='h-full w-full rounded-[15px]'>
                            <div className='cursor-grab w-[98%] xs:h-[98%] h-[250px] mx-auto dark:bg-[#1d2738] rounded-[15px] bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black'>
                                <Image src={ele.imgSrc && ele.imgSrc} height={315} width={300} className='w-full h-full object-fill rounded-[15px] shadow-md' alt='projects-images' />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default SwiperComponents