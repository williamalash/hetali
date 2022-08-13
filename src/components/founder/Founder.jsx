import React from 'react';
import { Card } from 'react-bootstrap';
import FounderImg from '../../assets/images/founder.jpg';
import SimpleBlueLogo from '../../assets/logos/simpleBlueLogo.svg';
import Shape1 from '../../assets/others/shape1.svg';

const Founder = () => {
  return (
    <div>
      <h2>Founder’s Message</h2>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={FounderImg} />
          <div>
            <img src={Shape1} alt='Shape' />
            <img src={SimpleBlueLogo} alt='Simple blue logo' />
            <img src={Shape1} alt='Shape' />
          </div>
          <Card.Body>
            <Card.Title>Mr. Jayesh H. Pandya</Card.Title>
            <Card.Text>
              “When a customer buys a home, he is giving up a major chunk of his
              life's savings to do so. It is imperative to give him exactly what
              he looks for in his home.”
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <small>
        We bring to our clients much wanted human values, integrity, trust and
        an assurance of responsibility all coupled with our expertise in
        construction, engineering & management. Our biggest assets have always
        been our small but highly trained team of professional managers and
        engineers who are backed by a very able team of administrators. We have
        a clear vision about building on our strengths and our achievements
        while holding dear to us our basic principles
      </small>
    </div>
  );
};

export default Founder;
