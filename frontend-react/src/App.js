import React from 'react';
import About from './Container/About/About';
import Footer from './Container/Footer/Footer';
import Header from './Container/Header/Header';
import Skills from './Container/Skills/Skills';
import Testimonial from './Container/Testimonial/Testimonial';
import Work from './Container/Work/Work';

const App = () => {
  return (
    <div className='container'>
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