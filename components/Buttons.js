import Link from 'next/link'
import React from 'react'

function Buttons({ title, link }) {
    const urlLinks = link ? link : '';
    // hover:bg-[rgb(3,122,222,0.9)]

    const handleClicks = (e) => {
        e.preventDefault();
        window.location.href = `${link}`
    }

    return (
        <button onClick={(e) => handleClicks(e)} className='font-[500] w-full h-max py-[0.8rem] px-[3.5rem] xsxs:text-[16px] text-[14px] rounded-full shadow-md hover:shadow-none bg-[#037ADE] hover:bg-[#037cded8] text-[#e7edef] select-none cursor-pointer'>
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