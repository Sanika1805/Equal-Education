import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentLayout.css';

const ParentLayout = ({ children, activePage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <div className="parent-layout">
      <aside className="parent-sidebar">
        <div className="sidebar-header">
          <h2>Parent Portal</h2>
        </div>
        
        <nav className="sidebar-nav">
          <Link
            to="/parent/dashboard"
            className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`}
          >
            Growth Tracker
          </Link>
          <Link
            to="/parent/education"
            className={`nav-link ${activePage === 'education' ? 'active' : ''}`}
          >
            Education Content
          </Link>
          <Link
            to="/parent/planning"
            className={`nav-link ${activePage === 'planning' ? 'active' : ''}`}
          >
            Future Planning
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button className="profile-btn">
            Profile Settings
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      <main className="parent-main">
        {children}
      </main>
    </div>
  );
};

export default ParentLayout; 