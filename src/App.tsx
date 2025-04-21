import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Menu from './pages/Menu';
import Ubicacion from './pages/Ubicacion';
import Historia from './pages/Historia';
import Pedido from './pages/Pedido';
import { SEOProvider } from './context/SEOContext';

function App() {
  return (
    <Router>
      <SEOProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="menu" element={<Menu />} />
            <Route path="ubicacion" element={<Ubicacion />} />
            <Route path="historia" element={<Historia />} />
            <Route path="pedido" element={<Pedido />} />
          </Route>
        </Routes>
      </SEOProvider>
    </Router>
  );
}

export default App;