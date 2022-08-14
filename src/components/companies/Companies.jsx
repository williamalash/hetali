import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
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

      <CardGroup className={styles.imagesWrapper}>
        <Card className={styles.imageBox}>
          <Card.Img variant='top' src={Agriculture} />
          <strong>Agriculture</strong>
        </Card>
        <Card style={{ flexGrow: 2 }} className={styles.imageBox}>
          <Card.Img variant='top' src={Fuel} />
          <strong>Fuel</strong>
        </Card>
        <Card className={styles.imageBox}>
          <Card.Img variant='top' src={Foods} />
          <strong>Foods</strong>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Companies;
