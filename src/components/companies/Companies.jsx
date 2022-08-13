import React from 'react';
import Agriculture from '../../assets/images/agriculture.jpg';
import Foods from '../../assets/images/foods.jpg';
import Fuel from '../../assets/images/fuel.jpg';
import SimpleBlueLogo from '../../assets/logos/simpleBlueLogo.svg';
import Shape1 from '../../assets/others/shape1.svg';

const Companies = () => {
  return (
    <div>
      <h2>Group Companies</h2>
      <div>
        <img src={Shape1} alt='Shape' />
        <img src={SimpleBlueLogo} alt='Simple blue logo' />
        <img src={Shape1} alt='Shape' />
      </div>
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
