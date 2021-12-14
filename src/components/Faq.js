import React from 'react';
import Collapsible from 'react-collapsible';

const Faq = () => {
  return (
    <>
      <section className='faq py-12 px-4 2xl:px-72 mx-auto md:px-12' id='faq'>
        <h2 className='text-primary 2xl:text-5xl text-center font-black font-heading text-4xl uppercase mb-6'>
          faq
        </h2>
        <p className='text-primary text-center md:text-lg 2xl:text-xl'>
           frequently asked questions.
        </p>
        <div className='faq__wrapper mt-12 md:w-2/3 md:mx-auto '>
          <div className='faq__items'>
            <Collapsible trigger='How do I get a Space Turtle??'>
              <span className='text-gray font-normal text-white lowercase'>
              You mint it at our website (It's in development).
              </span>
            </Collapsible>
          </div>
          <div className='faq__items mt-12'>
            <Collapsible trigger='When are the Space turtles dropping?'>
              <span className='text-gray font-normal text-white lowercase'>
              We will be launching the Turtlemint on 30th of December, 
              and only the Whitelisted will be able to mint the Space Turtles at a discounted
               price of 0.05 ETH and get the biggest chance of getting a rare Space Turtle with a flag..
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='What will the price be for the Space Turtles? ?'>
              <span className='text-gray font-normal text-white lowercase'>
              The Turtlemint (Presale) will cost 0.05 ETH and after
               the first 1000 is minted it will cost 0.07 ETH.
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='What type of tokens are the Space Turtles?'>
              <span className='text-gray font-normal text-white lowercase'>
              Space Turtles is an ERC-721 token and all images are hosted on IPFS
               and that means that files stored 
              on IPFS are resistant to tampering and censorship. 
              So they are here with us in eternity. 
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='How many Space Turtles should I mint?'>
              <span className='text-gray font-normal text-white lowercase'>
              Well, honestly that's not for me to answer. 
              Only you can decide how much you can afford and how much you can invest 
              in the project. But one thing is for sure and that is the more you 
              mint in the beginning the likelier it is for you to get a Space Turtle 
              with a flag, and that can be resold to us creators for 1 ETH or even more 
              if you decide to hold on to it. It's totally up to you but the chance of actually getting 
              a Space Turtle in the first round is way higher than in the other ones. 
              </span>
            </Collapsible>
          </div>

          <div className='faq__items mt-12'>
            <Collapsible trigger='How do I get whitelisted?'>
              <span className='text-gray font-normal text-white lowercase'>
              You can get Whitelisted in 2 ways:

- By inviting the most people in 24h, and commenting on our post,
 and retweeting it on Twitter. No bots or you will get kicked! TOP 10 will get Whitelisted.
- By reaching level 15 in discord, BUT no spam or useless talk
 just to get therend or you will be kicked.
- The one that invites 20 people in 36h  (3 days) Let us know the number you have invited per 24h 
as we reset the invite counter.
              </span>
            </Collapsible>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
