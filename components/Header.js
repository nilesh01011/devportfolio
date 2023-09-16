import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar';
import { useRouter } from 'next/router';

function Header({ topProjects }) {
    const [isActive, setIsActive] = useState("");
    const [headerShadow, setHeaderShadow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleRedirect = (e, links) => {
        e.preventDefault();
        window.location.href = `${links}`;
        setIsActive(links)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
        setIsActive("");
        router.push('/');
    }

    useEffect(() => {
        const boxShadow = () => {
            if (window.scrollY >= 90) {
                setHeaderShadow(true);
            } else {
                setHeaderShadow(false);
            }
        };

        window.addEventListener('scroll', boxShadow);
    }, [])

    useEffect(() => {
        const scrollTouchTopWindows = () => {
            if (window.scrollY === 0) setIsActive("")
        };

        window.addEventListener('scroll', scrollTouchTopWindows);
    }, [])

    function SideBarOpen() {
        setIsOpen(true);
        document.querySelector('body').style.overflow = 'hidden';

        let menu_logo = document.querySelector('#menu'),
            CrossIcons = document.querySelector(
                '#closeBtn'
            );

        menu_logo.classList.add('active');
        CrossIcons.classList.add('active');

        if (CrossIcons.classList.contains('active')) {
            setTimeout(() => {
                CrossIcons.classList.add('activeMenu');
            }, 2200);
        }
    }

    const items = [
        {
            _id: "1",
            projectsName: "About",
            menuLinks: true,
            link: "#about"
        },
        {
            _id: "2",
            projectsName: "Projects",
            menuLinks: true,
            link: "#project"
        },
        {
            _id: "3",
            projectsName: "Experience",
            menuLinks: true,
            link: "#experience"
        },
        {
            _id: "4",
            projectsName: "Contact",
            menuLinks: true,
            link: "#contact"
        }
    ]

    return (
        <>
            <div className={`w-full flex items-center justify-between fixed top-0 bg-[#E7EDEF] dark:bg-[#0E1623] z-[10] ${headerShadow && 'shadow-md'}`}>
                {/* md:p-[1rem_3rem] p-[1rem_1.5rem] */}
                {/* 1x1:max-w-[1280px] max-w-[1200px] mx-auto */}
                <nav className='w-full flex items-center justify-between xsxs:py-[1.5rem] py-[0.8rem] xl:px-[2rem] px-[15px]'>
                    {/* logo */}
                    <span
                        // onClick={(e) => handleRedirect(e, "/")}
                        onClick={() => scrollToTop()}
                        className='text-[26px] font-black cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#037ADE] to-[#03E5B7] hover:from-[#03E5B7] hover:to-[#037ADE] transition-all ease-in duration-500'>
                        NR.
                    </span>
                    {/* sidebar menu */}
                    <ul className='md:flex items-center gap-8 hidden'>
                        {
                            items.map((ele) => {
                                return (
                                    <li onClick={(e) => handleRedirect(e, ele.link)} key={ele._id} className={`text-lg cursor-pointer font-[500] ${isActive === ele.link && 'underline underline-offset-[7px] text-[#037ADE]'} transition-all ease-in hover:scale-95 scale-100 hover:text-[#037ADE]`}>{ele.projectsName}</li>
                                )
                            })
                        }
                    </ul>

                    {/* mobile button */}
                    <div className='md:hidden block'>
                        <div id='menu' className='menu_logo' onClick={SideBarOpen}>
                            <span className='span1'></span>
                            <span className='span2'></span>
                            <span className='span3'></span>
                        </div>
                    </div>
                </nav>
            </div>
            {/* sidebar */}
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen} topProjects={topProjects} items={items} activeItems={isActive} handleRedirect={handleRedirect} />
        </>
    )
}

export default Header;
