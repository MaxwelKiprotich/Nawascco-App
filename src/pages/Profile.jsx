import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [profileData, setProfileData] = useState({
    username: user?.username || 'johndoe',
    email: 'john.doe@example.com',
    phone: '+254712345678',
    accountNumber: 'NW00123456',
    address: '123 Main Street, Nakuru'
  });

  const handleSave = (e) => {
    e.preventDefault();
    // Save profile logic here
    alert('Profile updated successfully!');
  };

  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Profile Settings</h1>
      </header>
      
      <div className="content-card">
        <div className="profile-header">
          <img 
            src={user?.profilePic || '/default-avatar.png'} 
            alt="Profile" 
            className="profile-large"
          />
          <div className="profile-info">
            <h2>{profileData.username}</h2>
            <p>Account: {profileData.accountNumber}</p>
          </div>
        </div>
        
        <form onSubmit={handleSave} className="profile-form">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={profileData.username}
              onChange={(e) => setProfileData({...profileData, username: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
            />
          </div>
          
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              value={profileData.accountNumber}
              disabled
              className="disabled-input"
            />
          </div>
          
          <div className="form-group">
            <label>Address</label>
            <textarea
              value={profileData.address}
              onChange={(e) => setProfileData({...profileData, address: e.target.value})}
              rows="3"
            />
          </div>
          
          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;