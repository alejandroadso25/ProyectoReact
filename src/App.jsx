import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Section from "./components/Section";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./components/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Section />
      <Aside />
      <Footer />
    </>
  );
}
export default App;