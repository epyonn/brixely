import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Landing from './components/Landing';
import Demo from './components/Demo';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-custom-gradient h-64 w-full">
      <Header />
      <Landing />
      <Demo />
    </div>
  );
}

export default App;
