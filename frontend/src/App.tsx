import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './pages/AuthenticationPage';
import DonorRegistration from './pages/DonorRegistration';
import DonorHome from './pages/DonorHome';
import DonationSelection from './pages/DonationSelection';
import DonationDetails from './pages/DonationDetails';
import DonationConfirmation from './pages/DonationConfirmation';
import DonorProfile from './pages/DonorProfile';
import DonationHistory from './pages/DonationHistory';
import DonorImpact from './pages/DonorImpact';
import DonorLayout from './components/DonorLayout';
import './styles/theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/donor/register" element={<DonorRegistration />} />
        
        {/* Donor routes with layout */}
        <Route path="/donor/home" element={
          <DonorLayout activePage="home">
            <DonorHome />
          </DonorLayout>
        } />
        <Route path="/donor/donate" element={
          <DonorLayout activePage="donate">
            <DonationSelection />
          </DonorLayout>
        } />
        <Route path="/donor/donation-details/:type" element={
          <DonorLayout activePage="donate">
            <DonationDetails />
          </DonorLayout>
        } />
        <Route path="/donor/confirmation" element={
          <DonorLayout activePage="donate">
            <DonationConfirmation />
          </DonorLayout>
        } />
        <Route path="/donor/profile" element={
          <DonorLayout activePage="profile">
            <DonorProfile />
          </DonorLayout>
        } />
        <Route path="/donor/history" element={
          <DonorLayout activePage="history">
            <DonationHistory />
          </DonorLayout>
        } />
        <Route path="/donor/impact" element={
          <DonorLayout activePage="impact">
            <DonorImpact />
          </DonorLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;
