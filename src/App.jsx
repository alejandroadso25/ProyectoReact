// Importaciones 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Contacto from "./pages/Contacto";

import "./components/App.css";

// App con rutas anidadas
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />}>
          <Route path="hombre" element={<Hombre />} />
          <Route path="mujer" element={<Mujer />} />
        </Route>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;