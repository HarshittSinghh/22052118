import React from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';  
import Cards from './components/cards';
import Jobs from './components/JobListings';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
      <Jobs />
    </>
  );
};

export default App;
