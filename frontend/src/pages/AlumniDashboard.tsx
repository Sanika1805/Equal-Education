import React, { useState } from 'react';
import './AlumniDashboard.css';

interface ContributionStats {
  totalSponsorship: number;
  studentsSupported: number;
  scholarshipsReviewed: number;
  mentoringSessions: number;
}

const AlumniDashboard: React.FC = () => {
  const [stats, setStats] = useState<ContributionStats>({
    totalSponsorship: 250000,
    studentsSupported: 25,
    scholarshipsReviewed: 45,
    mentoringSessions: 30
  });

  const contributionOptions = [
    {
      id: 'sponsorships',
      title: 'Collect Sponsorships',
      description: 'Help raise funds for scholarships and student welfare',
      icon: '💰',
      link: '/alumni/sponsorships'
    },
    {
      id: 'mentorship',
      title: 'Guidance & Mentorship',
      description: 'Provide career counseling and mentorship',
      icon: '👨‍🏫',
      link: '/alumni/mentorship'
    },
    {
      id: 'classroom',
      title: 'Monitor Google Classroom',
      description: 'Oversee student progress and assist teachers',
      icon: '📚',
      link: '/alumni/classroom'
    },
    {
      id: 'scholarships',
      title: 'Manage Scholarships',
      description: 'Review applications and approve funding',
      icon: '🎓',
      link: '/alumni/scholarships'
    },
    {
      id: 'donations',
      title: 'Distribute Gifts',
      description: 'Organize gift distributions for students',
      icon: '🎁',
      link: '/alumni/gifts'
    },
    {
      id: 'welfare',
      title: 'Student Welfare',
      description: 'Participate in student welfare programs',
      icon: '❤️',
      link: '/alumni/welfare'
    }
  ];

  const handleOptionClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <div className="alumni-dashboard">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome Back, Alumni!</h1>
          <p>Make a difference in students' lives through your contributions</p>
        </div>

        <div className="stats-overview">
          <div className="stat-card">
            <span className="stat-icon">💰</span>
            <div className="stat-details">
              <h3>Total Sponsorship</h3>
              <p>₹{stats.totalSponsorship.toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">👨‍👦</span>
            <div className="stat-details">
              <h3>Students Supported</h3>
              <p>{stats.studentsSupported}</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📝</span>
            <div className="stat-details">
              <h3>Scholarships Reviewed</h3>
              <p>{stats.scholarshipsReviewed}</p>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🤝</span>
            <div className="stat-details">
              <h3>Mentoring Sessions</h3>
              <p>{stats.mentoringSessions}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contribution-options">
        <h2>Choose Your Contribution</h2>
        <div className="options-grid">
          {contributionOptions.map((option) => (
            <div
              key={option.id}
              className="option-card"
              onClick={() => handleOptionClick(option.link)}
            >
              <div className="option-icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <button className="option-btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">💰</span>
            <div className="activity-details">
              <h4>Sponsorship Collected</h4>
              <p>₹25,000 raised for student scholarships</p>
              <span className="activity-time">2 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">👨‍🏫</span>
            <div className="activity-details">
              <h4>Mentoring Session</h4>
              <p>Career guidance session with 5 students</p>
              <span className="activity-time">5 days ago</span>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">📝</span>
            <div className="activity-details">
              <h4>Scholarship Review</h4>
              <p>Reviewed 3 scholarship applications</p>
              <span className="activity-time">1 week ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn">
            <span className="action-icon">📊</span>
            Download Reports
          </button>
          <button className="action-btn">
            <span className="action-icon">📅</span>
            Schedule Mentoring
          </button>
          <button className="action-btn">
            <span className="action-icon">📝</span>
            Review Applications
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard; 