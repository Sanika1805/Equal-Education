import React, { useState } from 'react';
import './TeacherDashboard.css';

// Predefined options for form selections
const EDUCATION_LEVELS = {
  SECTION_1: 'Up to 4th Grade',
  SECTION_2: '5th to 10th Grade', 
  SECTION_3: '11th & 12th Grade',
  SECTION_4: 'Graduation & Masters'
};

interface TeacherDashboardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface TeacherProfile {
  personalInfo: {
    name: string;
    gender: string;
    address: string;
  };
  education: {
    degrees: string[];
    certifications: string[];
    specializations: string[];
  };
  experience: {
    years: string;
    institutions: string[];
  };
  expertiseSection: string;
}

interface Student {
  id: number;
  name: string;
  performance: {
    overallScore: number;
    strengths: string[];
    improvements: string[];
  };
}

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ user }) => {
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [profileData, setProfileData] = useState<TeacherProfile>({
    personalInfo: {
      name: '',
      gender: '',
      address: ''
    },
    education: {
      degrees: [],
      certifications: [],
      specializations: []
    },
    experience: {
      years: '',
      institutions: []
    },
    expertiseSection: ''
  });

  const [students, setStudents] = useState<Student[]>([
    { 
      id: 1, 
      name: 'John Doe', 
      performance: { 
        overallScore: 85, 
        strengths: ['Math', 'Science'], 
        improvements: ['English'] 
      }
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      performance: { 
        overallScore: 92, 
        strengths: ['Literature', 'History'], 
        improvements: ['Physics'] 
      }
    }
  ]);

  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      sender: 'Admin', 
      content: 'Welcome to the platform! Your profile is under review.', 
      timestamp: new Date()
    }
  ]);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProfileComplete(true);
    setTimeout(() => {
      setIsApproved(true);
      setMessages(prev => [...prev, {
        id: messages.length + 1,
        sender: 'System',
        content: 'Your profile has been approved!',
        timestamp: new Date()
      }]);
    }, 2000);
  };

  const renderProfileForm = () => (
    <form onSubmit={handleProfileSubmit} className="profile-form">
      <div>
        <h2>Teacher Profile Creation</h2>
        
        {/* Personal Information Section */}
        <div className="form-section">
          <h3>Personal Information</h3>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Full Name"
              value={profileData.personalInfo.name}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                personalInfo: { ...prev.personalInfo, name: e.target.value }
              }))}
              required
            />
            <select
              value={profileData.personalInfo.gender}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                personalInfo: { ...prev.personalInfo, gender: e.target.value }
              }))}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Address"
              value={profileData.personalInfo.address}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                personalInfo: { ...prev.personalInfo, address: e.target.value }
              }))}
              required
              className="full-width"
            />
          </div>
        </div>

        {/* Education Section */}
        <div className="form-section">
          <h3>Education & Expertise</h3>
          <div className="form-grid">
            <input
              type="text"
              placeholder="Degrees (comma-separated)"
              value={profileData.education.degrees.join(', ')}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                education: { ...prev.education, degrees: e.target.value.split(', ').filter(Boolean) }
              }))}
            />
            <input
              type="text"
              placeholder="Certifications"
              value={profileData.education.certifications.join(', ')}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                education: { ...prev.education, certifications: e.target.value.split(', ').filter(Boolean) }
              }))}
            />
            <select
              value={profileData.expertiseSection}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                expertiseSection: e.target.value 
              }))}
              required
              className="full-width"
            >
              <option value="">Select Teaching Section</option>
              {Object.entries(EDUCATION_LEVELS).map(([key, value]) => (
                <option key={key} value={value}>{value}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Experience Section */}
        <div className="form-section">
          <h3>Teaching Experience</h3>
          <div className="form-grid">
            <input
              type="number"
              placeholder="Years of Teaching"
              value={profileData.experience.years}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                experience: { ...prev.experience, years: e.target.value }
              }))}
            />
            <input
              type="text"
              placeholder="Institutions Worked"
              value={profileData.experience.institutions.join(', ')}
              onChange={(e) => setProfileData(prev => ({
                ...prev, 
                experience: { ...prev.experience, institutions: e.target.value.split(', ').filter(Boolean) }
              }))}
              className="full-width"
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </div>
    </form>
  );

  const renderTeacherDashboard = () => (
    <div className="dashboard-grid">
      {/* Google Classroom Integration */}
      <div className="dashboard-section full-width">
        <h2>Google Classroom</h2>
        <button 
          onClick={() => window.open('https://classroom.google.com', '_blank')}
          className="classroom-button"
        >
          Open Google Classroom
        </button>
      </div>

      {/* Student Management Panel */}
      <div className="dashboard-section">
        <h2>Student Management</h2>
        {students.map(student => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Overall Score: {student.performance.overallScore}%</p>
            <div className="performance-details">
              <p>Strengths:</p>
              <ul className="strengths-list">
                {student.performance.strengths.map(strength => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
              <p>Areas for Improvement:</p>
              <ul className="improvements-list">
                {student.performance.improvements.map(improvement => (
                  <li key={improvement}>{improvement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* AI-Driven Performance Insights */}
      <div className="dashboard-section">
        <h2>Performance Insights</h2>
        <div className="insights-container">
          <div className="insight-card overview">
            <h3>Class Performance Overview</h3>
            <p>Average Score: 88%</p>
            <p>Top Performing Subjects: Math, Science</p>
          </div>
          <div className="insight-card recommendations">
            <h3>Recommended Interventions</h3>
            <ul>
              <li>Additional support in English</li>
              <li>Advanced materials for high performers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Messaging/Discussion Feature */}
      <div className="dashboard-section full-width">
        <h2>Messages</h2>
        <div className="messages-container">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`message ${message.sender === 'System' ? 'system-message' : 'user-message'}`}
            >
              <div className="message-header">
                <span className="sender">{message.sender}</span>
                <span className="timestamp">
                  {message.timestamp.toLocaleString()}
                </span>
              </div>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
          />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );

  if (!isProfileComplete) {
    return renderProfileForm();
  }

  if (!isApproved) {
    return (
      <div className="pending-approval">
        <h2>Application Pending</h2>
        <p>Your profile is under review. Please wait for admin approval.</p>
      </div>
    );
  }

  return renderTeacherDashboard();
};

export default TeacherDashboard; 