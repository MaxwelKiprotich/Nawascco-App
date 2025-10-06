import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import QRCode from './pages/QRCode';
import FindUs from './pages/FindUs';
import AboutUs from './pages/AboutUs';
import Profile from './pages/Profile';
import MerchantTill from './pages/MerchantTill';
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? 
              <Login onLogin={handleLogin} /> : 
              <Navigate to="/dashboard" />
            } 
          />
          <Route 
            path="/register" 
            element={
              !isAuthenticated ? 
              <Register /> : 
              <Navigate to="/dashboard" />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? 
              <Dashboard user={user} onLogout={handleLogout} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/wallet" 
            element={
              isAuthenticated ? 
              <Wallet user={user} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/qr-code" 
            element={
              isAuthenticated ? 
              <QRCode user={user} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/find-us" 
            element={<FindUs />} 
          />
          <Route 
            path="/about-us" 
            element={<AboutUs />} 
          />
          <Route 
            path="/profile" 
            element={
              isAuthenticated ? 
              <Profile user={user} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/merchant-till" 
            element={
              isAuthenticated ? 
              <MerchantTill user={user} /> : 
              <Navigate to="/login" />
            } 
          />
          <Route 
            path="/" 
            element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;