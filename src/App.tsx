import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Landing from './components/Landing';
import Demo from './components/Demo';
import AnimatedText from './components/AnimatedText'; 
import './App.css';
import { motion } from 'framer-motion';
import Large from './components/Large';
import Description from './components/Description';

function App() {
  return (
    <div className="bg-custom-gradient h-64 w-full">
      <Header />
      <Landing />
      <Demo />
      <AnimatedText />
      <Description />
    </div>
  );
}

export default App;
