import React from 'react';
import './NavBar.css';

interface NavBarProps {
  onMenuClick: (menu: string) => void;
  activeMenu: string;
}

const NavBar: React.FC<NavBarProps> = ({ onMenuClick, activeMenu }) => {
  const handleClassroomClick = () => {
    // Replace this URL with your actual Google Classroom URL
    window.open('https://classroom.google.com', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">Teacher Dashboard</div>
      <div className="nav-menu">
        <button
          className={`nav-item ${activeMenu === 'doubts' ? 'active' : ''}`}
          onClick={() => onMenuClick('doubts')}
        >
          Doubts
        </button>
        <button
          className={`nav-item ${activeMenu === 'progress' ? 'active' : ''}`}
          onClick={() => onMenuClick('progress')}
        >
          Student Progress
        </button>
        <button
          className={`nav-item ${activeMenu === 'attendance' ? 'active' : ''}`}
          onClick={() => onMenuClick('attendance')}
        >
          Attendance
        </button>
        <button
          className={`nav-item ${activeMenu === 'about' ? 'active' : ''}`}
          onClick={() => onMenuClick('about')}
        >
          About Us
        </button>
        <button
          className={`nav-item ${activeMenu === 'contact' ? 'active' : ''}`}
          onClick={() => onMenuClick('contact')}
        >
          Contact Us
        </button>
        <button
          className="nav-item classroom-button"
          onClick={handleClassroomClick}
        >
          Classroom
        </button>
      </div>
    </nav>
  );
};

export default NavBar; 