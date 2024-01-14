import React from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image';

const builder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
})

const urlFor = (source) => builder.image(source);

function SkillsImage({ imgSrc, name,itemsImageSize }) {
    return (
        <Image
            src={urlFor(imgSrc.asset._ref).url()}
            alt={name}
            height={50}
            width={200}
            loading="lazy"
            decoding="async"
            quality={50}
            importance="high"
            rel="none"
            className={`w-full ${itemsImageSize ? itemsImageSize : "md:h-[50px] xsxs:h-[40px] h-[30px]"} object-contain group-hover:scale-100 scale-90 transition-transform ease-in`}
            title={name}
        />
    )
}

export default SkillsImage