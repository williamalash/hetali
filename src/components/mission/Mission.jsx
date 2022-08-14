import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import GiftBox from '../../assets/images/giftbox.jpg';
import styles from '../../styles/mission.module.css';
import Divider from '../divider/Divider';

const Mission = () => {
  return (
    <div className={styles.missionContainer}>
      <h2>MISSION</h2>
      <Divider />
      <div className={styles.boxWrapper}>
        <div className={styles.img_wrapper}>
          <img src={GiftBox} alt='Gift box' />
        </div>
        <Card className={styles.card_wrapper}>
          <Card.Header className={styles.card_header}>
            <strong className={styles.card_title}>Personalized</strong>
            <p className={styles.card_description}>
              Our core idealogy is to provide personalized homes to meet the
              very specific needs of residents.
            </p>
          </Card.Header>
          <ListGroup variant='flush'>
            <ListGroup.Item className={styles.card_item}>
              Committed
            </ListGroup.Item>
            <ListGroup.Item className={styles.card_item}>
              Quality & Service Oriented
            </ListGroup.Item>
            <ListGroup.Item className={styles.card_item}>
              Timely{' '}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default Mission;
