import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToysPage from "./pages/ToysPage";
import CheckoutPage from "./pages/CheckoutPage";
import "./App.css"; //

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/toys" element={<ToysPage />}/>
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  </Router>
);

export default App;
