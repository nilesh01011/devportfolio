import Link from 'next/link';
import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div className='w-full h-full bg-[#0B0B0C] text-white py-[3rem] flex items-center justify-center flex-col shadow-md'>
                {/* titles */}
                <h2 className='text-[32px] font-bold'>Stay Connected</h2>
                {/* address and number */}
                <div className="my-[15px] flex items-center justify-center flex-col gap-3">
                    <p className='text-[#939BA8] font-bold'>Mumbai, Maharashtra</p>
                    <h5 className='text-[20px] font-bold'>nrrathodnr818@gmail.com</h5>
                    <p className='text-[#939BA8] font-bold'>(+91) 9359872268</p>
                </div>

                {/* socials connects */}
                <div className='flex items-center justify-center gap-[0.8rem] mt-[0.9rem]'>
                    <Link
                        href="https://github.com/nilesh01011"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub size={16} />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/nilesh-rathod-0bb62b223/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn size={16} />
                    </Link>

                    <Link
                        href="https://twitter.com/Nilesh1011000/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsTwitter size={16} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer