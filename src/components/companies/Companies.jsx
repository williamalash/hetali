import React from 'react';
import Agriculture from '../../assets/images/agriculture.jpg';
import Foods from '../../assets/images/foods.jpg';
import Fuel from '../../assets/images/fuel.jpg';
import styles from '../../styles/companies.module.css';
import Divider from '../divider/Divider';

const Companies = () => {
  return (
    <div className={styles.companiesContainer}>
      <h2>Group Companies</h2>
      <Divider />
      <div className={styles.imagesWrapper}>
        <div className={styles.imageBox}>
          <img src={Agriculture} alt='Agriculture' />
          <strong>Agriculture</strong>
        </div>
        <div className={styles.imageBox}>
          <img src={Fuel} alt='Fuel' />
          <strong>Fuel</strong>
        </div>
        <div className={styles.imageBox}>
          <img src={Foods} alt='Foods' />
          <strong>Foods</strong>
        </div>
      </div>
    </div>
  );
};

export default Companies;
