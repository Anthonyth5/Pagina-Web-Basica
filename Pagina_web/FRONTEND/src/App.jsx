import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router';
import Header from './../Componente/Header';
import Footer from '../Componente/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<a/>}/>
        <Route path="/Contactanos" element={<a/>}/>
        <Route path="/Nosotros" element={<a/>}/>
        <Route path="/Articulos" element={<a/>}/>
      </Routes>
      <Footer />
    </>
  );
}
export default App
