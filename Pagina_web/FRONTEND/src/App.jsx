import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router';
import { Principal, Articulos } from '../Paginas/Principales';
import { Celeste } from "../Paginas/Art_celeste"
import Header from './../Componente/Header';
import Footer from '../Componente/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/Contactanos" element={<a/>}/>
        <Route path="/Nosotros" element={<a/>}/>
        <Route path="/Articulos" element={<Articulos/>}/>
        <Route path="/articulo_celeste.html" element={<Celeste/>}/>
      </Routes>
      <Footer />

    </>
  );
}
export default App
