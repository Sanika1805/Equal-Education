import React from 'react';
import { Card } from '../ui/Card';
import '../ui/styles.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: string;
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userRole,
  onLogout,
}) => {
  const getRoleTitle = (role: string) => {
    switch (role) {
      case 'student':
        return 'Student Learning Portal';
      case 'teacher':
        return 'Educator Portal';
      case 'special_children':
        return 'Special Learning Portal';
      case 'alumni':
        return 'Alumni Network';
      case 'parents':
        return 'Parent Portal';
      case 'donor':
        return 'Donor Space';
      default:
        return 'Welcome';
    }
  };

  return (
    <div className="dashboard-layout">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h1>Equal Education</h1>
        </div>
        <div className="nav-items">
          <span className="user-role">{userRole}</span>
          <button onClick={onLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>
      
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h2>{getRoleTitle(userRole)}</h2>
        </div>
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 