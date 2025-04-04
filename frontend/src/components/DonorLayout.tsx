import React from 'react';
import Navigation from '../components/Navigation';
import './DonorLayout.css';

interface DonorLayoutProps {
  children: React.ReactNode;
  activePage: string;
}

const DonorLayout: React.FC<DonorLayoutProps> = ({ children, activePage }) => {
  return (
    <div className="donor-layout">
      <Navigation activePage={activePage} />
      <main className="donor-content">
        {children}
      </main>
    </div>
  );
};

export default DonorLayout; 