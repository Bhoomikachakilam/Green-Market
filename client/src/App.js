import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/registerForm.js";
import LoginForm from "./components/loginForm";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landing.js";
import Products from "./components/customer.js";
import Addcrops from "./components/Addcrops.js";
import Farmer from "./components/Farmer.js";
import FarmerCrops from "./components/Farmercrops.js";
import Allcrops from "./components/Allcrops.js";
const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists
  const getTokenPayload = () => {
    const token = localStorage.getItem('token');
    if (token) {
      // Decode the token payload
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const payload = JSON.parse(window.atob(base64));
      return payload;
    }
    return null;
  };
  const tokenPayload = getTokenPayload();
  const userRole = tokenPayload ? tokenPayload.role : null;
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            {isAuthenticated && userRole === 'Farmer' && (
              <>
                <Route path="/farmer" element={<Farmer />} />
                <Route path="/farmer/Addcrops" element={<Addcrops />} />
                <Route path="/farmer/Farmercrops" element={<FarmerCrops />} />
                <Route path="/farmer/Allcrops" element={<Allcrops />} />
              </>
            )}
            {isAuthenticated && userRole === 'Customer' && (
              <Route path="/customer" element={<Products />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;