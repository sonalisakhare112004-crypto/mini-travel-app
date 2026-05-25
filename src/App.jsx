// App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TourDetails from "./pages/TourDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    
    <BrowserRouter>
   
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;