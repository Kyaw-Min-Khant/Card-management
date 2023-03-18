import React, { useEffect } from 'react'
import Products from './Component/Products';
import { StateContextCustom } from './Context/StateContext';
import Navbar from './Component/Navbar';
import { Routes,Route } from 'react-router-dom';
import AddToCart from './Component/AddToCart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/Addtocard" element={<AddToCart />} />
      </Routes>
    </div>
  );
}

export default App
