import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  return (
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
  );
}

export default App;























