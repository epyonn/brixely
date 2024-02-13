import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Landing from './components/Landing';
import Demo from './components/Demo';
import AnimatedText from './components/AnimatedText'; 
import './App.css';
import { motion } from 'framer-motion';
import Description from './components/Description';
import { BackgroundGradientDemo } from './components/BackgroundGradientDemo';
import { Waitlist } from './components/Waitlist';

function App() {
  return (
    <div className="bg-custom-gradient h-64 w-full">
      <Header />
      <Landing />
      <Demo />
      <AnimatedText />
      <Description />
      <Waitlist />

    </div>
  );
}

export default App;
