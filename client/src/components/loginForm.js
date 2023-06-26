import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './loginForm.css'; // Import the CSS file for your component
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://greenmarket.onrender.com/login', {
        email,
        password,
      });
      const { token, role } = response.data; // Extract the role from the response data

      localStorage.setItem('token', token);
      if (role === 'Customer') {
        navigate('/customer');
       } 
      else if (role === 'Farmer') {
        navigate('/farmer');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">
        <h4>Login Here</h4>
      </div>
      <form onSubmit={handleSubmit} className="form">
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
