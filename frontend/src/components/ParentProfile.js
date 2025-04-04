import React, { useState, useRef } from 'react';

const ParentProfile = ({ onClose }) => {
  const [profileData, setProfileData] = useState({
    parentName: '',
    email: '',
    phone: '',
    address: '',
    childName: '',
    childClass: '',
    childRollNumber: '',
    emergencyContact: '',
    preferredContactMethod: 'email',
    notifications: true
  });

  const [notification, setNotification] = useState({ type: '', message: '' });
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log('Profile data to be saved:', profileData);
      setNotification({
        type: 'success',
        message: 'Profile updated successfully!'
      });
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Failed to update profile. Please try again.'
      });
    }
  };

  return (
    <div className="profile-settings">
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      <div className="profile-header">
        <div className="profile-image">
          {profileImage ? (
            <img src={profileImage} alt="Profile" />
          ) : (
            <span>Upload Photo</span>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <div 
            className="profile-image-upload"
            onClick={() => fileInputRef.current.click()}
          >
            Change Photo
          </div>
        </div>
        <div className="profile-info">
          <h2>Profile Settings</h2>
          <p>Update your personal information and preferences</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="parentName">Parent Name</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={profileData.parentName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emergencyContact">Emergency Contact</label>
            <input
              type="tel"
              id="emergencyContact"
              name="emergencyContact"
              value={profileData.emergencyContact}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
            rows="3"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="childName">Child's Name</label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={profileData.childName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="childClass">Child's Class</label>
            <input
              type="text"
              id="childClass"
              name="childClass"
              value={profileData.childClass}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="childRollNumber">Child's Roll Number</label>
            <input
              type="text"
              id="childRollNumber"
              name="childRollNumber"
              value={profileData.childRollNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="preferredContactMethod">Preferred Contact Method</label>
            <select
              id="preferredContactMethod"
              name="preferredContactMethod"
              value={profileData.preferredContactMethod}
              onChange={handleInputChange}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="both">Both</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={profileData.notifications}
              onChange={handleInputChange}
            />
            Receive notifications about child's progress and school updates
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">
            Save Changes
          </button>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ParentProfile; 