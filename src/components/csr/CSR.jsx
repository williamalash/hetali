import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import SchoolBoys from '../../assets/images/schoolBoys.jpg';
import Divider from '../divider/Divider';

const CSR = () => {
  return (
    <div>
      <h2>Corporate Social Responsibility</h2>
      <Divider />
      <div>
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Header>
              <strong>Education for the under-privileged</strong>
              <p>
                We believe that our future lies in the holistic educational
                foundation of the youth and we have nurtured that cause by
                providing the necessary books and monetary support to the
                under-privileged children of Mumbai & also at several villages
                in Gujarat. As the Trustees of the H A Desai Boarding School in
                Matunga, Mumbai, we have been providing living and hospitality
                services to the academically bright students from the weaker
                monetary sections of the society.
              </p>
            </Card.Header>
            <ListGroup variant='flush'>
              <ListGroup.Item>Support for Rural Farmers</ListGroup.Item>
              <ListGroup.Item>Spiritual</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div>
          <img src={SchoolBoys} alt='School boys' />
        </div>
      </div>
    </div>
  );
};

export default CSR;
