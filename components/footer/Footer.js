import { footerVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
// import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
// import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

function Footer() {
    return (
        <motion.div variants={footerVariants} initial="hidden" whileInView="show" id="contact" className='w-full h-full bg-[#090e16] text-white md:py-[4rem] py-[3rem] flex items-center justify-center flex-col shadow-md'>
            {/* bg-[#0B0B0C] */}
            {/* titles */}
            <h2 className='md:text-[2.6rem] xsxs:text-[2.3rem] text-[2rem] font-bold'>Stay Connected</h2>
            {/* address and number */}
            <div className="my-[15px] flex items-center justify-center flex-col gap-3">
                <p className='text-[#939BA8] font-bold xsxs:text-[1.6rem] text-[1.2rem]'>Mumbai, Maharashtra</p>
                <h5 className='xss:text-[1.8rem] text-[1.4rem] font-bold'>nilesh.rathodnr02@gmail.com</h5>
                <p className='text-[#939BA8] font-bold xsxs:text-[1.6rem] text-[1.2rem]'>(+91) 9359872268</p>
            </div>

            {/* socials connects */}
            {/* md:hidden */}
            <div className='flex items-center justify-center gap-[1rem] mt-[0.9rem]'>
                {/* <Link
                    href="https://github.com/nilesh01011"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github repository"
                    title='Github repository'
                >
                    <BsGithub size={24} />
                </Link>

                <Link
                    href="https://www.linkedin.com/in/nilesh-rathod-0bb62b223/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin Profile"
                    title='Linkedin Profile'
                >
                    <FaLinkedinIn size={24} />
                </Link>

                <Link
                    href="https://twitter.com/Nilesh1011000/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter Profile"
                    title='Twitter Profile'
                >
                    <BsTwitter size={24} />
                </Link> */}

                <Link
                    href="https://github.com/nilesh01011"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github repository"
                    title='Github repository'
                >
                    <FiGithub className='xsxs:text-[25px] text-[18px] transition-all ease-in hover:scale-95 scale-100' />
                </Link>

                <Link
                    href="https://www.linkedin.com/in/nilesh-rathod-0bb62b223/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin Profile"
                    title='Linkedin Profile'
                >
                    <FiLinkedin className='xsxs:text-[25px] text-[18px] transition-all ease-in hover:scale-95 scale-100' />
                </Link>

                <Link
                    href="https://twitter.com/Nilesh1011000/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter Profile"
                    title='Twitter Profile'
                >
                    <FiTwitter className='xsxs:text-[25px] text-[18px] transition-all ease-in hover:scale-95 scale-100' />
                </Link>
            </div>
        </motion.div>
    )
}

export default Footer