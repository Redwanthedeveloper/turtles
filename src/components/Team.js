import React from 'react';
import teamImage from '../assets/images/team.jpg';

const Team = () => {
  return (
    <>
      <section className='team py-12 px-4 2xl:px-72 mx-auto md:px-12' id='team'>
        <h1 className='font-black font-heading py-2 uppercase text-primary text-4xl md:pb-6 md:text-center'>
          The Team
        </h1>
        <div className='team__wrapper grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 2xl:gap-12'>
          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                XXXXXXXx
              </h3>
            </div>
          </a>

          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                YYYYYYYY
              </h3>
            </div>
          </a>

          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                ZZZZZZZZ
              </h3>
            </div>
          </a>

          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                XXXXXXXXXXX
              </h3>
            </div>
          </a>

          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                YYYYYYYYYYYYY
              </h3>
            </div>
          </a>

          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                ZZZZZZZZZZZZ
              </h3>
            </div>
          </a>

          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                YYYYYYYYYYYY
              </h3>
            </div>
          </a>

          <a href='#.'>
            <div className='team__items'>
              <img src={teamImage} alt={teamImage} className='rounded-lg' />
              <h3 className='font-bold text-md text-center py-2 font-body text-base text-white 2xl:text-xl'>
                ZZZZZZZZZZZZz
              </h3>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Team;
