import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const mobileNav = () => {
    setShowNav(!showNav);
  };
  return (
    <>
      <header id='header'>
        <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6 lg:px-72'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <img src={logo} alt='' />
          </div>
          <div className='block lg:hidden'>
            <button
              className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
              onClick={mobileNav}
            >
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          <div
            className={`pt-6 lg:pt-0 w-full flex-grow lg:flex lg:items-center lg:w-auto lg:gap-24 ${
              showNav ? 'block' : 'hidden'
            } `}
          >
            <div className='text-sm lg:flex-grow'></div>
            <div>
              <a
                href='#about'
                className='uppercase text-md xl:text-lg 2xl:text-lg font-semibold font-body text-white hover:text-btn transition-all duration-300'
              >
                about
              </a>
            </div>
            <div>
              <a
                href='#mint'
                className='uppercase text-md xl:text-lg 2xl:text-lg font-semibold font-body text-white hover:text-btn transition-all duration-300'
              >
                mint
              </a>
            </div>

            <div>
              <a
                href='#roadmap'
                className='uppercase text-md xl:text-lg 2xl:text-lg font-semibold font-body text-white hover:text-btn transition-all duration-300'
              >
                roadmap
              </a>
            </div>

            <div>
              <a
                href='#faq'
                className='uppercase text-md xl:text-lg 2xl:text-lg font-semibold font-body text-white hover:text-btn transition-all duration-300'
              >
                faq
              </a>
            </div>

            <div>
              <a
                href='#team'
                className='uppercase text-md xl:text-lg 2xl:text-lg font-semibold font-body text-white hover:text-btn transition-all duration-300'
              >
                team
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
