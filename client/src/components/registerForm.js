import React, { useState } from "react";
import axios from "axios";
import "./registerForm.css";
import { useNavigate } from "react-router-dom";
const RegisterForm = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [mobile, setMobile] = useState("");
  const [village, setVillage] = useState("");
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
  const mobileRegex = /^\d{10}$/; // Mobile number validation regex (10 digits)
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/; // Password validation regex
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one special character"
      );
      return;
    }

    if (role === "") {
      alert("Please select a role");
      return;
    }
    try {
      const response = await axios.post(
        "https://greenmarket.onrender.com/register",
        {
          name,
          email,
          password,
          role,
          mobile,
          village,
        }
      );
      console.log(response.data);
      if (response.data.message === "successfully registered") {
        navigate("/login");
      } else {
        alert("Account already exist with this email");
        navigate("/register");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-form-container">
      <div className="register-form-title">
        <h3>Register Here</h3>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="select-wrapper">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="Farmer">Farmer</option>
            <option value="Customer">Customer</option>
          </select>
        </div>
        <input
          type="tel"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />
        <input
          type="text"
          placeholder="Village"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterForm;
