import React, { useRef } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Landing from './components/Landing';
import Demo from './components/Demo';
import AnimatedText from './components/AnimatedText'; 
import Waitlist from './components/Waitlist';
import Description from './components/Description';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { BackgroundGradientDemo } from './components/BackgroundGradientDemo';
import './App.css';

function App() {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <div className="bg-custom-gradient h-64 w-full">
      <Header />
      <Landing scrollToWaitlist={scrollToWaitlist} />
      <Demo />
      <AnimatedText />
      <Description />
      <Waitlist ref={waitlistRef}/>
      <Footer />

    </div>
  );
}

export default App;
