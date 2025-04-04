import React from 'react';
import './Navigation.css';

interface NavigationProps {
  activePage: string;
}

const Navigation: React.FC<NavigationProps> = ({ activePage }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/donor/home">Equal Education</a>
        </div>
        <ul className="nav-links">
          <li className={activePage === 'home' ? 'active' : ''}>
            <a href="/donor/home">Home</a>
          </li>
          <li className={activePage === 'donate' ? 'active' : ''}>
            <a href="/donor/donate">Donate</a>
          </li>
          <li className={activePage === 'profile' ? 'active' : ''}>
            <a href="/donor/profile">My Profile</a>
          </li>
          <li className={activePage === 'history' ? 'active' : ''}>
            <a href="/donor/history">Donation History</a>
          </li>
          <li className={activePage === 'impact' ? 'active' : ''}>
            <a href="/donor/impact">My Impact</a>
          </li>
        </ul>
        <div className="nav-user">
          <button className="logout-button" onClick={() => window.location.href = '/'}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 