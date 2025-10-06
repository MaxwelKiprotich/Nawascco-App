import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, CreditCard, QrCode, MapPin, Info, LogOut } from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { path: '/profile', icon: User, label: user?.username || 'Profile' },
    { path: '/merchant-till', icon: CreditCard, label: 'Merchant till' },
    { path: '/wallet', icon: CreditCard, label: 'Wallet' },
    { path: '/qr-code', icon: QrCode, label: 'QR code' },
    { path: '/find-us', icon: MapPin, label: 'Find Us' },
    { path: '/about-us', icon: Info, label: 'About Us' },
  ];

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="welcome-section">
          <img 
            src={user?.profilePic || '/default-avatar.png'} 
            alt="Profile" 
            className="profile-pic"
          />
          <div>
            <h1>WELCOME!!</h1>
            <p>{user?.username}</p>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h3>NAWASSCO</h3>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <ul className="menu-items">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.path} 
                className="menu-item"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <button onClick={onLogout} className="menu-item logout-btn">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="quick-stats">
          <div className="stat-card">
            <h3>Current Balance</h3>
            <p className="amount">KSh 2,450</p>
            <span className="stat-label">Due in 15 days</span>
          </div>
          
          <div className="stat-card">
            <h3>Last Payment</h3>
            <p className="amount">KSh 3,000</p>
            <span className="stat-label">Jan 15, 2024</span>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-grid">
            <Link to="/wallet" className="action-card">
              <CreditCard size={32} />
              <span>View Wallet</span>
            </Link>
            
            <Link to="/qr-code" className="action-card">
              <QrCode size={32} />
              <span>Pay with QR</span>
            </Link>
            
            <Link to="/merchant-till" className="action-card">
              <CreditCard size={32} />
              <span>Merchant Till</span>
            </Link>
            
            <Link to="/find-us" className="action-card">
              <MapPin size={32} />
              <span>Find Us</span>
            </Link>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="additional-features">
          <h2>Services</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h4>📢 Outage Alerts</h4>
              <p>No scheduled outages in your area</p>
            </div>
            
            <div className="feature-card">
              <h4>💧 Usage Tracker</h4>
              <p>Current usage: 45m³ this month</p>
            </div>
            
            <div className="feature-card">
              <h4>📸 Submit Reading</h4>
              <p>Upload your meter reading</p>
            </div>
            
            <div className="feature-card">
              <h4>💬 Support</h4>
              <p>Get help instantly</p>
            </div>
          </div>
        </div>
      </main>

      {/* Overlay for menu */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;