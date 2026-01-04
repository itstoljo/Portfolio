import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MixingMastering from "./components/MixingMastering";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mixing-mastering" element={<MixingMastering />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
