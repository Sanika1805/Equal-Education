import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

function StudentDashboard({ user }) {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split('/student/')[1] || 'dashboard';

  const navItems = [
    { id: 'dashboard', label: '1. My Progress', path: '/student/dashboard' },
    { id: 'subjects', label: '2. My Subjects', path: '/student/subjects' },
    { id: 'assignments', label: '3. Assignments', path: '/student/assignments' },
    { id: 'activities', label: '4. Activities', path: '/student/activities' }
  ];

  const studentData = {
    name: 'John Doe',
    class: '8A',
    rollNo: '42',
    subjects: [
      { name: 'Mathematics', progress: 85, grade: 'A' },
      { name: 'Science', progress: 92, grade: 'A+' },
      { name: 'English', progress: 88, grade: 'A' }
    ]
  };

  const studentStats = {
    coursesEnrolled: 6,
    upcomingAssignments: 4,
    averageGrade: 'A-',
    attendanceRate: '95%'
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="dashboard-container">
            <div className="profile-header">
              <h1>Student Learning Portal</h1>
              <p className="welcome-text">Welcome back, {user?.name || 'Student'}!</p>
              <div className="role-badge">Role: Student</div>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>My Courses</h3>
                <p>{studentStats.coursesEnrolled}</p>
                <span>Active Courses</span>
              </div>
              <div className="stat-card">
                <h3>Assignments</h3>
                <p>{studentStats.upcomingAssignments}</p>
                <span>Due This Week</span>
              </div>
              <div className="stat-card">
                <h3>Performance</h3>
                <p>{studentStats.averageGrade}</p>
                <span>Average Grade</span>
              </div>
              <div className="stat-card">
                <h3>Attendance</h3>
                <p>{studentStats.attendanceRate}</p>
                <span>Present Rate</span>
              </div>
            </div>
            <div className="quick-actions">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <button>View Assignments</button>
                <button>Join Class</button>
                <button>Check Grades</button>
                <button>Access Resources</button>
              </div>
            </div>
          </div>
        );
      case 'subjects':
        return (
          <div className="subjects-section">
            <h2>My Subjects</h2>
            <div className="subjects-grid">
              {studentData.subjects.map((subject, index) => (
                <div key={index} className="subject-card">
                  <h3>{subject.name}</h3>
                  <p>Current Grade: {subject.grade}</p>
                  <button className="view-details">View Details</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'assignments':
        return (
          <div className="assignments-section">
            <h2>My Assignments</h2>
            <div className="assignments-list">
              <div className="assignment-card">
                <h3>Mathematics Assignment</h3>
                <p>Due Date: March 20, 2024</p>
                <button className="submit-btn">Submit Assignment</button>
              </div>
              <div className="assignment-card">
                <h3>Science Project</h3>
                <p>Due Date: March 25, 2024</p>
                <button className="submit-btn">Submit Project</button>
              </div>
            </div>
          </div>
        );
      case 'activities':
        return (
          <div className="activities-section">
            <h2>Extra-curricular Activities</h2>
            <div className="activities-grid">
              <div className="activity-card">
                <h3>Science Club</h3>
                <p>Next Meeting: Friday, 3:00 PM</p>
                <button className="join-btn">Join Activity</button>
              </div>
              <div className="activity-card">
                <h3>Math Olympiad</h3>
                <p>Registration Open</p>
                <button className="join-btn">Register Now</button>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a section to view content</div>;
    }
  };

  return (
    <div className="student-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="student-info">
            <h1>Welcome, {studentData.name}</h1>
            <p>Class {studentData.class} | Roll No. {studentData.rollNo}</p>
          </div>
        </div>
      </header>
      <div className="navigation-bar">
        <div className="nav-wrapper">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default StudentDashboard; 