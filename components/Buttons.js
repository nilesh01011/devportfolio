import Link from 'next/link'
import React from 'react'

function Buttons({ title, link }) {
    const urlLinks = link ? link : '';
    // hover:bg-[rgb(3,122,222,0.9)]

    const handleClicks = (e) => {
        e.preventDefault();
    }

    return (
        <button onClick={(e) => handleClicks(e)} className='font-[550] w-full h-max py-[0.8rem] px-[3.5rem] rounded-full shadow-md bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer'>
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