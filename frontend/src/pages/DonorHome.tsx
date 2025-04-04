import React from 'react';
import './DonorHome.css';

const DonorHome: React.FC = () => {
  const quickActions = [
    {
      title: 'Make a Donation',
      description: 'Support education by making a financial or material donation',
      link: '/donor/donate',
      icon: '🎁'
    },
    {
      title: 'View Impact',
      description: 'See how your donations are making a difference',
      link: '/donor/impact',
      icon: '📊'
    },
    {
      title: 'Donation History',
      description: 'Track your past donations and download receipts',
      link: '/donor/history',
      icon: '📝'
    }
  ];

  return (
    <div className="donor-home">
      <div className="welcome-section">
        <h1>Welcome to Equal Education</h1>
        <p className="welcome-message">
          Your generous contribution will help make education accessible to those in need.
          Choose from various donation options or track your impact.
        </p>
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          {quickActions.map((action, index) => (
            <a 
              key={index} 
              href={action.link} 
              className="action-card"
            >
              <div className="action-icon">{action.icon}</div>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="impact-summary">
        <h2>Your Impact Overview</h2>
        <div className="impact-stats">
          <div className="stat-card">
            <div className="stat-value">₹50,000</div>
            <div className="stat-label">Total Donations</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">25</div>
            <div className="stat-label">Students Helped</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100</div>
            <div className="stat-label">Books Donated</div>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">💰</div>
            <div className="activity-details">
              <h4>Financial Donation</h4>
              <p>₹10,000 donated for student scholarship</p>
              <span className="activity-date">March 15, 2024</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📚</div>
            <div className="activity-details">
              <h4>Book Donation</h4>
              <p>50 books donated to school library</p>
              <span className="activity-date">February 20, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorHome; 