import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';
import nawasscoLogo from '../assets/nawascco.png';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login - in real app, this would be an API call
    onLogin({
      username: formData.username,
      name: 'John Doe',
      profilePic: '/default-avatar.png'
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
          <img src={nawasscoLogo} alt="NAWASSCO Logo" className="logo-image" />
            <h2>NAWASSCO</h2>
          </div>
          <h3>Welcome Back</h3>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-button enter-button">
            ENTER
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/register" className="bold-link">Register now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;