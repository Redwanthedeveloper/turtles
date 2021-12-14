import React from 'react';
import logo from '../assets/images/logo.svg';
import discord from '../assets/images/icons/discord.svg';
import instagram from '../assets/images/icons/instagram.svg';
import twitter from '../assets/images/icons/twitter.svg';
const Footer = () => {
  return (
    <>
      <footer
        className='py-5 md:py-3 px-4 bg-secondary 2xl:px-72 mx-auto md:px-12'
        id='footer'
      >
        <div className='flex justify-between gap-10'>
          <div className='footer__logo'>
            <img src={logo} alt='' className='max-w-full' />
          </div>
          <div className='footer__links flex justify-between flex-1 md:flex-none md:gap-32'>
            <a href='#.' target='_blank' rel='noopener noreferrer'>
              <img src={discord} alt='' />
            </a>

            <a href='#.' target='_blank' rel='noopener noreferrer'>
              <img src={instagram} alt='' />
            </a>

            <a href='#.' target='_blank' rel='noopener noreferrer'>
              <img src={twitter} alt='' />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
