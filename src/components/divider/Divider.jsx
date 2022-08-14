import React from 'react';
import SimpleBlueLogo from '../../assets/logos/simpleBlueLogo.svg';
import Shape1 from '../../assets/others/shape1.svg';
import styles from '../../styles/divider.module.css';

const Divider = () => {
  return (
    <div className={styles.divider}>
      <img src={Shape1} alt='Side shape left' />
      <img src={SimpleBlueLogo} alt='Simple blue logo' />
      <img src={Shape1} alt='Side shape right' />
    </div>
  );
};

export default Divider;
