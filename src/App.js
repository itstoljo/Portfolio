import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const Home = lazy(() => import("./components/Home"));
const MixingMastering = lazy(() => import("./components/MixingMastering"));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Suspense
          fallback={
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mixing-mastering" element={<MixingMastering />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
