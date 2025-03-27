import React from 'react';
import './NavBar.css';

interface NavBarProps {
  onMenuClick: (menu: string) => void;
  activeMenu: string;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuClick, activeMenu }) => {
  const menuItems = [
    { id: 'doubts', label: 'Doubts' },
    { id: 'progress', label: 'Student Progress' },
    { id: 'attendance', label: 'Attendance' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-brand">Teacher Dashboard</div>
      <div className="nav-menu">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => onMenuClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar; 