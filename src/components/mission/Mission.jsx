import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import GiftBox from '../../assets/images/giftbox.jpg';
import Divider from '../divider/Divider';

const Mission = () => {
  return (
    <div>
      <h2>MISSION</h2>
      <Divider />
      <div>
        <div>
          <img src={GiftBox} alt='Gift box' />
        </div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Header>
              <strong>Personalized</strong>
              <p>
                Our core idealogy is to provide personalized homes to meet the
                very specific needs of residents.
              </p>
            </Card.Header>
            <ListGroup variant='flush'>
              <ListGroup.Item>Committed</ListGroup.Item>
              <ListGroup.Item>Quality & Service Oriented</ListGroup.Item>
              <ListGroup.Item>Timely </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Mission;
