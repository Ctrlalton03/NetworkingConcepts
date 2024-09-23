import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Homepage';
import NetworkingConcepts from './Components/NetworkingConcepts';
import Reflection from './Components/Reflection';
import Contact from './Components/Contact';

const app: React.FC = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/networking-concepts" element={<NetworkingConcepts />} />
        <Route path="/reflections" element={<Reflection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer />
    </Router>
  );
};


export default app;