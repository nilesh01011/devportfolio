import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function SwiperComponents() {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full h-full rounded-[1rem]"
        >
            <SwiperSlide className='h-full w-full p-[2%]'>
                <div className='cursor-grab w-[98%] h-[98%] dark:bg-[#1d2738] rounded-md bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black'>
                    Slide 1
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-full w-full p-[2%]'>
                <div className='cursor-grab w-[98%] h-[98%] dark:bg-[#1d2738] rounded-md bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black'>
                    Slide 2
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-full w-full p-[2%]'>
                <div className='cursor-grab w-[98%] h-[98%] dark:bg-[#1d2738] rounded-md bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black'>
                    Slide 3
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-full w-full p-[2%]'>
                <div className='cursor-grab w-[98%] h-[98%] dark:bg-[#1d2738] rounded-md bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black'>
                    Slide 4
                </div>
            </SwiperSlide>
            <SwiperSlide className='h-full w-full p-[2%]'>
                <div className='cursor-grab w-[98%] h-[98%] dark:bg-[#1d2738] rounded-md bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black'>
                    Slide 5
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default SwiperComponents