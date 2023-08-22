import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import './App.css'
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';


const App = () => {
  return (
    <div className='app'>
          <Routes>
              <Route path='/' element={<Layout />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
          </Routes>
    </div>
  );
};

export default App;
