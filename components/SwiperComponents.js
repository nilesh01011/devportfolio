import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import ProjectCarouselImage from './ProjectCarouselImage';

function SwiperComponents({ name, data,height }) {

    const [carouselImages, setCarouselImages] = useState([])

    useEffect(() => {
        if (name) {
            data.map((ele) => {
                const { projectstabsname, projectimages } = ele;

                if (projectstabsname === name) {
                    setCarouselImages(projectimages)
                }
            })
        }
    }, [name])

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            className="w-full h-full rounded-[1rem]"
        >
            {/* xs:h-[98%] h-[250px] */}
            {
                carouselImages?.map((ele) => {
                    return (
                        <SwiperSlide key={ele._key} className='h-full w-full rounded-[15px] py-2'>
                            <div className={`cursor-grab w-[98%] xl:h-[500px] xsxs:h-[450px] h-[200px] mx-auto dark:bg-[#1d2738] rounded-[15px] bg-gray-100 shadow-md flex items-center justify-center dark:text-white text-black`}>
                                <ProjectCarouselImage key={ele._key} imgSrc={ele.asset._ref} />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default SwiperComponents