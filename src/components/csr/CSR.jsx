import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import SchoolBoys from '../../assets/images/schoolBoys.jpg';
import styles from '../../styles/csr.module.css';
import Divider from '../divider/Divider';

const CSR = () => {
  return (
    <div className={styles.missionContainer}>
      <h2>Corporate Social Responsibility</h2>
      <Divider />
      <div className={styles.boxWrapper}>
        <Card className={styles.card_wrapper}>
          <Card.Header className={styles.card_header}>
            <strong className={styles.card_title}>
              Education for the under-privileged
            </strong>
            <p className={styles.card_description}>
              We believe that our future lies in the holistic educational
              foundation of the youth and we have nurtured that cause by
              providing the necessary books and monetary support to the
              under-privileged children of Mumbai & also at several villages in
              Gujarat. As the Trustees of the H A Desai Boarding School in
              Matunga, Mumbai, we have been providing living and hospitality
              services to the academically bright students from the weaker
              monetary sections of the society.
            </p>
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item className={styles.card_item}>
              Support for Rural Farmers
            </ListGroup.Item>
            <ListGroup.Item className={styles.card_item}>
              Spiritual
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <div className={styles.img_wrapper}>
          <img src={SchoolBoys} alt='School boys' />
        </div>
      </div>
    </div>
  );
};

export default CSR;
