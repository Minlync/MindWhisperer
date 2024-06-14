import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products';
import Home from './pages/Home';
import Signup from './pages/Signup';
// import Contact from './pages/Contact';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Ensure there's only one App declaration
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup/>}/>  
      </Routes>
      <Footer /> {/* This will appear at the bottom of every page */}
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
