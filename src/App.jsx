import React from 'react';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';  
import TopUsers from './pages/TopUsers'
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/feed';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TopUsers/>
      <TrendingPosts/>
      <Feed/>
    </>
  );
};

export default App;
