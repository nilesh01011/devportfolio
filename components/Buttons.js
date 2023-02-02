import Link from 'next/link'
import React from 'react'

function Buttons({ title, link }) {
    const urlLinks = link ? link : '';
    // hover:bg-[rgb(3,122,222,0.9)]

    return (
        <button className='font-[550] w-full h-max md:py-[0.9rem] py-[0.7rem] px-[2.6rem] rounded-full bg-[#037ADE] text-[#e7edef] select-none cursor-pointer'>
            {title}

            <style jsx>
                {`
                button {
                    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
                }
                `}
            </style>
        </button>
    )
}

export default Buttons