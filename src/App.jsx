// Importaciones 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import "./components/App.css";

// App con rutas
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/section" element={<Section />} />
        <Route path="/aside" element={<Aside />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;