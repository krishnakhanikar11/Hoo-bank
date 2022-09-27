import React from 'react'
import { navLinks } from '../constants'
import { useState } from 'react'
import { close,logo,menu } from '../assets'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full justify-between flex py-6 items-center navbar">

      {/* adding logo */}
      <img src={logo} className="w-[124px] h-[32px]" alt="hoobank" />

      {/* adding nav items  */}
      <ul className="list-none sm:flex hidden justify-end items-center">
        {navLinks.map((navLink) => (
          <li
            className={`font-poppins font-normal text-[16px] mr-10`}
            key={navLink.id}
          >
            <a href={`#${navLink.id}`}>{navLink.title}</a>
          </li>
        ))}
      </ul>

      {/* sidebar for mobile view */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={!toggleMenu ? menu : close}
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggleMenu((prev) => !prev)}
        />

        <div
          className={`${toggleMenu ? "flex" : "hidden"}
           p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-start">
            {navLinks.map((navLink, index) => (
              <li
                className={`font-poppins font-normal text-[16px] mb-4 `}
                key={navLink.id}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;