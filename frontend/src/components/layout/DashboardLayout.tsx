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
      case 'Student':
        return 'Student Dashboard';
      case 'Teacher':
        return 'Teacher Dashboard';
      case 'Alumni':
        return 'Alumni Dashboard';
      case 'Special Children':
        return 'Special Children Dashboard';
      case 'Parents':
        return 'Parent Dashboard';
      case 'Donor':
        return 'Donor Dashboard';
      default:
        return 'Dashboard';
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