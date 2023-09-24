import { motion } from 'framer-motion';
import { staggerContainer, zoomIn } from '@/utils/motion';
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'

function ThemeSet() {

    const router = useRouter();

    const [detailsPage, setDetailsPage] = useState(false);

    useEffect(() => {
        if (router.pathname !== '/') {
            setDetailsPage(true)
        }
    }, [router.pathname])

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleThemeChange = () => {
        if (currentTheme === "dark") {
            setTheme("light")
        }

        if (currentTheme === "light") {
            setTheme("dark")
        }
    }

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("body").style.backgroundColor = '#0E1623'
        }

        if (theme === "light") {
            document.querySelector("body").style.backgroundColor = '#e7edef'
        }
    })

    if (!mounted) return null


    return (
        <>
            {/* sm:right-[22px] right-[15px] */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: 'false', amount: 0.25 }} className={`fixed bottom-[40px] 1x1:right-[42px] xl:right-[34px] sm:right-[22px] right-[15px] rounded-full z-50`}>
                <motion.button variants={zoomIn(0.4, 1)} onClick={() => handleThemeChange()} aria-label="theme changed button" title='Theme changed button' className='shadow-md xsxs:w-[60px] w-[50px] xsxs:h-[60px] h-[50px] bg-[#037ADE] hover:bg-[#037cded8] rounded-full flex items-center justify-center'>
                    {
                        currentTheme === "dark" ? (
                            <CiLight className="text-white" size={28} />
                        ) : (
                            <CiDark className="text-white" size={28} />
                        )
                    }

                    <style jsx>
                        {`
                            button {
                                box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3)
                            }
                        `}
                    </style>
                </motion.button>
            </motion.div>
        </>
    )
}

export default ThemeSet