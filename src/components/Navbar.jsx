import React, { useState } from 'react'
import { IoMenu, IoClose } from 'react-icons/io5'
import { navItems } from '../data'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [activeLink, setActiveLink] = useState(navItems[0].link) 

  const handleLinkClick = (link) => {
    setActiveLink(link) 
    setMenu(false) // Optionally close menu on click (for mobile)
  }

  return (
    <nav>
      <div className=''>
        <div className='w-full fixed top-0 left-0 z-50 bg-white md:px-16 px-8 py-2'>
          <div className='z-50 flex justify-between items-center w-full'>
            <img
              src={logo}
              className=' w-14 h-14 cursor-pointer'
            />
            {menu ? (
              <IoClose
                size={35}
                onClick={() => {
                  setMenu(!menu)
                }}
                className='block lg:hidden cursor-pointer'
              />
            ) : (
              <IoMenu
                size={35}
                onClick={() => {
                  setMenu(!menu)
                }}
                className='block lg:hidden cursor-pointer '
              />
            )}

            <div className='hidden font-bold lg:flex  lg:px-14 lg:gap-10 gap-4 justify-center items-center font-chelsea '>
              {navItems.map((navItem) => (
                <div key={navItem.item}>
                  <a
                    href={navItem.link}
                    onClick={() => handleLinkClick(navItem.link)} // Update active link on click
                    className={`${
                      activeLink === navItem.link
                        ? 'text-primaryGreen border-b-2 border-primaryGreen'
                        : 'text-gray-700'
                    }`}
                  >
                    {navItem.item}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu bar for small screens */}
        <div
          className={`${
            menu
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
          } transition-all ease-in-out duration-500 z-40 bg-gray-100 text-black fixed w-full h-screen top-0 left-0 flex items-center justify-center`}
        >
          <ul className='flex-col py-80 flex font-chelsea text-black items-center justify-center gap-6'>
            {navItems.map((navItem) => (
              <a
                key={navItem.item}
                href={navItem.link}
                onClick={() => handleLinkClick(navItem.link)}
                className={`${
                  activeLink === navItem.link
                    ? 'text-primaryGreen'
                    : 'text-black'
                }`}
              >
                {navItem.item}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
