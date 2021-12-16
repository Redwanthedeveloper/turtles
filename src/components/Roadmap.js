import React from 'react';
import roadmapImage from '../assets/images/roadmap.jpg';

const Roadmap = () => {
  return (
    <>
      <section className='roadmap py-12' id='roadmap'>
        <div className='roadmap__wrapper px-4 text-primary 2xl:px-72 mx-auto md:px-12'>
          <div
            className='roadmap__top flex flex-col pt-6'
            data-aos='fade-right'
            data-aos-duration='1200'
          >
            <h1 className='font-black font-heading text-4xl uppercase py-3 md:text-center lg:text-left 2xl:text-5xl'>
              Roadmap
            </h1>
            <p className='text-base leading-6 md:text-center md:text-lg md:leading-8 md:py-2 lg:text-left text-white 2xl:text-2xl'>
              Space Turtles is a full-time project and it will continue to be
              following the public sale. Below is what we're working towards in
              the short term.
              <br />
              <br />
              <strong>
                Future developments will be announced in Roadmap 2.0.{' '}
              </strong>
            </p>
          </div>
          <div className='main__roadmap'>
            <img src={roadmapImage} alt='' className='max-w-full mt-2' />
            {/* <h3 className='font-bold uppercase text-2xl text-btn pt-6'>
              roadmap
            </h3> */}
            {/* <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                25%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                we will upload most of the rares but we can't disclose the exact
                number . <br />
                - the beginning has more rares than any other round. <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='1800'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                3000 mints
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - Turtlemint price will be 0.05 ETH and that is cheaper than the
                launch price which is 0.07 ETH. <br />
                - the one's getting the SpaceTurtles with the flags can choose
                either to keep it as it certainly will go up in value OR
                directly sell them to us for 1 ETH which we will buy with a
                turtle smile.
                <br />
                - We will divide the mint into 10 parts so those who minted
                early don't have to be so very patient :) <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='2100'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                50%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - we will divide the 10.000 NFTs into 10 parts. <br />
                - the first will be the Turtlemint where the buyer gets a
                cheaper SpaceTurtle and a BIG shot in getting a rare one worth
                at least 1 ETH.
                <br />
                - To those holding 3 NFTs at the end of the mint will randomly
                get picked for a 20 SpaceTurtles airdrop giveaway. <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='2400'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                75%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - Turtlemint fee: 0.05 ETH (Presale)
                <br />
                - Launchmint fee: 0.07 ETH (Public sale) -Only Whitelisted can
                turtlemint (Presale) -Most rare SpaceTurtles are in the
                turtlemint <br />
                - We guarantee that the rares with flags will be rebought from
                buyers for 1 ETH! receive the passes before the concert after
                sellout). <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='2700'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                100%
              </h1>
              <p className='text-white text-base 2xl:text-2xl'>
                - We guarantee If the buyer HODL's the rare SpaceTurtles with
                flags to the end of round 2 which is 2000 minted SpaceTurtles
                they will be rebought for 1.2 ETH! - <br />
                - 20 SpaceTurtules airdrop giveaways will be given randomly to
                buyers holding 3 minted SpaceTurtles at the end of each round.{' '}
                <br />
                - If you hold more your chance of getting an airdrop giveaway
                increeses. <br />
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
