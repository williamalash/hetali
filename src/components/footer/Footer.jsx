import React from 'react';
import SmallLogo from '../../assets/logos/whitelogo.svg';
import WhiteLogo from '../../assets/logos/white_logo.svg';
import LongWhiteShape from '../../assets/others/longShape.svg';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <div>
      <div>
        <img src={WhiteLogo} alt='White Logo' />
      </div>
      <div>
        <FooterLinks />
      </div>
      <div>
        <img src={LongWhiteShape} alt='Long Shape' />
        <img src={SmallLogo} alt='Large white logo' />
        <img src={LongWhiteShape} alt='Long Shape' />
      </div>
      <small>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</small>
    </div>
  );
};

export default Footer;
