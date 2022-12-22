import React from 'react';
import { Navbar } from './Components';
import {Header, About, Work, Skills, Testimonial, Footer} from './Container';

const App = () => {
  return (
    <div className='container'>
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