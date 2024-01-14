import Image from 'next/image';
import React from 'react';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

const urlFor = (source) => builder.image(source);

function ProjectCarouselImage({ imgSrc }) {
    return (
        <Image src={urlFor(imgSrc).url()} height={315} width={300} className='w-full h-full object-contain rounded-[15px] shadow-md' alt='projects-images' />
    )
}

export default ProjectCarouselImage