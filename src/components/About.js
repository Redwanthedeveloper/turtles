import React, { useState } from 'react';
import aboutImage from '../assets/images/about.jpg';
import usa from '../assets/images/usa.png';

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className='about py-12 my-12 md:my-0 relative' id='about'>
        <div className='about__wrapper px-4 2xl:px-72 mx-auto md:px-12'>
          <div className='flex justify-between flex-col md:flex-col lg:flex-row lg:gap-8 lg:items-center'>
            <div className='about__left lg:flex-1'>
              <h2 className='font-black font-heading text-5xl mb-12  md:mb-6 md:text-4xl md:text-center lg:text-left text-primary 2xl:text-5xl'>
                Continuity of about us
              </h2>
              <p className='text-base leading-8 pb-4 text-default md:text-lg md:leading-8 md:text-center lg:text-left'>
                We have used all national flags to portray that no matter where
                you come from, if you have hunger to achieve your goals you will
                succeed. But we didn’t stop there as we also use all the US
                state flags. As the flag of the US is a source of pride and
                inspiration for millions of citizens. The stripes and the stars
                represent the states that are standing together independently
                under one flag and the red in the US flag represents hardiness
                and valor, the white represents purity and innocence and
                finally, the blue represents vigilance, perseverance, and
                justice. The Stars are the symbol for space and the goal that
                man has had through ages to explore space and the stripes are
                the rays of light emanating from the sun and they represent the
                dawn of a new beginning. We as creators intend to invigorate the
                community and encourage them to follow their passion and do
                great things so that they can always raise and wave their flag
                at the top.
              </p>
              <p className='text-base leading-8 pb-4 text-default md:text-lg md:leading-8 md:text-center lg:text-left'>
                Me and some of our team members have quit their jobs because we
                wanted to fully devote our time, energy, and talent to the
                “Space Turtles NFT” project. We needed help to successfully
                execute the project, so we found people whose mindsets aligned
                with ours to work together. After putting in so much hard work,
                research, effort, and utilizing connections with people who have
                an immense impact in the NFT industry to promote the project, we
                as the creators of “Space Turtles NFT” are 100% sure that this
                project will be the next big thing in the world of NFT's.
              </p>
              <p className='text-base leading-8 pb-4 text-default md:text-lg md:leading-8 md:text-center lg:text-left'>
                So welcome to our special community where not only will you
                enjoy the art, get into a great community but also see how the
                demand after your bellowed art will rise which means that while
                you are enjoying yourself, your artwork is going up in value. In
                the future, we will have brief interviews with different
                podcasts regarding our art and the creators behind it. But for
                now, just enjoy your stay in our welcoming community and get
                ready for the next big hit in the NFT world. Welcome fellow
                Spaceturtle <br />
                <button className='text-btn' onClick={(e) => setShow(!show)}>
                  Learn more
                </button>
              </p>
            </div>
            <div className='about__right  px-10 py-5 md:px-24 lg:flex-1 lg:px-0'>
              <img
                src={aboutImage}
                alt={aboutImage}
                className='rounded-3xl border-4 w-max-100'
              />
            </div>
          </div>
        </div>
        {show && (
          <div className='learn__more  bg-white w-72 lg:w-2/5 h-2/4 lg:h-2/4 overflow-y-scroll absolute top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4'>
            <div className='learn__more__wrapper p-4 lg:p-12 relative'>
              <div
                className='icon absolute right-4 top-2 text-lg cursor-pointer'
                onClick={(e) => setShow(!show)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 18'
                  stroke='currentColor'
                  className='block h-6 w-6'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
              <img src={usa} alt={usa} className='w-sm mx-auto rounded ' />

              <div className='learn__more__content py-4'>
                <p className='text-sm lg:text-lg text-secondary leading-7'>
                  He knew that we couldn't keep subdividing Earth's resource
                  pie; we need to make the pie bigger if we want to survive. The
                  promise of resources from the Moons, other planets, asteroids,
                  and the Sun made space hope for him to save our future. The
                  world population is likely to double within 40 years and
                  re-double shortly after that; world resources will not,
                  instead they will run out. In space, solar power is infinite
                  (reducing the need to use forests and oil and coal merely for
                  fuel and eliminating the pollution they cause), as are
                  asteroid metals. He believed that these unlimited resources
                  would enable us to reduce the plundering of our planet and
                  were the only way he could save the existence of his kind. But
                  to obtain these resources, he required large structures in
                  space and needed rockets to get there. He believed in his
                  abilities and learned how to build the infrastructure to
                  obtain those resources. His mission is creating alternative
                  habitats for his kind, and he knew such a mission demands
                  massive resources and a lot of sacrifices by the workforce.
                  That is just a bit of the big picture showing how he wanted to
                  impact the lives of everyone around him.
                  <br />
                  <br />
                  He was nervous, scared even to go on the expedition after
                  finally finding a way to travel to space in search of a new
                  homeland. It took him decades to finally create a way that
                  ensured his safe landing and survival, but he knew that were
                  so many unknown variables, and anything could happen at any
                  time. He sat there in his seat, listening to the rumbling
                  sound of the engine as it warmed up and the countdown
                  installed in the ship started. "First turtle," he thought, "I
                  will be the first turtle in space. Those thoughts plagued his
                  senses and told him that he was finally going out to space and
                  all those years of hard work were finally paying off. He
                  proved nothing is impossible, and turtles can achieve
                  everything if they put their whole heart and soul into it.
                  <br /> <br />
                  The engines erupted, and he was in the air. He held his breath
                  for the first few minutes waiting for the noise to fade, it
                  felt like forever to him until the first part of the ship
                  detached, and then the second countdown began, and he was out
                  of the atmosphere in his self-made rocket when the final piece
                  detached. The screen in front of him gave him the view of
                  everything his spacecraft passed. Keeping track of time in
                  space is useless, but he knew he was in outer space as the
                  third alarm went off. It was almost tough to see anything when
                  he looked outside the screen, but he knew he was on the right
                  track. He traveled across multiple galaxies exploring planets
                  and conducting experiments to determine if any of them was
                  habitable. After multiple failures, he finally discovered a
                  new planet, which had enough resources to sustain life as we
                  know it. With his sheer will and determination, he fulfilled
                  his dreams of finding a new home in space, and now he aims to
                  set up a colony on this planet.
                  <br /> <br />
                  Turtlеѕ move ѕlоwly bесаuѕе their lifestyle and environment
                  doesn't require them to be fast. Thеу’rе hеrbіvоrеѕ, thеу
                  dоn't hаvе tо сhаѕе thеіr fооd. They have nісе, thісk ѕhеllѕ,
                  whісh mеаnѕ thаt mоѕt рrеdаtоrѕ ѕіmрlу don't bоthеr thеm.
                  Similarly, human beings aren't under threat of another species
                  on planet earth, and the Earth's resources have always been
                  substantial to meet all our needs. However, over the years,
                  the resource consumption rate has risen exponentially, and
                  space exploration has become necessary to ensure humanity's
                  survival. Turtles are slow but precise in their movement, and
                  when they set an objective, no matter what or how far it may
                  be, it becomes their holy grail. In complex matters like space
                  exploration, the progress of human beings has been slow,
                  steady, full of obstacles and failures. Still, we never gave
                  up, and our perseverance and commitment to the cause have made
                  it possible for us to make commercial space flight possible,
                  maybe in the next 10-20 years. The end goal of traveling into
                  space, like discovering the New World, is to work and live
                  there, not only to sit back on Earth and think about what
                  autonomous spacecraft report back. We don't deploy cameras to
                  the Grand Canyon; instead, we go there directly. America
                  expanded by sowing seeds in many hotspots and filling the gaps
                  with commerce, industries, and innovative thinking. Humanity
                  has always discovered ways to thrive under challenging
                  circumstances, and we will do so in space as well. We can't
                  start living and working in space unless we first get there.
                  And it is our purpose to leave the cradle of our mother
                  planet.
                  <br /> <br />
                  We as the creators of the “Space Turtles NFT” aims to
                  illustrate the idea that everything is possible. We chose the
                  turtle, the slowest creature, and space a destination even
                  beyond the top of the world. We created the Space Turtles to
                  portray that if you have a dream and you set yourself on the
                  path to realizing that dream, no matter what your pace is, you
                  can be as slow as a turtle, and what obstacles you face they
                  can be as high as the sky, if you stay loyal to your dream and
                  consistent with your effort you will overcome everything and
                  eventually realize your dreams. We as the creator of the
                  “Space Turtles NFT” wants to inspire our community and help
                  them develop high self-esteem, self-assurance and instill
                  confidence in their abilities to fearlessly follow their
                  aspirations and flourish while following their dreams. This is
                  our dream!
                  <br /> <br />
                  We have used all national flags to portray that no matter
                  where you come from, if you have hunger to achieve your goals
                  you will succeed. But we didn’t stop there as we also use all
                  the US state flags. As the flag of the US is a source of pride
                  and inspiration for millions of citizens. The stripes and the
                  stars represent the states that are standing together
                  independently under one flag and the red in the US flag
                  represents hardiness and valor, the white represents purity
                  and innocence and finally the blue represents vigilance,
                  perseverance, and justice. The Stars are the symbol for space
                  and the goal that man has had through ages to explore space
                  and the stripes are the rays of light emanating from the sun
                  and they represent the dawn of a new beginning. We as creators
                  intend to invigorate the community and encourage them to
                  follow their passion and do great things so that they can
                  always raise and wave their flag at the top. Me and some of
                  our team members have quit their jobs because we wanted to
                  fully devote our time, energy, and talent to the “Space
                  Turtles NFT” project. We needed help to successfully execute
                  the project, so we found people whose mindsets aligned with
                  ours to work together. After putting in so much hard work,
                  research, effort, and utilizing connections with people who
                  have an immense impact in the NFT industry to promote the
                  project, we as the creators of “Space Turtles
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default About;
