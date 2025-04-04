import React, { useState } from 'react';
import './DonorProfile.css';

interface DonorProfileData {
  fullName: string;
  profession: string;
  annualIncome: string;
  dob: string;
  gender: string;
  mobileNumber: string;
  email: string;
  address: string;
}

const DonorProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<DonorProfileData>({
    fullName: 'John Doe',
    profession: 'Software Engineer',
    annualIncome: '120000',
    dob: '1990-01-01',
    gender: 'male',
    mobileNumber: '1234567890',
    email: 'john.doe@example.com',
    address: '123 Main St, City, Country'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to update profile
    setIsEditing(false);
  };

  return (
    <div className="donor-profile">
      <div className="profile-header">
        <h1>My Profile</h1>
        <button 
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-content">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={profileData.fullName}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="profession">Profession</label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={profileData.profession}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="annualIncome">Annual Income</label>
              <input
                type="number"
                id="annualIncome"
                name="annualIncome"
                value={profileData.annualIncome}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={profileData.dob}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                value={profileData.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={profileData.mobileNumber}
                onChange={handleInputChange}
                disabled={!isEditing}
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>
          </div>

          {isEditing && (
            <button type="submit" className="save-button">
              Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default DonorProfile; 