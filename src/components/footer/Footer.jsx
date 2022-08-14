import React from 'react';
import SmallLogo from '../../assets/logos/whitelogo.svg';
import WhiteLogo from '../../assets/logos/white_logo.svg';
import LongWhiteShape from '../../assets/others/longShape.svg';
import styles from '../../styles/footer.module.css';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLogo}>
          <img src={WhiteLogo} alt='White Logo' />
        </div>
        <div className={styles.footerLinks}>
          <FooterLinks />
        </div>
      </div>
      <br />
      <div>
        <img src={LongWhiteShape} alt='Long Shape' />
        <img src={SmallLogo} alt='Large white logo' />
        <img src={LongWhiteShape} alt='Long Shape' />
      </div>
      <br />
      <small>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</small>
    </div>
  );
};

export default Footer;
