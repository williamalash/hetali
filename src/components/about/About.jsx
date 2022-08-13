import React from 'react';
import BannerImg from '../..//assets/images/aboutBanner.jpg';
import BlackBanner from '../../assets/images/blackBanner.jpg';
import SimpleBlueLogo from '../../assets/logos/simpleBlueLogo.svg';
import LongShape from '../../assets/others/longShape.svg';
import Shape1 from '../../assets/others/shape1.svg';
import AboutCards from './AboutCards';

const About = () => {
  return (
    <div>
      <h2>ABOUT US</h2>
      <div>
        <img src={Shape1} alt='Shape' />
        <img src={SimpleBlueLogo} alt='Simple blue logo' />
        <img src={Shape1} alt='Shape' />
      </div>
      <img src={BannerImg} alt='About banner' />
      <h5>
        We endeavour to build homes which make it's residents happy and proud of
        their address. Residents are at heart of everything we do, we build
        homes to live in, not houses to stay in.
      </h5>
      <div>
        <img src={LongShape} alt='Shape' />
        <img src={SimpleBlueLogo} alt='Simple blue logo' />
        <img src={LongShape} alt='Shape' />
      </div>
      <div>
        <AboutCards />
      </div>
      <img src={BlackBanner} alt='Black banner' />
      <p>
        Established in 1992, Hetali Group is a leading real estate developer of
        residential spaces across Mumbai and have earned an unmatched reputation
        amongst its very loyal customers. The company's customer-centric values,
        project management proficiency and technical expertise are amplified
        with over 6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading
        to more than families! The Hetali Group promises a lifestyle second to
        none. In a span of over four decades, the group has proved to be one of
        the most reputed real estate builders in the western suburbs of Mumbai
        with residences in prime locations such as Andheri, Goregaon, Vile Parle
        and Juhu. Spearheaded by Mr Jayesh Pandya, the company's central
        ideology is to provide homes customized to the customer's requirements
        and home’s that are superior in nature keeping in mind the needs of the
        modern home user.
      </p>
    </div>
  );
};

export default About;
