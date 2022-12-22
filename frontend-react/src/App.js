import React from 'react';
import { Header, About, Work, Skills, Testimonial, Footer } from './Container';

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