import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { CiDark, CiLight } from 'react-icons/ci'

function ThemeSet() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleThemeChange = () => {
        if (currentTheme === "dark") {
            setTheme("light")
        }

        if (currentTheme === "light") {
            setTheme("dark")
        }
    }

    return (
        <>
            {/* fixed buttons */}
            {/* 1x1:bottom-[50px] bottom-[30px] */}
            <div className='fixed top-[40px] 1x1:right-[42px] right-[22px] rounded-full'>
                <button onClick={() => handleThemeChange()} className='shadow-lg w-[35px] h-[35px] bg-[#037ADE] rounded-full flex items-center justify-center'>
                    {
                        currentTheme === "dark" ? (
                            <CiLight className="text-white" size={22} />
                        ) : (
                            <CiDark className="text-white" size={22} />
                        )
                    }

                    <style jsx>
                        {`
                            button {
                                box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3)
                            }
                        `}
                    </style>
                </button>
            </div>
        </>
    )
}

export default ThemeSet