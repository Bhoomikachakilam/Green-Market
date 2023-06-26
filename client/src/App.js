import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/registerForm.js";
import LoginForm from "./components/loginForm";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landing.js";
import Products from "./components/customer.js";
import Addcrops from "./components/Addcrops.js";
import Farmer from "./components/Farmer.js"
import FarmerCrops from "./components/Farmercrops.js";
import Allcrops from "./components/Allcrops.js";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/farmer" element={<Farmer/>} />
          <Route path="/customer" element={<Products />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/farmer/Addcrops" element={<Addcrops />} />
          <Route path="/farmer/Farmercrops" element={<FarmerCrops />} />
          <Route path="/farmer/Allcrops" element={<Allcrops />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
