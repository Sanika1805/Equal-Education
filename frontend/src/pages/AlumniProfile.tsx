import React, { useState, useEffect } from 'react';
import './AlumniProfile.css';

interface AlumniProfile {
  name: string;
  email: string;
  graduationYear: string;
  degree: string;
  occupation: string;
  company: string;
  phone: string;
  linkedIn: string;
  bio: string;
  skills: string[];
  interests: string[];
}

const AlumniProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<AlumniProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    graduationYear: '2020',
    degree: 'Bachelor of Technology',
    occupation: 'Software Engineer',
    company: 'Tech Corp',
    phone: '+1234567890',
    linkedIn: 'linkedin.com/in/johndoe',
    bio: 'Passionate about education and technology...',
    skills: ['Programming', 'Mentoring', 'Leadership'],
    interests: ['Education', 'Technology', 'Social Impact']
  });

  const [editedProfile, setEditedProfile] = useState<AlumniProfile>(profile);
  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && !editedProfile.skills.includes(skillInput.trim())) {
      setEditedProfile(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setEditedProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleAddInterest = () => {
    if (interestInput.trim() && !editedProfile.interests.includes(interestInput.trim())) {
      setEditedProfile(prev => ({
        ...prev,
        interests: [...prev.interests, interestInput.trim()]
      }));
      setInterestInput('');
    }
  };

  const handleRemoveInterest = (interestToRemove: string) => {
    setEditedProfile(prev => ({
      ...prev,
      interests: prev.interests.filter(interest => interest !== interestToRemove)
    }));
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    // TODO: Add API call to save profile changes
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="alumni-profile">
      <div className="profile-header">
        <h1>My Profile</h1>
        {!isEditing ? (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        ) : (
          <div className="edit-actions">
            <button className="save-btn" onClick={handleSave}>Save Changes</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        )}
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <div className="form-group">
            <label>Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editedProfile.name}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.name}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={editedProfile.email}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.email}</p>
            )}
          </div>

          <div className="form-group">
            <label>Phone</label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={editedProfile.phone}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.phone}</p>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h2>Academic & Professional</h2>
          <div className="form-group">
            <label>Graduation Year</label>
            {isEditing ? (
              <input
                type="text"
                name="graduationYear"
                value={editedProfile.graduationYear}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.graduationYear}</p>
            )}
          </div>

          <div className="form-group">
            <label>Degree</label>
            {isEditing ? (
              <input
                type="text"
                name="degree"
                value={editedProfile.degree}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.degree}</p>
            )}
          </div>

          <div className="form-group">
            <label>Current Occupation</label>
            {isEditing ? (
              <input
                type="text"
                name="occupation"
                value={editedProfile.occupation}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.occupation}</p>
            )}
          </div>

          <div className="form-group">
            <label>Company</label>
            {isEditing ? (
              <input
                type="text"
                name="company"
                value={editedProfile.company}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.company}</p>
            )}
          </div>

          <div className="form-group">
            <label>LinkedIn Profile</label>
            {isEditing ? (
              <input
                type="text"
                name="linkedIn"
                value={editedProfile.linkedIn}
                onChange={handleInputChange}
              />
            ) : (
              <a href={`https://${profile.linkedIn}`} target="_blank" rel="noopener noreferrer">
                {profile.linkedIn}
              </a>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h2>Bio</h2>
          <div className="form-group">
            {isEditing ? (
              <textarea
                name="bio"
                value={editedProfile.bio}
                onChange={handleInputChange}
                rows={4}
              />
            ) : (
              <p>{profile.bio}</p>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h2>Skills</h2>
          <div className="tags-container">
            {(isEditing ? editedProfile.skills : profile.skills).map((skill) => (
              <div key={skill} className="tag">
                {skill}
                {isEditing && (
                  <button className="remove-tag" onClick={() => handleRemoveSkill(skill)}>×</button>
                )}
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="add-tag">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                placeholder="Add a skill"
              />
              <button onClick={handleAddSkill}>Add</button>
            </div>
          )}
        </div>

        <div className="profile-section">
          <h2>Interests</h2>
          <div className="tags-container">
            {(isEditing ? editedProfile.interests : profile.interests).map((interest) => (
              <div key={interest} className="tag">
                {interest}
                {isEditing && (
                  <button className="remove-tag" onClick={() => handleRemoveInterest(interest)}>×</button>
                )}
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="add-tag">
              <input
                type="text"
                value={interestInput}
                onChange={(e) => setInterestInput(e.target.value)}
                placeholder="Add an interest"
              />
              <button onClick={handleAddInterest}>Add</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile; 