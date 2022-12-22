import React from 'react';
import { Navbar } from './Components';
import { Header, About, Work, Skills, Testimonial, Footer } from './Container';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;