import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import SidebarMenuItems from './SidebarMenuItems';

function SideBar({ isOpen, setIsOpen, topProjects, items, activeItems, handleRedirect }) {

  function ClossSideBar() {

    // setIsActive("");

    let menu_logo = document.querySelector('#menu'),
      CrossIcons = document.querySelector(
        '#closeBtn'
      );

    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 800);

    document.querySelector('body').style.overflow = 'auto';
    menu_logo.classList.remove('active');
    menu_logo.classList.add('threeLine');
    CrossIcons.classList.add('goUpperSide');

    CrossIcons.classList.remove('active');
    CrossIcons.classList.remove('activeMenu');

    if (menu_logo && menu_logo.classList.contains('threeLine')) {
      console.log(menu_logo);
      setTimeout(() => {
        menu_logo.classList.remove('threeLine');
      }, 2200);
    }
  }

  return (
    <>
      {
        isOpen &&
        <div className='w-full h-full z-[9997] md:hidden fixed left-0 top-0 right-0 bottom-0 cursor-pointer transition-[1s_cubic-bezier(0.46,0.03,0.52,0.96)] blur-sm backdrop-brightness-75'
          onClick={ClossSideBar} />
      }

      <div id="SideBar" className={`md:hidden fixed top-0 ${isOpen === true ? 'left-0' : '-left-[200%]'} xs:w-[360px] xsxs:w-[80%] w-[90%] transition-all duration-1000 h-full z-[9999]`}>
        {/* sidebar contents */}
        <div id="overFlowXAxies" className={`w-full h-full overflow-scroll bg-white dark:bg-[#0E1623] pb-[30px] z-[9999]`}>
          {/* close icons */}
          <div className='flex justify-between w-full items-center mb-4 sticky top-0 bg-white dark:bg-[#0E1623] px-[18px] pt-[18px]'>
            <div className='sm:h-[70px] xs:h-[60px] h-[50px]'>
              <Image width={50} height={60} src='/faceAvatar.png' className="w-full h-full object-contain" alt="projects-works" />
            </div>
            <div id="closeBtn" className={`${isOpen === true ? 'active' : ''}`}
              onClick={ClossSideBar}
            >
              <span className='span1'></span>
              <span className='span2'></span>
              <span className='span3'></span>
            </div>
          </div>
          {/* =======Btns End======= */}
          <div className='w-full h-max dark:text-white text-black'>

            <div className='w-full flex flex-col mt-4 text-black dark:text-white'>
              <h3 className='text-[26px] font-bold text-[#037ade] px-[18px]'>Hot Projects</h3>
              <SidebarMenuItems items={topProjects} ClossSideBar={ClossSideBar} />
            </div>

            <div className='w-full h-[1.5px] bg-[#037ade] my-7 px-[18px]'></div>

            <div className='w-full flex flex-col mt-4 text-black dark:text-white'>
              <h3 className='text-[26px] font-bold text-[#037ade] px-[18px]'>Links</h3>
              <ul className='w-full flex flex-col mt-4'>
                {
                  items.map((ele) => {
                    return (
                      <li onClick={(e) => { handleRedirect(e, ele.link), ClossSideBar() }} key={ele._id} className={`py-[0.8rem] font-semibold text-lg cursor-pointer px-[18px] ${activeItems === ele.link ? 'text-[#037ADE]' : 'text-black dark:text-white/80 hover:dark:text-white'} transition-all ease-in hover:bg-slate-200 dark:hover:bg-[#1D2738]/40 px-[18px]`}>{ele.projectsName}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default SideBar;