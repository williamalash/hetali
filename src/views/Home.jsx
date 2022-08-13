import React from 'react';
import About from '../components/about/About';
import Companies from '../components/companies/Companies';
import CSR from '../components/csr/CSR';
import Footer from '../components/footer/Footer';
import Founder from '../components/founder/Founder';
import Header from '../components/header/Header';
import Mission from '../components/mission/Mission';
import Vision from '../components/vision/Vision';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Vision />
      <Mission />
      <CSR />
      <Founder />
      <Companies />
      <Footer />
    </div>
  );
};

export default Home;
