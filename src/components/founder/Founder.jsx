import React from 'react';
import styles from '../../styles/founder.module.css';
import Divider from '../divider/Divider';

const Founder = () => {
  return (
    <div className={styles.founderContainer}>
      <div className={styles.founderWrapper}>
        <h2>Founder’s Message</h2>
        <div>
          <div className={styles.imgWrapper3}>
            <div className={styles.imgWrapper2}>
              <div className={styles.imgWrapper1}>
                {/* <img src={FounderImg} alt='' /> */}
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <h3>Mr. Jayesh H. Pandya</h3>
            <p>
              “When a customer buys a home, he is giving up a major <br /> chunk
              of his life's savings to do so. It is imperative to <br /> give
              him exactly what he looks for in his home.”
            </p>
          </div>
        </div>
        <small>
          We bring to our clients much wanted human values, integrity, trust and
          an assurance of responsibility all coupled with our expertise in
          construction, engineering & management. Our biggest assets have always
          been our small but highly trained team of professional managers and
          engineers who are backed by a very able team of administrators. We
          have a clear vision about building on our strengths and our
          achievements while holding dear to us our basic principles
        </small>
      </div>
    </div>
  );
};

export default Founder;
