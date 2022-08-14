import React from 'react';
import Agriculture from '../../assets/images/agriculture.jpg';
import Foods from '../../assets/images/foods.jpg';
import Fuel from '../../assets/images/fuel.jpg';
import Divider from '../divider/Divider';

const Companies = () => {
  return (
    <div>
      <h2>Group Companies</h2>
      <Divider />
      <div>
        <div>
          <img src={Agriculture} alt='Agriculture' />
          <strong>Agriculture</strong>
        </div>
        <div>
          <img src={Fuel} alt='Fuel' />
          <strong>Fuel</strong>
        </div>
        <div>
          <img src={Foods} alt='Foods' />
          <strong>Foods</strong>
        </div>
      </div>
    </div>
  );
};

export default Companies;
