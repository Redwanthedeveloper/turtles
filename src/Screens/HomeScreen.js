import React from 'react';
import About from '../components/About';
import Faq from '../components/Faq';
import Hero from '../components/Hero';
import Mint from '../components/Mint';
import Roadmap from '../components/Roadmap';
import ImageSlider from '../components/ImageSlider';
import Team from '../components/Team';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <ImageSlider />
      <About />
      <Mint />
      <Roadmap />
      <Faq />
      <Team />
      <Footer />
    </>
  );
};

export default HomeScreen;
