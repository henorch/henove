import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home.component';
import AboutUs from './pages/about/aboutus.component';
import Footer from './component/Footer/footer';
import { Link, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
