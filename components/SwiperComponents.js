import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';


function SwiperComponents({ carouselImages }) {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="w-full h-full rounded-[1rem]"
        >
            {
                carouselImages?.map((ele) => {
                    return (
                        <SwiperSlide key={ele.id} className='h-full w-full p-[2%]'>
                            <div className='cursor-grab w-[98%] h-[98%] mx-auto dark:bg-[#1d2738] rounded-md bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black'>
                                <Image src={ele.imgSrc} height={315} width={300} className='w-full h-full object-fill rounded-md shadow-md' alt='projects-images' />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default SwiperComponents