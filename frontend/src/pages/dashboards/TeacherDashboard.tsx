import React, { useState } from 'react';
import NavBar from '../../components/ui/NavBar';
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

interface Doubt {
  id: number;
  studentName: string;
  question: string;
  timestamp: string;
  status: 'pending' | 'resolved';
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ user }) => {
  const [activeMenu, setActiveMenu] = useState('doubts');
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [profileData, setProfileData] = useState<TeacherProfile>({
    personalInfo: {
      name: user.name || '',
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

  const [doubts, setDoubts] = useState<Doubt[]>([
    {
      id: 1,
      studentName: 'John Doe',
      question: 'I\'m having trouble understanding quadratic equations. Can you explain the concept of discriminant?',
      timestamp: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      question: 'Could you help me with Newton\'s laws of motion? Specifically the third law.',
      timestamp: '3 hours ago',
      status: 'pending'
    }
  ]);

  const [selectedDoubt, setSelectedDoubt] = useState<Doubt | null>(null);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [responseText, setResponseText] = useState('');

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProfileComplete(true);
    setTimeout(() => {
      setIsApproved(true);
    }, 2000);
  };

  const handleLogout = () => {
    // Clear any stored authentication data
    localStorage.removeItem('user');
    // Redirect to the authentication page
    window.location.href = '/';
  };

  const handleRespondClick = (doubt: Doubt) => {
    setSelectedDoubt(doubt);
    setShowResponseModal(true);
  };

  const handleResponseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDoubt && responseText.trim()) {
      // Update the doubt status to resolved
      setDoubts(prevDoubts =>
        prevDoubts.map(doubt =>
          doubt.id === selectedDoubt.id
            ? { ...doubt, status: 'resolved' }
            : doubt
        )
      );
      
      // Add the response to messages
      setMessages(prev => [...prev, {
        id: messages.length + 1,
        sender: 'You',
        content: `Response to ${selectedDoubt.studentName}: ${responseText}`,
        timestamp: new Date()
      }]);

      // Reset the modal state
      setShowResponseModal(false);
      setSelectedDoubt(null);
      setResponseText('');
    }
  };

  const renderTeacherInfo = () => (
    <div className="teacher-info">
      <div className="teacher-profile">
        <div className="teacher-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div className="teacher-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="quick-stats">
        <div className="stat">
          <span className="stat-number">28</span>
          <span className="stat-label">Students</span>
        </div>
        <div className="stat">
          <span className="stat-number">92%</span>
          <span className="stat-label">Attendance</span>
        </div>
        <div className="stat">
          <span className="stat-number">15</span>
          <span className="stat-label">Pending Doubts</span>
        </div>
      </div>
    </div>
  );

  const renderResponseModal = () => {
    if (!showResponseModal || !selectedDoubt) return null;

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Respond to {selectedDoubt.studentName}'s Doubt</h3>
            <button 
              className="close-button"
              onClick={() => {
                setShowResponseModal(false);
                setSelectedDoubt(null);
                setResponseText('');
              }}
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <div className="doubt-preview">
              <p><strong>Question:</strong> {selectedDoubt.question}</p>
            </div>
            <form onSubmit={handleResponseSubmit}>
              <div className="form-group">
                <label>Your Response</label>
                <textarea
                  value={responseText}
                  onChange={(e) => setResponseText(e.target.value)}
                  placeholder="Type your response here..."
                  rows={4}
                  required
                />
              </div>
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => {
                    setShowResponseModal(false);
                    setSelectedDoubt(null);
                    setResponseText('');
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Send Response
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const renderDoubtsSection = () => (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Student Doubts</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Recent Questions</h3>
          <div className="doubt-list">
            {doubts
              .filter(doubt => doubt.status === 'pending')
              .map(doubt => (
                <div key={doubt.id} className="doubt-item">
                  <div className="doubt-header">
                    <span className="student-name">{doubt.studentName}</span>
                    <span className="doubt-time">{doubt.timestamp}</span>
                  </div>
                  <p>{doubt.question}</p>
                  <button 
                    className="respond-button"
                    onClick={() => handleRespondClick(doubt)}
                  >
                    Respond Now
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Resolved Questions</h3>
          <div className="doubt-list">
            {doubts
              .filter(doubt => doubt.status === 'resolved')
              .map(doubt => (
                <div key={doubt.id} className="doubt-item resolved">
                  <div className="doubt-header">
                    <span className="student-name">{doubt.studentName}</span>
                    <span className="doubt-time">{doubt.timestamp}</span>
                  </div>
                  <p>{doubt.question}</p>
                  <span className="status">Resolved</span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {renderResponseModal()}
    </div>
  );

  const renderProgressSection = () => (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Class Progress</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Class Overview</h3>
          <div className="performance-stats">
            <div className="stat-item">
              <span className="stat-label">Class Average</span>
              <span className="stat-value">85%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Attendance</span>
              <span className="stat-value">92%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Active Students</span>
              <span className="stat-value">28</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Top Performers</h3>
          <div className="student-list">
            <div className="student-item">
              <span className="student-name">John Doe</span>
              <span className="score">95%</span>
            </div>
            <div className="student-item">
              <span className="student-name">Jane Smith</span>
              <span className="score">92%</span>
            </div>
            <div className="student-item">
              <span className="student-name">Alice Johnson</span>
              <span className="score">90%</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card full-width">
          <h3>Subject Performance Analysis</h3>
          <div className="subject-grid">
            <div className="subject-item">
              <h4>Mathematics</h4>
              <span className="score">88%</span>
            </div>
            <div className="subject-item">
              <h4>Science</h4>
              <span className="score">85%</span>
            </div>
            <div className="subject-item">
              <h4>English</h4>
              <span className="score">82%</span>
            </div>
            <div className="subject-item">
              <h4>History</h4>
              <span className="score">87%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAttendanceSection = () => (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Attendance Management</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Today's Attendance</h3>
          <div className="attendance-stats">
            <div className="stat-item">
              <span className="stat-label">Present</span>
              <span className="stat-value">25</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Absent</span>
              <span className="stat-value">3</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Leave</span>
              <span className="stat-value">2</span>
            </div>
          </div>
          <button className="submit-button">Mark Attendance</button>
        </div>

        <div className="dashboard-card">
          <h3>Monthly Overview</h3>
          <div className="attendance-chart">
            <div className="chart-placeholder">
              Monthly attendance statistics will be displayed here
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="dashboard-container">
      <h2 className="dashboard-title">About Us</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card full-width">
          <h3>About Equal Education</h3>
          <p>We are committed to providing quality education to all students, regardless of their background or circumstances.</p>
          <div className="about-content">
            <div className="mission">
              <h4>Our Mission</h4>
              <p>To make quality education accessible to everyone through innovative technology and dedicated teachers who understand each student's unique needs.</p>
            </div>
            <div className="vision">
              <h4>Our Vision</h4>
              <p>Creating a world where every student has access to personalized, quality education that helps them reach their full potential.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Contact Support</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Send Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter the subject of your message" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Type your message here" rows={4}></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="dashboard-card">
          <h3>Quick Contacts</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="label">Technical Support</span>
              <span className="value">support@equaleducation.com</span>
            </div>
            <div className="contact-item">
              <span className="label">Admin Office</span>
              <span className="value">admin@equaleducation.com</span>
            </div>
            <div className="contact-item">
              <span className="label">Emergency</span>
              <span className="value">+1 234 567 8900</span>
            </div>
            <div className="contact-item">
              <span className="label">Working Hours</span>
              <span className="value">9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeMenu) {
      case 'doubts':
        return renderDoubtsSection();
      case 'progress':
        return renderProgressSection();
      case 'attendance':
        return renderAttendanceSection();
      case 'about':
        return renderAboutSection();
      case 'contact':
        return renderContactSection();
      default:
        return null;
    }
  };

  const renderProfileForm = () => (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Complete Your Profile</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card full-width">
          <form onSubmit={handleProfileSubmit} className="profile-form">
            {/* Personal Information Section */}
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={profileData.personalInfo.name}
                    onChange={(e) => setProfileData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, name: e.target.value }
                    }))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
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
                </div>
                <div className="form-group full-width">
                  <label>Address</label>
                  <input
                    type="text"
                    value={profileData.personalInfo.address}
                    onChange={(e) => setProfileData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, address: e.target.value }
                    }))}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="form-section">
              <h3>Education & Expertise</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Degrees (comma-separated)</label>
                  <input
                    type="text"
                    value={profileData.education.degrees.join(', ')}
                    onChange={(e) => setProfileData(prev => ({
                      ...prev,
                      education: { ...prev.education, degrees: e.target.value.split(', ').filter(Boolean) }
                    }))}
                  />
                </div>
                <div className="form-group">
                  <label>Certifications (comma-separated)</label>
                  <input
                    type="text"
                    value={profileData.education.certifications.join(', ')}
                    onChange={(e) => setProfileData(prev => ({
                      ...prev,
                      education: { ...prev.education, certifications: e.target.value.split(', ').filter(Boolean) }
                    }))}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Teaching Section</label>
                  <select
                    value={profileData.expertiseSection}
                    onChange={(e) => setProfileData(prev => ({
                      ...prev,
                      expertiseSection: e.target.value
                    }))}
                    required
                  >
                    <option value="">Select Teaching Section</option>
                    {Object.entries(EDUCATION_LEVELS).map(([key, value]) => (
                      <option key={key} value={value}>{value}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="form-section">
              <h3>Teaching Experience</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Years of Teaching</label>
                  <input
                    type="number"
                    value={profileData.experience.years}
                    onChange={(e) => setProfileData(prev => ({
                      ...prev,
                      experience: { ...prev.experience, years: e.target.value }
                    }))}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Institutions Worked (comma-separated)</label>
                  <input
                    type="text"
                    value={profileData.experience.institutions.join(', ')}
                    onChange={(e) => setProfileData(prev => ({
                      ...prev,
                      experience: { ...prev.experience, institutions: e.target.value.split(', ').filter(Boolean) }
                    }))}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="teacher-dashboard">
      <div className="dashboard-header">
        <div className="header-content">
          <NavBar onMenuClick={handleMenuClick} activeMenu={activeMenu} />
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      <div className="dashboard-content">
        {!isProfileComplete ? (
          renderProfileForm()
        ) : !isApproved ? (
          <div className="dashboard-container">
            <h2 className="dashboard-title">Profile Under Review</h2>
            <div className="dashboard-grid">
              <div className="dashboard-card full-width">
                <h3>Thank you for completing your profile</h3>
                <p>Our team is currently reviewing your information. You will be notified once your profile is approved.</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {renderTeacherInfo()}
            {renderContent()}
          </>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard; 