import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AlumniLayout.css';

interface AlumniLayoutProps {
  children: React.ReactNode;
  activePage: string;
}

const AlumniLayout: React.FC<AlumniLayoutProps> = ({ children, activePage }) => {
  const navigate = useNavigate();
  const [isConfirmLogoutVisible, setIsConfirmLogoutVisible] = useState(false);

  const handleLogout = () => {
    setIsConfirmLogoutVisible(true);
  };

  const confirmLogout = () => {
    // Clear any stored user data/tokens
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    // Redirect to home page
    navigate('/');
  };

  const cancelLogout = () => {
    setIsConfirmLogoutVisible(false);
  };

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', link: '/alumni/dashboard' },
    { id: 'sponsorships', label: 'Sponsorships', icon: '💰', link: '/alumni/sponsorships' },
    { id: 'mentorship', label: 'Mentorship', icon: '👨‍🏫', link: '/alumni/mentorship' },
    { id: 'classroom', label: 'Classroom', icon: '📚', link: '/alumni/classroom' },
    { id: 'scholarships', label: 'Scholarships', icon: '🎓', link: '/alumni/scholarships' },
    { id: 'gifts', label: 'Gifts', icon: '🎁', link: '/alumni/gifts' },
    { id: 'welfare', label: 'Welfare', icon: '❤️', link: '/alumni/welfare' }
  ];

  return (
    <div className="alumni-layout">
      <nav className="alumni-nav">
        <div className="nav-header">
          <Link to="/alumni/dashboard" className="nav-brand">
            <h1 className="nav-title">Equal Education</h1>
            <p className="nav-subtitle">Alumni Portal</p>
          </Link>
        </div>



        <div className="nav-footer">
          <Link to="/alumni/profile" className="profile-btn">
            <span className="nav-icon">👤</span>
            My Profile
          </Link>
          <button className="logout-btn" onClick={handleLogout}>
            <span className="nav-icon">🚪</span>
            Logout
          </button>
        </div>
      </nav>

      {isConfirmLogoutVisible && (
        <div className="logout-confirm-overlay">
          <div className="logout-confirm-modal">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="logout-confirm-buttons">
              <button className="confirm-btn" onClick={confirmLogout}>Yes, Logout</button>
              <button className="cancel-btn" onClick={cancelLogout}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <main className="alumni-main">
        {children}
      </main>
    </div>
  );
};

export default AlumniLayout; 