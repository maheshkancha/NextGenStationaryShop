import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Products";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
